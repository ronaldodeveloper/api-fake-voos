/*
 * >>>>>>>>  ROUTER Layer
*/

const router= require('express').Router();
const { 
    voo, 
    voosDePartida, 
    agendarVoo, 
    editarDadosVoos, 
    deletarDadosVoos }
    = require('../services/consultarVoo')

// ----GET
router.get('/todos-os-voos', voo)
router.get('/voos-de-partida', voosDePartida)

// ----POST
router.post('/agendar-voo', agendarVoo)

// ----PUT
router.put('/atualizar/:id', editarDadosVoos)

// ----DELETE
router.delete('/delete/:id', deletarDadosVoos)


module.exports= router;