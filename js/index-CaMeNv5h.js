import{j as e,F as r,a,b as o,c as n,d as s,e as t,f as i}from"./main-Duk04OVN.js";import{r as l}from"./vendor-AC2dI90m.js";import{d as c,m as d}from"./ui-BSqZ8KaP.js";import"./utils-bdYuHuxv.js";const m=d`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,g=d`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,h=d`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`,p=c.form`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  animation: ${m} 0.6s ease-out;
`;c.div`
  text-align: center;
  margin-bottom: 2rem;
`,c.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
`,c.p`
  color: #5a6c7d;
  font-size: 1.1rem;
  line-height: 1.6;
`;const b=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .char-counter {
    text-align: right;
    font-size: 0.8rem;
    color: #6c757d;
    margin-top: 0.25rem;
  }
`,u=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,x=c.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;

  svg {
    color: #2E8B57;
    font-size: 0.9rem;
  }
`,f=c.input`
  padding: 1rem 1.25rem;
  border: 2px solid ${e=>e.$hasError?"#e74c3c":"#e9ecef"};
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  outline: none !important;

  &::placeholder {
    color: #adb5bd;
  }

  &:hover:not(:focus) {
    border-color: ${e=>e.$hasError?"#e74c3c":"#ced4da"};
  }

  &:focus {
    border-color: ${e=>e.$hasError?"#e74c3c":"#2E8B57"};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(231, 76, 60, 0.1)":"rgba(46, 139, 87, 0.1)"};
    transform: translateY(-1px);
  }

  ${e=>e.$hasError&&"\n    background-color: #fdf2f2;\n  "}
`,j=c.textarea`
  padding: 1rem 1.25rem;
  border: 2px solid ${e=>e.$hasError?"#e74c3c":"#e9ecef"};
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  outline: none !important;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &::placeholder {
    color: #adb5bd;
  }

  &:hover:not(:focus) {
    border-color: ${e=>e.$hasError?"#e74c3c":"#ced4da"};
  }

  &:focus {
    border-color: ${e=>e.$hasError?"#e74c3c":"#2E8B57"};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(231, 76, 60, 0.1)":"rgba(46, 139, 87, 0.1)"};
    transform: translateY(-1px);
  }

  ${e=>e.$hasError&&"\n    background-color: #fdf2f2;\n  "}
`,$=c.select`
  padding: 1rem 1.25rem;
  border: 2px solid ${e=>e.$hasError?"#e74c3c":"#e9ecef"};
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  outline: none !important;
  cursor: pointer;

  &:hover:not(:focus) {
    border-color: ${e=>e.$hasError?"#e74c3c":"#ced4da"};
  }

  &:focus {
    border-color: ${e=>e.$hasError?"#e74c3c":"#2E8B57"};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(231, 76, 60, 0.1)":"rgba(46, 139, 87, 0.1)"};
    transform: translateY(-1px);
  }

  ${e=>e.$hasError&&"\n    background-color: #fdf2f2;\n  "}

  option {
    padding: 0.5rem;
  }
`,v=c.span`
  color: #e74c3c;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::before {
    content: '⚠';
    font-size: 0.8rem;
  }
`,w=c.button`
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: white;
  border: none;
  padding: 1.25rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 16px rgba(46, 139, 87, 0.3);
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #1e5f3b 0%, #1c6e1c 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(46, 139, 87, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1rem;
  }
