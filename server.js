const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});