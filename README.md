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
--primary-color: #2E8B57     /* Verde médico */
--primary-color-light: #90EE90
--primary-color-dark: #1e5f3f
--secondary-color: #87CEEB   /* Azul claro */
--accent-color: #FFD700      /* Dourado */
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
├── 📁 components/          # Componentes React organizados por feature
│   ├── about/             # Componentes da página Sobre
│   │   └── TeamSection.jsx
│   ├── blog/              # Sistema de blog/artigos
│   │   ├── BlogCard.jsx   # Card individual do post
│   │   ├── BlogList.jsx   # Lista de posts
│   │   ├── BlogPost.jsx   # Visualização completa do post
│   │   ├── SearchBar.jsx  # Busca no blog
│   │   └── __tests__/     # Testes dos componentes do blog
│   ├── common/            # Componentes base reutilizáveis
│   │   ├── Button.jsx     # Sistema de botões
│   │   ├── Card.jsx       # Componente de card base
│   │   ├── CookieConsent.jsx # Consentimento de cookies
│   │   ├── ErrorBoundary.jsx # Tratamento de erros
│   │   ├── Footer.jsx     # Rodapé global
│   │   ├── Header.jsx     # Cabeçalho com navegação
│   │   ├── Input.jsx      # Campo de entrada base
│   │   ├── Layout.jsx     # Layout wrapper
│   │   ├── Loading.jsx    # Estado de carregamento
│   │   ├── LoadingSpinner.jsx # Spinner de carregamento
│   │   ├── Modal.jsx      # Sistema de modais
│   │   ├── NotFound.jsx   # Página 404
│   │   ├── ScrollToTop.jsx # Botão voltar ao topo
│   │   ├── Select.jsx     # Campo de seleção
│   │   ├── SEO.jsx        # Otimização SEO
│   │   ├── Textarea.jsx   # Campo de texto multilinha
│   │   ├── WhatsAppFloat.jsx # Botão flutuante WhatsApp
│   │   └── __tests__/     # Testes dos componentes comuns
│   ├── forms/             # Sistema de formulários
│   │   ├── AppointmentForm.jsx # Formulário de agendamento
│   │   ├── ContactForm.jsx # Formulário de contato
│   │   ├── DatePicker.jsx  # Seletor de data
│   │   ├── ServiceSelector.jsx # Seletor de serviços
│   │   ├── TimeSlots.jsx   # Seleção de horários
│   │   └── __tests__/      # Testes dos formulários
│   ├── gallery/           # Sistema de galeria
│   │   ├── FilterButtons.jsx # Filtros da galeria
│   │   ├── ImageCard.jsx   # Card de imagem
│   │   ├── ImageGallery.jsx # Grid da galeria
│   │   ├── LazyImage.jsx   # Carregamento lazy de imagens
│   │   ├── Lightbox.jsx    # Visualização ampliada
│   │   ├── LoadingSpinner.jsx # Spinner específico da galeria
│   │   ├── OptimizedImage.jsx # Componente de imagem otimizada
│   │   └── __tests__/      # Testes da galeria
│   └── home/              # Componentes específicos da homepage
│       ├── ContactInfo.jsx # Informações de contato
│       ├── Hero.jsx        # Seção principal/banner
│       ├── ServicesPreview.jsx # Preview dos serviços
│       └── Testimonials.jsx # Depoimentos de clientes
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
│   ├── About.jsx          # Página sobre a clínica
│   ├── Agendamento.jsx    # Página de agendamento (PT)
│   ├── Appointment.jsx    # Página de agendamento (EN)
│   ├── Blog.jsx           # Listagem do blog
│   ├── BlogPage.jsx       # Página alternativa do blog
│   ├── BlogPostPage.jsx   # Página individual do post
│   ├── Contact.jsx        # Página de contato
│   ├── Galeria.jsx        # Galeria (PT)
│   ├── Gallery.jsx        # Galeria (EN)
│   ├── Home.jsx           # Página inicial
│   └── Services.jsx       # Página de serviços
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

## 📱 **Acesso**

- **Desenvolvimento**: `http://localhost:5173`
- **Produção**: [Link do deploy quando disponível]

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