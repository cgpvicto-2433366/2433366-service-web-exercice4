import dotenv from 'dotenv';
import express from 'express';
import router from './src/routes/pockemon.route.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const swaggerDocument = JSON.parse(
    fs.readFileSync('./src/config/documentation.json', 'utf8')
);

const swaggerOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Demo API"
};

dotenv.config();

const app = express()
const PORT = process.env.PORT;  
const HOST = process.env.HOST;

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())
app.use('/api/pokemons',router)


app.listen(PORT, HOST, () => {
    console.log(`Serveur démarré sur http://${HOST}:${PORT}`);
});