import express from 'express';

import {
  deleteTrip,
  getTrips,
  postTrip,
  updateTrip,
} from '../controllers/trip.controller.js';

const router = express.Router();

router.get('/trips', getTrips);
router.post('/trips', postTrip);
router.put('/trips/:tripId', updateTrip);
router.delete('/trip/:tripId', deleteTrip);

export default router;