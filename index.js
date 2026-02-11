import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express()
const PORT = process.env.PORT;  
const HOST = process.env.HOST;

app.use(express.json())

app.listen(PORT, HOST, () => {
    console.log(`Serveur démarré sur http://${HOST}:${PORT}`);
});