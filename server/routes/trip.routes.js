import express from 'express';

import {
  deleteTrip,
  getTrips,
  getTrip,
  postTrip,
  updateTrip,
} from '../controllers/trip.controller.js';

const router = express.Router();

router.get('/trips', getTrips);
router.get('/trips/:tripId', getTrip)
router.post('/trips', postTrip);
router.put('/trips/:tripId', updateTrip);
router.delete('/trip/:tripId', deleteTrip);

export default router;