import express from 'express'
import { _getOnePockemon, _getAllPockemon } from '../controllers/pockemon.controller.js'

const router = express.Router()

router.get('/liste', _getAllPockemon)
router.get('/:id', _getOnePockemon)

export default router