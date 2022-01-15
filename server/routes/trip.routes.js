import express from 'express';

import {
  deleteTrip,
  getTrip,
  postTrip,
  updateTrip,
} from '../controllers/trip.controller.js';

const router = express.Router();

router.get('/trips', getTrip);
router.post('/trips', postTrip);
router.put('/trips/:tripId', updateTrip);
router.delete('/trip/:tripId', deleteTrip);

export default router;