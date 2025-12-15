# 📌 Sistema de Controle de Ponto

## 📖 Visão Geral

Este projeto consiste em um **Sistema de Controle de Ponto Eletrônico**, onde o usuário registra sua presença ao realizar login (matrícula ou e-mail + senha). O sistema registra automaticamente **data, hora e minutos**, permitindo posterior **visualização, análise e auditoria** dos registros.

O sistema foi pensado para ser **escalável, seguro e auditável**, utilizando uma arquitetura moderna baseada em **API REST**.

---

## 🧱 Arquitetura Geral

```
┌─────────────┐        HTTP/JSON        ┌──────────────┐
│  Front-End  │  ───────────────────▶ │   Back-End   │
│  Next.js    │                        │ Node.js API  │
└─────────────┘                        └──────┬───────┘
                                              │
                                              ▼
                                      ┌────────────────┐
                                      │ Banco de Dados │
                                      │ PostgreSQL /   │
                                      │ MySQL          │
                                      └────────────────┘
```

---

## 🛠️ Tecnologias Utilizadas

### 🔹 Front-End

* **Next.js 16** (App Router)
* **React**
* **Fetch API / Axios**


### 🔹 Back-End

* **Node.js**
* **Express.js**
* **JWT (Autenticação)**
* **bcrypt** (hash de senha)
* **multer** (upload de documentos)

### 🔹 Banco de Dados

**MySQL**

### 🔹 Infraestrutura

* **npm (node_modules)**
* **dotenv** (variáveis de ambiente)
* **Nodemon** (ambiente de desenvolvimento)

---

## 📂 Estrutura de Pastas (Back-End)

```
Back-End/
│
├── src/
│   ├── config/          # Configurações globais (DB, env)
│   ├── controllers/     # Lógica das requisições
│   ├── middlewares/     # Autenticação, validações
│   ├── models/          # Modelos do banco de dados
│   ├── routes/          # Centralização das rotas
│   ├── services/        # Regras de negócio
│   └── uploads/         # Arquivos enviados
│
├── app.js               # Configuração do Express
├── server.js            # Inicialização do servidor
├── package.json
└── .env
```

---

## 🔐 Autenticação

* Login via **matrícula ou e-mail + senha**
* Senhas armazenadas com **bcrypt**
* Sessões autenticadas via **JWT**

Fluxo:

1. Usuário faz login
2. API valida credenciais
3. Token JWT é retornado
4. Token é usado para registrar presença

---

## ⏱️ Registro de Ponto (Presença)

### 📌 O que é registrado

* **ID do usuário**
* **Data** (YYYY-MM-DD)
* **Hora** (HH:MM:SS)
* **Minutos totais**
* **Tipo do registro** (entrada / saída)

### 📄 Exemplo de estrutura no banco

```sql
CREATE TABLE registros_ponto (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL,
  data DATE NOT NULL,
  hora TIME NOT NULL,
  minutos INT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔁 Fluxo do Registro de Presença

1. Usuário clica no botão **"Presença"**
2. Front-end envia requisição autenticada
3. Back-end:

   * Captura data e hora do servidor
   * Valida usuário
   * Salva no banco
4. Retorna confirmação ao usuário

---

## 📡 Endpoint Exemplo

```http
POST /api/ponto/registrar
Authorization: Bearer <token>
```

Resposta:

```json
{
  "message": "Ponto registrado com sucesso",
  "data": "2025-06-21",
  "hora": "09:03:12"
}
```

---

## 📎 Upload de Documentos

* Utilizado para anexar justificativas (atestado, declaração, etc.)
* Implementado com **multer**

Tipos permitidos:

* PDF
* JPG / PNG

Arquivos são associados ao registro de ponto.

---

## 📊 Visualização e Análise

Funcionalidades previstas:

* Listagem por usuário
* Filtro por período
* Exportação (CSV / PDF)
* Cálculo de carga horária

---

## 🔒 Segurança

* Registro de ponto baseado no **horário do servidor**
* Rotas protegidas por autenticação
* Validação de dados no backend
* Controle de upload

---

## 📌 Boas Práticas Aplicadas

* Separação de responsabilidades
* Centralização de rotas
* Banco relacional para auditoria
* Horário controlado no servidor
* Escalabilidade para relatórios futuros

---

## 🚀 Próximos Passos

* Dashboard administrativo
* Relatórios automatizados
* Integração com BI
* Logs de auditoria

---

## 📚 Referências

* Documentação oficial do Next.js
* Express.js Best Practices
* OWASP API Security
* PostgreSQL Documentation
