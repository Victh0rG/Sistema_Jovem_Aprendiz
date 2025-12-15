/projeto-controle-ponto
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # conexão com banco
│   │   │   └── env.js             # variáveis ambiente
│   │   │
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   └── auth.service.js
│   │   │   │
│   │   │   ├── ponto/
│   │   │   ├── ponto.controller.js   # recebe requisições, valida e envia ao service
│   │   │   ├── ponto.service.js      # regra de negócio (registrar batida, calcular horas)
│   │   │   ├── ponto.model.js        # modelagem do banco (Prisma/Sequelize)
│   │   │   └── ponto.route.js       # rotas (GET/POST/PUT)
│   │   │   │
│   │   │   │
│   │   │   ├── documentos/
│   │   │   │   ├── documentos.controller.js
│   │   │   │   ├── documentos.service.js
│   │   │   │   ├── documentos.routes.js
│   │   │   │   └── documentos.model.js
│   │   │   │
│   │   │   ├── usuarios/
│   │   │   │   ├── usuario.controller.js
│   │   │   │   ├── usuario.service.js
│   │   │   │   ├── usuario.routes.js
│   │   │   │   └── usuario.model.js
│   │   │   │
│   │   │   ├── analise/
│   │   │   │   ├── analise.controller.js
│   │   │   │   ├── analise.service.js
│   │   │   │   └── analise.routes.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js  # JWT / sessões # valida token JWT
│   │   │   ├── upload.middleware.js # multer / upload de documentos
│   │   │   └── error.middleware.js # tratamento de erros centralizado
│   │   │
│   │   ├── utils/
│   │   │   ├── jwt.js
│   │   │   ├── date.js
│   │   │   └── logger.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── uploads/                    # documentos enviados
│   ├── package.json
│   └── yarn.lock
│
│
├── frontend/
│   ├── public/
│   ├── src/app/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Charts/            # gráficos de frequência e page
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login/
│   │   │   ├── Registro/
│   │   │   ├── Dashboard/
│   │   │   ├── Ponto/
│   │   │   ├── Documentos/
│   │   │   ├── Frequencia/
│   │   │   └── Admin/
│   │   │
│   │   ├── routes/
│   │   │   └── index.jsx
│   │   │
│   │   ├── api/
│   │   │   ├── api.js
│   │   │   ├── auth.service.js
│   │   │   ├── ponto.service.js
│   │   │   ├── documentos.service.js
│   │   │   └── analise.service.js
│   │   │
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
│
│
├── docs/
│   ├── diagramas/
│   │   ├── usecase.png
│   │   ├── classes.png
│   │   └── arquitetura.png
│   ├── requisitos.md
│   ├── api-reference.md
│   └── README.md
│
├── .gitignore
├── docker-compose.yml
└── README.md
