import express from 'express'
import { _getOnePockemon } from '../controllers/pockemon.controller.js'

const router = express.Router()

router.get('/:id', _getOnePockemon)
router.get('')

export default router