
const db= require('../model/database/dbConnection')


const voo= async (req, res, next) => {
     try {

        const sql= 'select * from vooagendados;'
        const data= await db.query(sql)
        const vooagendados= data.rows

        res.json(vooagendados)

     } catch (error) {
         console.log(`connection fail: ${error.message}`) 
     }
   
} 

module.exports= {
    voo
}