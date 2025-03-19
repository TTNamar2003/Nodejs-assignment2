const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/students', studentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));