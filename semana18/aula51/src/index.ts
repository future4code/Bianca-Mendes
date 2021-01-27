import express from "express";
const cors = require('cors');
import { AddressInfo } from "net";

import routes from './routes/router';

//Configurações express
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

//Configurações servidor rodando
const server = app.listen(process.env.PORT || 5000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
}); 