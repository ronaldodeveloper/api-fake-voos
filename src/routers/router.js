const router= require('express').Router();
// const router= express;
const { voo, voosDePartida, agendarVoo }= require('../services/consultarVoo')

// GET
router.get('/todos-os-voos', voo)
router.get('/voos-de-partida', voosDePartida)

// POST
router.post('/agendar-voo', agendarVoo)

module.exports= router;