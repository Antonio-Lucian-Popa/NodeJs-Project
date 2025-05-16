const keycloakService = require('../services/keycloakService');

exports.register = async (req, res) => {
  try {
    const keycloakId = await keycloakService.createKeycloakUser(req.body);
    
    // Salvează și în DB local (opțional)
    // await prisma.user.create(...)

    res.status(201).json({ message: 'Utilizator creat', keycloakId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const tokenData = await keycloakService.loginUser(req.body);
    res.json(tokenData);
  } catch (err) {
    res.status(401).json({ error: 'Login eșuat' });
  }
};
