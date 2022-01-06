
const db= require('../model/database/dbConnection')

// Todos os voos
const voo= async (req, res) => {
     try {

        const sql= 'select * from vooagendados;'
        const data= await db.query(sql)
        const vooagendados= data.rows

        res.json(vooagendados)

     } catch (error) {
         console(`connection fail: ${error.message}`) 
     }
   
} 

// voos de partida 
const voosDePartida= async (req, res) => {
    try {

       const sql= 'select cidadedepartida from vooagendados;'
       const data= await db.query(sql)
       const vooagendados= data.rows

       res.json(vooagendados)

    } catch (error) {
        console(`connection fail: ${error.message}`) 
    }
  
} 

// agendar voos
const agendarVoo= async (req, res) => {
   
       const sql= 'insert into vooagendados (cidadedepartida, cidadedestino, datahora, companhiaaerea) values ($1,$2,$3,$4)'
       const insert= [
             `${req.body.cidadedepartida}`,
             `${req.body.cidadedestino}`,
             `${req.body.datahora}`, 
             `${req.body.companhiaaerea}`
       ]

       const data= await db.query(sql, insert)
       
       if(data.rows){
         res.json({
            message: 'voo agendado com sucesso!', 
         })
       }
} 


module.exports= {
    voo,
    voosDePartida,
    agendarVoo
}