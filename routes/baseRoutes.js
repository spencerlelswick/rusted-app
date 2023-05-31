import express from 'express'

const router = express.Router()

import {
  createBase,
  deleteBase,
  getBase,
  updateBase,
  showStats,
} from '../controllers/baseController.js'

router.route('/').post(createBase).get(getBase)
router.route('/stats').post(showStats).showStats
router.route('/:id').delete(deleteBase).patch(updateBase)

export default router
