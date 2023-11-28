import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Reserva = new Schema({
  fechaEntrada: {
    type: Date,
    required: true,
  },
  fechasalida: {
    type: Date,
    required: true,
  },
  nombreQuienReserva: {
    type: String,
    required: true,
  },
  capacidad: {
    type: Number,
    required: true,
  },
  costo: {
    type: Number,
    required: false,
  },
});

export const modeloReserva = mongoose.model("reservas", Reserva);
