import sqlite3 from 'sqlite3';
const base="../config/bbdd.db"



export default class infoController{
  static async index(){
    try{
        const bbdd = new sqlite3.Database(base);

        const users =await bbdd.all("SELECT * FROM Palabras");
        console.log('Todos los usuarios:', users);
      } 
      catch (error) {
        console.error('Error al obtener datos:', error);
      }
    
      
    }
};