`,E=c.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${g} 1s ease-in-out infinite;
`,k=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 20px;
  border: 2px solid #10b981;
  animation: ${m} 0.6s ease-out;

  .success-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    animation: ${h} 2s infinite;
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
  }

  h3 {
    color: #065f46;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: #047857;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 400px;
  }

  .new-message-btn {
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    border: none;
    padding: 0.875rem 2rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(46, 139, 87, 0.2);

    &:hover {
      background: linear-gradient(135deg, #1e5f3b 0%, #1c6e1c 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(46, 139, 87, 0.3);
    }
  }
`,y=()=>{const[c,d]=l.useState({name:"",email:"",phone:"",subject:"",message:""}),[m,g]=l.useState({}),[h,y]=l.useState(!1),[z,N]=l.useState(!1),C=[{value:"",label:"Selecione um assunto"},{value:"consulta",label:"Agendar Consulta"},{value:"informacoes",label:"Informações"},{value:"orcamento",label:"Orçamento"},{value:"emergencia",label:"Emergência"},{value:"outros",label:"Outros"}],B=(e,r)=>{let a="";switch(e){case"name":r.trim()?r.trim().length<2?a="Nome deve ter pelo menos 2 caracteres":r.trim().length>60?a="Nome deve ter no máximo 60 caracteres":/^[a-zA-ZÀ-ÿ\s]+$/.test(r.trim())||(a="Nome deve conter apenas letras e espaços"):a="Nome é obrigatório";break;case"email":r.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)||(a="Email inválido"):a="Email é obrigatório";break;case"phone":r.trim()?/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(r)||(a="Telefone inválido"):a="Telefone é obrigatório";break;case"subject":r||(a="Assunto é obrigatório");break;case"message":r.trim()?r.trim().length<10&&(a="Mensagem deve ter pelo menos 10 caracteres"):a="Mensagem é obrigatória"}return a},Y=(e,r)=>{let a=r;if("phone"===e?a=(e=>{const r=e.replace(/\D/g,"");return r.length<=2?r:r.length<=6?`(${r.slice(0,2)}) ${r.slice(2)}`:r.length<=10?`(${r.slice(0,2)}) ${r.slice(2,6)}-${r.slice(6)}`:`(${r.slice(0,2)}) ${r.slice(2,7)}-${r.slice(7,11)}`})(r):"name"===e&&(a=r.replace(/[^a-zA-ZÀ-ÿ\s]/g,""),a=a.replace(/\s+/g," "),a.length>60&&(a=a.substring(0,60))),d(r=>({...r,[e]:a})),r){const r=B(e,a);g(a=>({...a,[e]:r}))}else g(r=>({...r,[e]:""}))},A=()=>{d({name:"",email:"",phone:"",subject:"",message:""}),g({}),N(!1)};return z?e.jsxs(k,{children:[e.jsx("div",{className:"success-icon",children:e.jsx(r,{})}),e.jsx("h3",{children:"Mensagem enviada com sucesso!"}),e.jsx("p",{children:"Obrigado pelo seu contato. Em breve você será redirecionado para o WhatsApp para darmos continuidade ao atendimento."}),e.jsx("button",{onClick:A,className:"new-message-btn",children:"Enviar nova mensagem"})]}):e.jsx(p,{onSubmit:async e=>{if(e.preventDefault(),(()=>{const e={};return Object.keys(c).forEach(r=>{const a=B(r,c[r]);a&&(e[r]=a)}),g(e),0===Object.keys(e).length})()){y(!0);try{await new Promise(e=>setTimeout(e,2e3)),N(!0);const e=`Olá! Nova mensagem do site:\n\n*Nome:* ${c.name}\n*Email:* ${c.email}\n*Telefone:* ${c.phone}\n*Assunto:* ${C.find(e=>e.value===c.subject)?.label}\n\n*Mensagem:*\n${c.message}`;setTimeout(()=>{const r=`https://wa.me/555591679300?text=${encodeURIComponent(e)}`;window.open(r,"_blank")},2e3)}catch(r){}finally{y(!1)}}},children:e.jsxs(b,{children:[e.jsxs(u,{children:[e.jsxs(x,{children:[e.jsx(a,{}),"Nome Completo *"]}),e.jsx(f,{type:"text",placeholder:"Digite seu nome completo",value:c.name,onChange:e=>Y("name",e.target.value),$hasError:!!m.name,maxLength:60}),m.name&&e.jsx(v,{children:m.name})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs(u,{children:[e.jsxs(x,{children:[e.jsx(o,{}),"Email *"]}),e.jsx(f,{type:"email",placeholder:"seu@email.com",value:c.email,onChange:e=>Y("email",e.target.value),$hasError:!!m.email}),m.email&&e.jsx(v,{children:m.email})]}),e.jsxs(u,{children:[e.jsxs(x,{children:[e.jsx(n,{}),"Telefone *"]}),e.jsx(f,{type:"tel",placeholder:"(11) 99999-9999",value:c.phone,onChange:e=>Y("phone",e.target.value),$hasError:!!m.phone}),m.phone&&e.jsx(v,{children:m.phone})]})]}),e.jsxs(u,{children:[e.jsxs(x,{children:[e.jsx(s,{}),"Assunto *"]}),e.jsx($,{value:c.subject,onChange:e=>Y("subject",e.target.value),$hasError:!!m.subject,children:C.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))}),m.subject&&e.jsx(v,{children:m.subject})]}),e.jsxs(u,{children:[e.jsxs(x,{children:[e.jsx(t,{}),"Mensagem *"]}),e.jsx(j,{placeholder:"Digite sua mensagem... (mínimo 10 caracteres)",rows:"5",value:c.message,onChange:e=>Y("message",e.target.value),$hasError:!!m.message}),e.jsxs("div",{className:"char-counter",children:[c.message.length,"/1000"]}),m.message&&e.jsx(v,{children:m.message})]}),e.jsx(w,{type:"submit",disabled:h,children:h?e.jsxs(e.Fragment,{children:[e.jsx(E,{}),"Enviando..."]}):e.jsxs(e.Fragment,{children:[e.jsx(i,{}),"Enviar Mensagem"]})})]})})};export{y as default};
