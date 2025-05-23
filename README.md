# 🎟️ Ticket Generator

Sistema web moderno que gera um ticket personalizado para o usuário após o envio dos dados e da imagem de perfil.

## 🚀 Acesse o projeto

🔗 [https://ticket-generator-kwl1.vercel.app/](https://ticket-generator-kwl1.vercel.app/)

---

## 📸 Preview

![Ticket Generator - Google Chrome 22_05_2025 21_45_48](https://github.com/user-attachments/assets/de3e27c0-4cc4-4442-8dc5-f6077e8ca545)


---

## 🧠 Funcionalidades

- Upload de imagem de perfil com preview (JPEG/PNG até 500kb)
- Armazenamento dos dados do usuário no `localStorage`
- Geração de ticket personalizado com nome, GitHub e e-mail
- Suporte a arrastar e soltar imagem (drag and drop)
- Layout responsivo e estilizado com Tailwind CSS

---

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)

---

## ⚙️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/LucasSantos96/ticket-generator.git

cd ticket-generator

npm install

npm run dev
Abra http://localhost:3000 no navegador para ver o app.

📝 Scripts úteis
npm run dev — Inicia o servidor de desenvolvimento

npm run build — Gera o build de produção

npm run start — Roda o app em produção após o build

📁 Estrutura do Projeto
bash
Copiar
Editar
📦ticket-generator
├── app/
│   ├── components/
│   │   └── UploadBox.tsx
│   └── ticket/success/page.tsx
├── public/
├── styles/
├── README.md
├── tsconfig.json
└── package.json
📫 Contato
Feito com 💻 por [Lucas Santos](https://www.linkedin.com/in/lucas-santos-de-oliveira-874497325/)
