import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scale, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImcCalculator: React.FC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [categoria, setCategoria] = useState('');
  const navigate = useNavigate();

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const idadeNum = parseInt(idade);
    
    // Detectar se a altura está em metros ou centímetros
    let alturaInput = altura.replace(',', '.'); // Substituir vírgula por ponto
    let alturaNum = parseFloat(alturaInput);
    
    // Se o valor for menor que 3, assumir que está em metros
    // Se for maior que 3, assumir que está em centímetros e converter
    if (alturaNum > 3) {
      alturaNum = alturaNum / 100; // Converter cm para metros
    }

    if (pesoNum > 0 && alturaNum > 0 && idadeNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(imc);

      // Classificação considerando idade
      let categoriaCalculada = '';
      
      if (idadeNum >= 65) {
        // Para idosos (65+), os valores são ligeiramente diferentes
        if (imc < 22) categoriaCalculada = 'Abaixo do peso';
        else if (imc < 27) categoriaCalculada = 'Peso normal';
        else if (imc < 30) categoriaCalculada = 'Sobrepeso';
        else if (imc < 35) categoriaCalculada = 'Obesidade Grau 1';
        else if (imc < 40) categoriaCalculada = 'Obesidade Grau 2';
        else categoriaCalculada = 'Obesidade Grau 3';
      } else {
        // Para adultos (18-64 anos)
        if (imc < 18.5) categoriaCalculada = 'Abaixo do peso';
        else if (imc < 24.9) categoriaCalculada = 'Peso normal';
        else if (imc < 29.9) categoriaCalculada = 'Sobrepeso';
        else if (imc < 34.9) categoriaCalculada = 'Obesidade Grau 1';
        else if (imc < 39.9) categoriaCalculada = 'Obesidade Grau 2';
        else categoriaCalculada = 'Obesidade Grau 3';
      }
      
      setCategoria(categoriaCalculada);
    }
  };

  const handleEntenderSituacao = () => {
    // Salvar dados no localStorage para usar na landing page
    const dadosUsuario = {
      peso: parseFloat(peso),
      altura: parseFloat(altura.replace(',', '.')),
      idade: parseInt(idade),
      imc: resultado,
      categoria
    };
    localStorage.setItem('dadosImcUsuario', JSON.stringify(dadosUsuario));
    navigate('/planos-personalizados?origem=calculadora-imc');
  };

  const getRecommendationMessage = () => {
    if (!categoria) return '';
    
    if (categoria === 'Peso normal') {
      return 'Parabéns! Seu IMC está na faixa ideal. Descubra como manter e otimizar seus resultados.';
    } else if (categoria === 'Abaixo do peso') {
      return 'Seu IMC indica que você precisa de estratégias específicas para ganho de massa muscular.';
    } else {
      return 'Seu IMC indica que você precisa de um protocolo personalizado para transformação corporal.';
    }
  };

  return (
    <div className="p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mb-6 shadow-lg">
          <Scale className="h-10 w-10 text-black" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Calculadora de IMC Inteligente</h2>
        <p className="text-light-gray">
          O IMC é uma medida internacional usada para calcular se uma pessoa está no peso ideal, considerando também a idade.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Peso (kg) *
            </label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-dark/50 border border-gray-600 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
              placeholder="Ex: 70"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Altura (ex: 1,70 ou 170) *
            </label>
            <input
              type="text"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-dark/50 border border-gray-600 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
              placeholder="Ex: 1,70 ou 170"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Idade (anos) *
            </label>
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-dark/50 border border-gray-600 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
              placeholder="Ex: 30"
              min="18"
              max="120"
            />
          </div>
        </div>
        
        <button
          onClick={calcularIMC}
          className="w-full bg-gradient-to-r from-primary to-primary-dark text-black font-bold py-6 px-8 rounded-xl text-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
        >
          <Scale className="w-6 h-6 inline mr-2" />
          Calcular Meu IMC
        </button>
      </div>

      {resultado && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur" />
          
          <div className="relative bg-gradient-to-br from-dark-lighter/90 to-dark/90 backdrop-blur-xl p-8 rounded-2xl border border-primary/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-6 shadow-lg">
              <Scale className="h-8 w-8 text-black" />
            </div>
            
            <h3 className="text-3xl font-bold mb-2">Seu IMC: {resultado.toFixed(1)}</h3>
            <p className="text-primary font-semibold text-xl mb-6">
              Classificação: {categoria}
            </p>
            <p className="text-light-gray text-lg mb-6">
              {getRecommendationMessage()}
            </p>
            
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Próximo Passo Recomendado:</span>
              </div>
              <p className="text-light-gray">
                Com base no seu perfil, você precisa de um plano ajustado ao seu metabolismo e rotina. 
                Conheça como a ScarFit cria esse plano 100% sob medida.
              </p>
            </div>
            
            <button
              onClick={handleEntenderSituacao}
              className="bg-gradient-to-r from-primary to-primary-dark text-black font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              <ArrowRight className="w-6 h-6" />
              Entenda Minha Situação
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <div className="mt-12 bg-dark/30 p-6 rounded-2xl border border-gray-700">
        <h4 className="text-lg font-semibold text-primary mb-4 text-center">Classificação do IMC por Idade</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-light-gray">
          <div>
            <p className="font-medium text-primary mb-2">Adultos (18-64 anos):</p>
            <ul className="space-y-1">
              <li>• Abaixo do peso: menos de 18,5</li>
              <li>• Peso normal: entre 18,5 e 24,9</li>
              <li>• Sobrepeso: entre 25 e 29,9</li>
              <li>• Obesidade grau 1: entre 30 e 34,9</li>
              <li>• Obesidade grau 2: entre 35 e 39,9</li>
              <li>• Obesidade grau 3: 40 ou mais</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-primary mb-2">Idosos (65+ anos):</p>
            <ul className="space-y-1">
              <li>• Abaixo do peso: menos de 22</li>
              <li>• Peso normal: entre 22 e 27</li>
              <li>• Sobrepeso: entre 27 e 30</li>
              <li>• Obesidade grau 1: entre 30 e 35</li>
              <li>• Obesidade grau 2: entre 35 e 40</li>
              <li>• Obesidade grau 3: 40 ou mais</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImcCalculator;