import express from 'express'
import { _getOnePockemon, _getAllPockemon } from '../controllers/pockemon.controller.js'

const router = express.Router()

router.get('/:id', _getOnePockemon)
router.get('liste', _getAllPockemon)

export default router