import express from 'express'
import { _getOnePockemon, _getAllPockemon, _addOnePokemon } from '../controllers/pockemon.controller.js'

const router = express.Router()

router.get('/liste', _getAllPockemon)
router.get('/:id', _getOnePockemon)
router.post('/', _addOnePokemon )

export default router