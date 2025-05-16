const jwt = require('jsonwebtoken');
const jwksRsa = require('jwks-rsa');

const issuer = 'http://localhost:8080/realms/myrealm'; // URL-ul realmului tău
const clientId = 'my-client-id'; // clientul din Keycloak

const checkJwt = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token lipsă' });

  const client = jwksRsa({
    jwksUri: `${issuer}/protocol/openid-connect/certs`,
  });

  function getKey(header, callback) {
    client.getSigningKey(header.kid, (err, key) => {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    });
  }

  jwt.verify(
    token,
    getKey,
    {
      audience: clientId,
      issuer: issuer,
      algorithms: ['RS256'],
    },
    (err, decoded) => {
      if (err) return res.status(403).json({ error: 'Token invalid' });
      req.user = decoded;
      next();
    }
  );
};

module.exports = checkJwt;
