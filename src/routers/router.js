const express = require('express');
const router= express.Router();
const { voo }= require('../services/consultarVoo')

router.get('/', voo)


module.exports= router;