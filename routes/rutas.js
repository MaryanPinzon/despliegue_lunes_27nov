import express from "express";
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReserva } from "../controllers/ControladorReserva.js";

//Para poder llamar al controlador debo crearun objeto de la clase controladorHabitacion
//Objeto es una avriable para nombrwr las porpiedades del controlador
//La clase va en mayuscula, el objeto en minuscula

let controladorHabitacion = new ControladorHabitacion();
let controladorReserva = new ControladorReserva();

export let rutas = express.Router();

rutas.post("/api/habitaciones", controladorHabitacion.registrarHabitacion);
rutas.get("/api/habitacion/:id", controladorHabitacion.buscarHabitacionPorId);
rutas.get("/api/habitaciones", controladorHabitacion.buscarHabitaciones);
rutas.put("/api/habitaciones/:id", controladorHabitacion.modificarHabitacion);
rutas.delete("/api/habitaciones/:id", controladorHabitacion.borrarHabitacion);

rutas.post("/api/reservas", controladorReserva.registrarReserva);
rutas.get("/api/reserva/:id", controladorReserva.buscarReservaId);
rutas.get("/api/reservas", controladorReserva.buscarReservas);
rutas.put("/api/reservas/:id", controladorReserva.modificarReserva);
rutas.delete("/api/reservas/:id", controladorReserva.borrarReserva);
