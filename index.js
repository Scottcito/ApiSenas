
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './config/routes.js';

const app = express();
const corsOption = {
  origin: '*' // Ajusta el origen según tus necesidades ('localhost:3000', etc.)
};

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas API
app.use('/api',cors(corsOption),router)
// Ruta de bienvenida
app.get('/', (req, res) => res.send('¡Bienvenidos a mis APIs!'));

// Iniciar el servidor
const server=app.listen(process.env.PORT || 8000,()=>{
  console.log(`Hola putes, servidor al pelo ¿Half o mareos? PD: estoy en el puerto: ${server.address().port}`)
});

export default app;
