const express = require('express')
const router = express.Router()
const { getAllAnimes, postAnime, getAnimeById, editAnime, deleteanimeById, deleteAll } = require("../controllers/animes.controller")

router.get('/', getAllAnimes)
router.post('/', postAnime)
router.get('/:id', getAnimeById)
router.put('/:id', editAnime)
router.delete('/:id', deleteanimeById)
router.delete('/', deleteAll)

module.exports = router