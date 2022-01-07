/*
 * >>>>>>>>>> SERVICES Layer 
*/

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
   
       const sql= `insert into vooagendados 
       (cidadedepartida, cidadedestino, datahora, companhiaaerea) 
       values ($1,$2,$3,$4)`
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

// atualizar Put
const editarDadosVoos= async (req, res) => {
   
    try {

        const { id }= req.params
        const sql= `update vooagendados 
        set cidadedepartida = '${req.body.cidadedepartida}',
         cidadedestino = '${req.body.cidadedestino}',  
         companhiaaerea = '${req.body.companhiaaerea}'
         where id = ${id}`
    
        const data= await db.query(sql)
        const {...edit}= data.rows
        
        if(edit){
                 res.json({
                 message: 'dados atualizados com sucesso!', 
                 news : edit
          })
        }       
    } catch (error) {
        console.error('Erro na alualização: '+ error)
    }

} 

// Delete
const deletarDadosVoos= async (req, res) => {
   
    try {

        const { id }= req.params
        const sql= `delete from vooagendados where id = '${id}'`
        const data= await db.query(sql)
        res.json({
            status: `voo cancelado`,
            voo: `${id}`
        })     
        
    } catch (error) {
        console.error('Erro na alualização: '+ error)
    }

}

module.exports= {
    voo,
    voosDePartida,
    agendarVoo,
    editarDadosVoos,
    deletarDadosVoos
}