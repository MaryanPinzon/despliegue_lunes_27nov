import { ServicioHabitacion } from '../services/servicioHabitacion.js'

export class ControladorHabitacion {
  constructor() {}

  async registrarHabitacion(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion()
      //1. Esculcar los datos que quieren usar para el registro
      let datosHabitacionRegistrar = request.body;
      //2. Validar los datos
      //3. Intentar guardar los datos
      await servicioHabitacion.registrarHabitacion(datosHabitacionRegistrar)
      //4. Responder
      response.status(200).json({
        mensaje: "exito en la operación de guardado",
        datos: datosHabitacionRegistrar
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos en la operación de guardado" + error,
      });
    }
  }
  async buscarHabitaciones(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion()
      //1. Intentar buscar los datos en bd
      //2. Responder
      response.status(200).json({
        mensaje: "exito en la operación de busqueda",
        datos: await servicioHabitacion.buscarHabitaciones()
      })
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos en la operación de busqueda" + error,
      });
    }
  }
  async buscarHabitacionPorId(request, response) {
    let servicioHabitacion = new ServicioHabitacion()
    try {
      //1.Esculcar los parametros de la peticion
      let idHabitacionBuscar = request.params.id;
      //2.Validar el dato que llegó
      //3.Intento buscar el dato en bd
      //4.Responder
      response.status(200).json({
        mensaje: "exito en la operación de busqueda",
        datos: await servicioHabitacion.buscarHabitacionPorId(idHabitacionBuscar)
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos en la operación de busqueda" + error,
      });
    }
  }
  async modificarHabitacion(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion()
      //1.Traigo el id a editar de la petición
      let idHabitacionModificar = request.params.id;
      let datosHabitacionModificar = request.body;
      //Validar los datos
      //Intentar buscra y modificar en bd
      await servicioHabitacion.modificarHabitacion(idHabitacionModificar, datosHabitacionModificar)
      //Responder
      response.status(200).json({
        mensaje: "exito en la operación de edición",
        datos: datosHabitacionModificar
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos en la operación de edicion" + error,
      });
    }
  }
  async borrarHabitacion(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      let idHabitacionBorrar = request.params.id;
      //validar
      //Intento borrar la habitacion en bd
      await servicioHabitacion.borrarHabitacion(idHabitacionBorrar);
      //Responder
      response.status(200).json({
        mensaje: "exito en la operación de borrado",
        datos: "acá van os datos que se borraron",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos en la operación de borrado" + error,
      });
    }
  }
}
