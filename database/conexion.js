import mongoose from "mongoose";
export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("exito en la conexión");
    }catch(e){
        console.log("Fallamos conectandonos "+error);
    }
}