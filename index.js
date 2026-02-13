import dotenv from 'dotenv';
import express from 'express';
import router from './src/routes/pockemon.route.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT;  
const HOST = process.env.HOST;

app.use(express.json())
app.use('/pockemon',router)

app.listen(PORT, HOST, () => {
    console.log(`Serveur démarré sur http://${HOST}:${PORT}`);
});