const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));


app.use(express.json());  
app.use(cookieParser());  


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});



app.post('/auth/signup', async(req, res) => {
    try {
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(); 
        const bcryptPassword = await bcrypt.hash(password, salt) 
        const authUser = await pool.query( 
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id); 

        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
            .send;
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});