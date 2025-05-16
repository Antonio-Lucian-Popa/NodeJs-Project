// src/services/keycloakService.js
const axios = require('axios');

const KEYCLOAK_BASE_URL = process.env.KEYCLOAK_BASE_URL; // ex: http://localhost:8080
const REALM = process.env.KEYCLOAK_REALM; // ex: myrealm
const CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID;
const CLIENT_SECRET = process.env.KEYCLOAK_CLIENT_SECRET;
const ADMIN_USERNAME = process.env.KEYCLOAK_ADMIN_USER;
const ADMIN_PASSWORD = process.env.KEYCLOAK_ADMIN_PASS;

/**
 * Returnează un token de admin pentru a putea crea/șterge useri
 */
async function getAdminToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('client_id', 'admin-cli');
  params.append('username', ADMIN_USERNAME);
  params.append('password', ADMIN_PASSWORD);

  const response = await axios.post(
    `${KEYCLOAK_BASE_URL}/realms/master/protocol/openid-connect/token`,
    params
  );

  return response.data.access_token;
}

/**
 * Creează un utilizator nou în Keycloak
 */
async function createKeycloakUser({ email, firstName, lastName, password, role }) {
  const token = await getAdminToken();

  const response = await axios.post(
    `${KEYCLOAK_BASE_URL}/admin/realms/${REALM}/users`,
    {
      username: email,
      email,
      firstName,
      lastName,
      enabled: true,
      emailVerified: true,
      credentials: [
        {
          type: 'password',
          value: password,
          temporary: false,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const location = response.headers.location;
  return location.split('/').pop(); // returnează keycloakId
}

/**
 * Autentifică un utilizator prin Keycloak (obține token JWT)
 */
async function loginUser({ email, password }) {
  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);
  params.append('username', email);
  params.append('password', password);

  const response = await axios.post(
    `${KEYCLOAK_BASE_URL}/realms/${REALM}/protocol/openid-connect/token`,
    params
  );

  return response.data; // include access_token, refresh_token etc.
}

module.exports = {
  createKeycloakUser,
  loginUser,
};
