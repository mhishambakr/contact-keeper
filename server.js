const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}));

app.get('/', (req, res) =>{
    res.json({
        msg: 'welcome to contacts keeper'
    })
})

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));