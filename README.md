# 🦷 Clínica Sorriso Perfeito

<div align="center">

![React](https://img.shields.io/badge/React-18.0-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Styled Components](https://img.shields.io/badge/Styled_Components-5.3-pink?style=for-the-badge&logo=styled-components)
![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite)

</div>

## ⚠️ **Projeto Fictício**

> **Este é um projeto de portfólio desenvolvido exclusivamente para fins educacionais e demonstração técnica.**
> 
> 🚫 **Não representa uma empresa real**  
> 🚫 **Não oferece serviços odontológicos**  
> 🎯 **Criado apenas para demonstrar habilidades em desenvolvimento web**
---

## 📱 **Acesso**

- **Produção**: [[Link do deploy](https://kevmartinsdev.github.io/clinica-sorriso-perfeito/)]
---


## 📝 **Sobre o Projeto**

Site institucional moderno para uma clínica odontológica fictícia, desenvolvido com as melhores práticas de desenvolvimento front-end. O projeto demonstra a criação de uma aplicação web completa, responsiva e otimizada.

### 🎯 **Objetivo**
Demonstrar proficiência em:
- Desenvolvimento React moderno
- Design responsivo e acessível  
- Arquitetura de componentes escalável
- Integração com APIs externas (WhatsApp)
- Otimização de performance

---

## 🚀 **Tecnologias & Ferramentas**

### **Core**
- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e performática
- **React Router DOM v6** - Roteamento SPA
- **JavaScript ES6+** - Linguagem principal

### **Styling & UI**
- **Styled Components** - CSS-in-JS para estilização
- **Framer Motion** - Animações fluidas e interativas
- **React Icons** - Biblioteca de ícones
- **Design System** personalizado

### **Funcionalidades**
- **React Helmet Async** - SEO e meta tags dinâmicas
- **Custom Hooks** - Lógica reutilizável
- **Context API** - Gerenciamento de estado
- **WhatsApp Integration** - Agendamentos via WhatsApp

### **Qualidade & Testes**
- **Vitest** - Framework de testes
- **ESLint** - Análise estática de código
- **Prettier** - Formatação consistente

---

## 🎨 **Design System**

### **Paleta de Cores**
```css
--primary-color: #2E8B57    
--primary-color-light: #90EE90
--primary-color-dark: #1e5f3f
--secondary-color: #87CEEB  
--accent-color: #FFD700     
--text-dark: #2c2c2c
--text-gray: #666666
--background: #f8f9fa
```

### **Tipografia**
- **Títulos**: Roboto (700, 600, 500)
- **Corpo**: Inter/Roboto (400, 500)
- **Responsivo**: 16px base, escalas fluidas

### **Componentes**
- ✅ Sistema de Grid responsivo
- ✅ Componentes reutilizáveis
- ✅ Estados de loading/error
- ✅ Animações micro-interações

---

## 📁 **Arquitetura do Projeto**

```
src/
├── 📁 components/          # Componentes React organizados por categoria
│   ├── 📁 features/       # Componentes específicos por funcionalidade
│   │   ├── 📁 blog/       # Sistema de blog/artigos
│   │   │   ├── BlogCard/
│   │   │   │   └── index.jsx
│   │   │   ├── BlogList/
│   │   │   │   ├── index.jsx
│   │   │   │   └── BlogList.styles.js
│   │   │   ├── BlogPost/
│   │   │   │   ├── index.jsx
│   │   │   │   └── BlogPost.styles.js
│   │   │   └── SearchBar/
│   │   │       └── index.jsx
│   │   ├── 📁 gallery/    # Sistema de galeria
│   │   │   ├── FilterButtons/
│   │   │   │   └── index.jsx
│   │   │   ├── ImageGallery/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ImageGallery.styles.js
│   │   │   ├── LazyImage/
│   │   │   │   └── index.jsx
│   │   │   └── Lightbox/
│   │   │       └── index.jsx
│   │   ├── 📁 home/       # Componentes específicos da homepage
│   │   │   ├── ContactInfo/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ContactInfo.styles.js
│   │   │   ├── Hero/
│   │   │   │   ├── index.jsx
│   │   │   │   └── Hero.styles.js
│   │   │   └── ServicesPreview/
│   │   │       ├── index.jsx
│   │   │       └── ServicesPreview.styles.js
│   │   └── 📁 testimonials/ # Depoimentos e equipe
│   │       ├── TeamSection/
│   │       │   ├── index.jsx
│   │       │   └── TeamSection.styles.js
│   │       └── Testimonials/
│   │           ├── index.jsx
│   │           └── Testimonials.styles.js
│   ├── 📁 forms/          # Sistema de formulários
│   │   ├── AppointmentForm/
│   │   │   ├── index.jsx
│   │   │   ├── AppointmentForm.styles.js
│   │   │   ├── DatePicker.jsx
│   │   │   ├── ServiceSelector.jsx
│   │   │   └── TimeSlots.jsx
│   │   ├── ContactForm/
│   │   │   ├── index.jsx
│   │   │   └── ContactForm.styles.js
│   │   └── FormField/
│   │       ├── index.jsx
│   │       └── FormField.styles.js
│   ├── 📁 layout/         # Componentes de layout/estrutura
│   │   ├── CookieConsent.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── NotFound.jsx
│   │   └── ScrollToTop.jsx
│   └── 📁 ui/             # Componentes base reutilizáveis
│       ├── Button/
│       │   ├── index.jsx
│       │   ├── Button.styles.js
│       │   └── __tests__/
│       │       └── Button.test.jsx
│       ├── Card/
│       │   ├── index.jsx
│       │   └── Card.styles.js
│       ├── ErrorBoundary/
│       │   ├── index.jsx
│       │   └── ErrorBoundary.styles.js
│       ├── Input/
│       │   ├── index.jsx
│       │   └── Input.styles.js
│       ├── LazyImage/
│       │   ├── index.jsx
│       │   └── LazyImage.styles.js
│       ├── LazyLoad/
│       │   └── index.jsx
│       ├── LazyLoadWrapper/
│       │   ├── index.jsx
│       │   └── LazyLoadWrapper.styles.js
│       ├── LoadingSpinner/
│       │   ├── index.jsx
│       │   └── LoadingSpinner.styles.js
│       ├── Modal/
│       │   ├── index.jsx
│       │   └── Modal.styles.js
│       ├── OptimizedImage/
│       │   ├── index.jsx
│       │   └── OptimizedImage.styles.js
│       ├── PerformanceMonitor/
│       │   └── index.jsx
│       ├── ProgressBar/
│       │   ├── index.jsx
│       │   └── ProgressBar.styles.js
│       ├── Select/
│       │   ├── index.jsx
│       │   └── Select.styles.js
│       ├── SuspenseWrapper/
│       │   ├── index.jsx
│       │   └── SuspenseWrapper.styles.js
│       ├── Textarea/
│       │   ├── index.jsx
│       │   └── Textarea.styles.js
│       └── WhatsAppFloat/
│           ├── index.jsx
│           └── WhatsAppFloat.styles.js
├── 📁 data/               # Dados estáticos da aplicação
│   ├── blog-posts.js      # Posts do blog
│   ├── gallery.js         # Dados da galeria de imagens
│   ├── services.js        # Lista básica de serviços
│   ├── services-detailed.js # Serviços detalhados
│   ├── team.js            # Dados da equipe
│   └── testimonials.js    # Depoimentos dos clientes
├── 📁 hooks/              # Custom React Hooks
│   ├── useForm.js         # Gerenciamento de formulários
│   ├── useInfiniteScroll.js # Scroll infinito
│   ├── useIntersectionObserver.js # Observer de interseção
│   ├── useIntersectionObserverRef.js # Observer com ref
│   └── useWhatsApp.js     # Integração com WhatsApp
├── 📁 pages/              # Páginas da aplicação (React Router)
│   ├── About/
│   │   ├── index.jsx      # Página sobre a clínica
│   │   ├── About.styles.js
│   │   └── __tests__/
│   │       └── About.test.jsx
│   ├── Agendamento/
│   │   ├── index.jsx      # Página de agendamento (PT)
│   │   └── Agendamento.styles.js
│   ├── Blog/
│   │   ├── index.jsx      # Listagem do blog
│   │   └── Blog.styles.js
│   ├── BlogPage/
│   │   ├── index.jsx      # Página alternativa do blog
│   │   └── BlogPage.styles.js
│   ├── BlogPostPage/
│   │   ├── index.jsx      # Página individual do post
│   │   └── BlogPostPage.styles.js
│   ├── Contact/
│   │   ├── index.jsx      # Página de contato
│   │   └── Contact.styles.js
│   ├── Galeria/
│   │   ├── index.jsx      # Galeria (PT)
│   │   └── Galeria.styles.js
│   ├── Home/
│   │   ├── index.jsx      # Página inicial
│   │   └── Home.styles.js
│   └── Services/
│       ├── index.jsx      # Página de serviços
│       ├── Services.styles.js
│       └── __tests__/
│           └── Services.test.jsx
├── 📁 styles/             # Estilos globais
│   └── GlobalStyles.js    # Styled-components globais + CSS reset
├── 📁 test/               # Configuração de testes
│   └── setup.js           # Setup do Vitest
├── 📁 utils/              # Funções utilitárias
│   ├── analytics.js       # Google Analytics/tracking
│   ├── dateHelpers.js     # Helpers para manipulação de datas
│   ├── formatters.js      # Formatação de dados
│   ├── imageOptimization.js # Otimização de imagens
│   ├── validation.js      # Validações de formulários
│   └── __tests__/         # Testes das funções utilitárias
├── 📁 __tests__/          # Testes principais
│   └── App.test.jsx       # Teste do componente App
├── App.jsx                # Componente raiz da aplicação
└── main.jsx               # Ponto de entrada do React
```

### **Arquivos Principais na Raiz**
```
public/
├── manifest.json          # Manifesto PWA
├── robots.txt            # Diretrizes para crawlers
├── sitemap.xml           # Mapa do site para SEO
└── sw.js                 # Service Worker

scripts/
└── optimize-images.js    # Script de otimização de imagens

• index.html              # Template HTML principal
• package.json            # Dependências e scripts
• vite.config.js          # Configuração do Vite
• vitest.config.js        # Configuração dos testes
```

---

## ✨ **Funcionalidades**

### **🏠 Homepage**
- [x] Hero section com call-to-action
- [x] Preview de serviços
- [x] Depoimentos de pacientes
- [x] Informações de contato

### **📋 Páginas Institucionais**
- [x] Sobre - História da clínica
- [x] Serviços - Catálogo completo
- [x] Contato - Formulário + informações

### **🖼️ Galeria**
- [x] Grid responsivo de imagens
- [x] Filtros por categoria
- [x] Lightbox para visualização
- [x] Lazy loading otimizado
- [x] Scroll infinito

### **📝 Blog/Artigos**
- [x] Lista de posts
- [x] Sistema de busca
- [x] Posts individuais
- [x] SEO otimizado
- [x] Call-to-action para agendamento

### **📱 Agendamento**
- [x] Formulário completo
- [x] Validações em tempo real
- [x] Integração com WhatsApp
- [x] Seleção de serviços/profissionais

### **🎨 UX/UI**
- [x] Design 100% responsivo
- [x] Animações suaves (Framer Motion)
- [x] Loading states
- [x] Error boundaries
- [x] Acessibilidade (a11y)

---

## 🛠️ **Como Executar**

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/clinica-sorriso-perfeito.git

# Entre no diretório
cd clinica-sorriso-perfeito

# Instale as dependências
npm install
```

### **Desenvolvimento**
```bash
# Executar em modo desenvolvimento
npm run dev

# Executar testes
npm run test

# Executar testes em watch mode
npm run test:watch

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint do código
npm run lint

# Formatação do código
npm run format
```

### **Scripts Disponíveis**
| Comando | Descrição |
|---------|-----------|
| `dev` | Inicia servidor de desenvolvimento |
| `build` | Gera build otimizada para produção |
| `preview` | Preview da build de produção |
| `test` | Executa testes unitários |
| `test:watch` | Testes em modo watch |
| `lint` | Análise de código com ESLint |
| `format` | Formatação com Prettier |


---

## 🧪 **Testes**

```bash
# Executar todos os testes
npm run test

# Testes com coverage
npm run test:coverage

# Testes em modo watch
npm run test:watch
```

### **Cobertura de Testes**
- ✅ Componentes principais
- ✅ Custom hooks
- ✅ Funções utilitárias
- ✅ Validações de formulário

---

## 📊 **Performance**

### **Otimizações Implementadas**
- ✅ **Code Splitting** - Lazy loading de rotas
- ✅ **Image Optimization** - Compressão e lazy loading
- ✅ **Bundle Size** - Análise e otimização
- ✅ **Memoization** - React.memo e useMemo
- ✅ **Tree Shaking** - Eliminação de código morto

### **Lighthouse Score (Target)**
- 🎯 Performance: 90+
- 🎯 Accessibility: 95+
- 🎯 Best Practices: 90+
- 🎯 SEO: 95+

---

### **Suporte a Navegadores**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🤝 **Contribuição**

Este é um projeto de portfólio pessoal, mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 **Desenvolvedor**

Desenvolvido com ❤️ para fins de portfólio e demonstração técnica.

**Contato**: [Linkedin](https://www.linkedin.com/in/kevin-mart/)

---

<div align="center">

### ⭐ Se este projeto te ajudou, considere dar uma estrela!

**Clínica Sorriso Perfeito** - Projeto Fictício para Demonstração 🦷✨

</div>
