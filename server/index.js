const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const path = require('path');

// const employeeRoutes = require('./routes/employee');

// Conexión a la base de datos
// const { mongoose } = require('./controllers/database');

const app = express();

/*                  Opciones                    */
// Usa el puerto por defecto, o usa el puerto 3000
app.set('port', process.env.PORT || 3000);

/*                    Vista                      */
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

/*                 Middleware                   */
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// Convierte los datos que llegan a través de solicitudes HTTP al tipo JSON
app.use(express.json());

/*                   Rutas                      */
// app.use('/api/employees', employeeRoutes);

/*             Archivos estáticos               */
// app.use(express.static(path.join(__dirname, 'public')));

// app escucha en el puerto establecido
app.listen(app.get('port'), () => {
  console.log('Servidor en puerto ', app.get('port'));
});
