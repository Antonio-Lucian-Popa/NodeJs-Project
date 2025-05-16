// controllers/userController.js
// exports.getAllUsers = (req, res) => {
//     res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
//   };

const userService = require('../services/userService');
  
  exports.getUserById = (req, res) => {
    const id = req.params.id;
    res.json({ id, name: `User ${id}` });
  };
  
  exports.getAllUsers = async (req, res) => {
    const users = await userService.listUsers();
    res.json(users);
  };
  
  exports.createUser = async (req, res) => {
    try {
      const user = await userService.registerUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };