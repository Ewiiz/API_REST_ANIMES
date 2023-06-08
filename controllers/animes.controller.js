const express = require('express')

const Animes = require('../models/animes.models')

exports.getAllAnimes = async (req, res) => {
    const allAnimes = await Animes.find()
    if (!allAnimes) {
        res.status(404).json({ message: 'Il n\'y a pas d\'animés pour le moment.' })
    } else {
        res.status(200).json({ message: `Voici la liste des animés, il y'a ${allAnimes.length}`, allAnimes })
    }
}

exports.getAnimeById = async (req, res) => {
    const idAnime = req.params.id
    const animeFind = await Animes.findById(idAnime)

    if (!animeFind) {
        res.status(404).json({ message: `L'animé avec l'id: ${idAnime} n'a pas été trouvé.` })
    } else {
        res.status(200).json({ message: `L'animé ${animeFind.titre} à bien été trouvé.`, animeFind })
    }
}

exports.postAnime = async (req, res) => {
    try {
        const newAnime = await Animes.create({
            titre: req.body.titre,
            saisons: req.body.saisons,
            episodes: req.body.episodes,
            description: req.body.description,
            manga: req.body.manga,
        })

        if (!newAnime) {
            res.status(400).json({ message: `Il manque une information` })
        } else {
            res.status(201).json({ message: `Nouvelle animé ajouté: ${newAnime}` })
        }
    }
    catch (err) {
        res.status(500).json({ message: `Erreur inatendu: ${err.message}` })
    }
}

exports.editAnime = async (req, res) => {
    try {
        const animeChange = req.body
        const animeEdit = await Animes.findByIdAndUpdate(req.params.id, animeChange, { new: true })

        if (animeEdit.isModified()) {
            res.status(200).json({ message: `Information enregistré avec succès.`, animeEdit })
        } else {
            res.stauts(204).json({ message: `Aucune information n'a été changé.` })
        }
    }
    catch (err) {
        res.status(500).json({ message: `Une Erreur s'est produite: ${err.message}` })
    }
}

exports.deleteanimeById = async (req, res) => {
    const animeDeleted = await Animes.findByIdAndDelete(req.params.id)

    if (!animeDeleted) {
        res.stauts(404).json(`Animé non trouvé.`)
    } else {
        res.status(204).json(`L'animé ${animeDeleted.titre} à bien été supprimé.`)
    }
}

exports.deleteAll = async (req, res) => {
    await Animes.deleteMany({})
    res.sendStatus(204)
}
