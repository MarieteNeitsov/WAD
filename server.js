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


const generateJWT = (id) => {
    return jwt.sign({ id }, "jbe7346dn8am98fnfr6gsloa4", { expiresIn: 60 * 60})
}


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});



app.post('/auth/signup', async(req, res) => {
    try {
        const { email, password } = req.body;
        
        const existingUser = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        
        if (existingUser.rows.length > 0) {
            
            res.status(400).json({ error: "Email already in use" });
            return;
        }
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