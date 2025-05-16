# 🟢 Node.js API cu Express, Prisma, PostgreSQL și Keycloak

Acest proiect este un API REST modular, creat cu **Node.js**, **Express.js**, **Prisma ORM**, **PostgreSQL** și **Keycloak** pentru autentificare și gestionarea utilizatorilor.

---

## 📁 Structură directoare

```bash
├── prisma/
│   ├── migrations/
│   └── schema.prisma               # Modelele bazei de date
│
├── src/
│   ├── config/
│   │   └── db.js                   # Configurare Prisma Client
│   │
│   ├── controllers/
│   │   ├── authController.js       # Înregistrare & login prin Keycloak
│   │   ├── productController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── keycloakMiddleware.js   # Middleware pentru validarea JWT din Keycloak
│   │
│   ├── models/
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── services/
│   │   ├── keycloakService.js      # Conectare cu Keycloak Admin API
│   │   └── userService.js
│
├── .env                            # Variabile de mediu
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js                       # Punctul de pornire al aplicației

```
---

## 🚀 Funcționalități

- ✅ Creare utilizator (`POST /api/users`)
- ✅ Listare utilizatori (`GET /api/users`)
- 🔄 Extensibil ușor cu alte resurse: produse, comenzi etc.
- ✅ Înregistrare utilizator în Keycloak și salvare în baza de date (POST /api/auth/register)
- ✅ Login utilizator – primește token JWT de la Keycloak (POST /api/auth/login)
- ✅ Listare utilizatori (GET /api/users)
- ✅ Protejare rute cu middleware JWT (keycloakMiddleware)
- 🔄 Structură ușor extensibilă (produse, comenzi, roluri etc.

---

## ⚙️ Tehnologii

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Keycloak](https://www.keycloak.org/)
- [Postman](https://www.postman.com/) – pentru testare API

---

## 🔐 Integrare Keycloak
Integrarea cu Keycloak permite:
- Creare conturi direct din backend (keycloakService.js)
- Autentificare pe baza credențialelor și returnarea token-ului
- Protejarea rutelor folosind middleware ce validează JWT-ul

---

## 🌍 Variabile de mediu (.env)
```bash
# Variabile de mediu pentru conectarea la baza de date și Keycloak
# PostgreSQL
DATABASE_URL="postgresql://user:pass@localhost:5432/dbname"

# Keycloak config
KEYCLOAK_BASE_URL=http://localhost:8080
KEYCLOAK_REALM=myrealm
KEYCLOAK_CLIENT_ID=my-client
KEYCLOAK_CLIENT_SECRET=my-secret
KEYCLOAK_ADMIN_USER=admin
KEYCLOAK_ADMIN_PASS=admin
```
---

## 🛠️ Instalare

### 1. Clonează proiectul

```bash
git clone https://github.com/utilizator/nume-repo.git
cd nume-repo
