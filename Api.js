import express from "express";
import { rutas } from "./routes/rutas.js";
import { establecerConexion } from "./database/conexion.js";
import cors from "cors";

export class Api {
  constructor() {
    this.app = express();
    this.conectarBD();
    this.procesarPeticiones();
  }
  levantarServidor() {
    //el servidor recibe las perticiones
    this.app.listen(process.env.PORT, function () {
      console.log("Servidor operando con éxito");
    });
  }
  procesarPeticiones() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use("/", rutas);
  }
  conectarBD() {
    establecerConexion();
  }
}
