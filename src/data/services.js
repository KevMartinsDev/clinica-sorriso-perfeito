import { FaTooth, FaSmile, FaStar, FaCog } from 'react-icons/fa';

export const servicesData = [
  {
    id: 1,
    title: 'Clínica Geral',
    description: 'Cuidados essenciais para sua saúde bucal',
    price: 'A partir de R$ 120',
    icon: FaTooth,
    color: '#2E8B57',
    features: ['Limpeza', 'Restaurações', 'Tratamento de cáries']
  },
  {
    id: 2,
    title: 'Ortodontia',
    description: 'Alinhamento perfeito do seu sorriso',
    price: 'A partir de R$ 100',
    icon: FaSmile,
    color: '#4169E1',
    features: ['Aparelhos fixos', 'Aparelhos móveis', 'Invisalign']
  },
  {
    id: 3,
    title: 'Estética Dental',
    description: 'Transforme seu sorriso com naturalidade',
    price: 'A partir de R$ 450',
    icon: FaStar,
    color: '#FF6B35',
    features: ['Clareamento', 'Facetas', 'Harmonização']
  },
  {
    id: 4,
    title: 'Implantes',
    description: 'Recupere a função e estética dos dentes',
    price: 'A partir de R$ 1.800',
    icon: FaCog,
    color: '#8A2BE2',
    features: ['Implante unitário', 'Prótese total', 'Carga imediata']
  }
];