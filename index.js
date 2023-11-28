import {Api} from './Api.js';
import 'dotenv/config'

//require('dotenv').config()
//console.log(process.env)

//Para usar una clase debo crear un objeto
//Para usar una clase se debe crear una instancia
//Todo objeto es una variable
let servidor = new Api();

//Levantar o desppertar el servidor
servidor.levantarServidor();