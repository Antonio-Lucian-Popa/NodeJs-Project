# 🟢 Node.js API cu Express, Prisma și PostgreSQL

Acest proiect este un API REST simplu creat cu **Node.js**, **Express.js**, **Prisma ORM** și **PostgreSQL**, organizat modular și scalabil.

## 📁 Structură directoare

```bash
├── src
│   ├── config
│   │   └── database.ts
│   ├── controllers
│   │   └── userController.ts
│   ├── middlewares
│   │   └── authMiddleware.ts
│   ├── models
│   │   └── userModel.ts
│   ├── routes
│   │   └── userRoutes.ts
│   ├── services
│   │   └── userService.ts
│   ├── utils
│   │   └── logger.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── prisma
│   ├── migrations
│   └── schema.prisma
├── README.md
└── tsconfig.json
```
---

## 🚀 Funcționalități

- ✅ Creare utilizator (`POST /api/users`)
- ✅ Listare utilizatori (`GET /api/users`)
- 🔄 Extensibil ușor cu alte resurse: produse, comenzi etc.

---

## ⚙️ Tehnologii

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postman](https://www.postman.com/) – pentru testare API

---

## 🛠️ Instalare

### 1. Clonează proiectul

```bash
git clone https://github.com/utilizator/nume-repo.git
cd nume-repo
