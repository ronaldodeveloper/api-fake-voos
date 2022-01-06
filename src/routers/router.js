const router= require('express').Router();
// const router= express;
const { voo, voosDePartida, agendarVoo, editarDadosVoos }= require('../services/consultarVoo')

// GET
router.get('/todos-os-voos', voo)
router.get('/voos-de-partida', voosDePartida)

// POST
router.post('/agendar-voo', agendarVoo)

// PUT
router.put('/atualizar/:id', editarDadosVoos)

module.exports= router;