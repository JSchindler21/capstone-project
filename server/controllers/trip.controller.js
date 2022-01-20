import Trip from '../models/trip.model.js';

const getTrips = async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
};

const getTrip = async (req, res) => {
  const tripId = req.params.tripId;
  const foundTrip = await Trip.findById(tripId);
  res.json(foundTrip);
};

const postTrip = async (req, res) => {
  const trip = new Trip({
      country: req.body.country,
      category: req.body.category,
      name: req.body.name,
      tags: req.body.tags,
      info: req.body.info,
      img: req.body.img,

  });

  try {
    const result = await trip.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const updateTrip = async (req, res) => {
  const tripId = req.params.tripId

  const tripData = {
    country: req.body.country,
    category: req.body.category,
    name: req.body.name,
    tags: req.body.tags,
    info: req.body.info,
    img: req.body.img,
  };

  // TODO: add try catch around this operation
  const result = await Trip.findByIdAndUpdate(tripId, tripData, {
    returnDocument: 'after',
  });

  res.json(result);
};

const deleteTrip = async (req, res) => {
  const tripId = req.params.tripId;

  try {
    const result = await Product.findByIdAndDelete(productId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export { deleteTrip, getTrips, getTrip, postTrip, updateTrip};