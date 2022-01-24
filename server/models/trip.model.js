import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  country: String,
  category: String,
  name: String,
  info: String,
  tags: Array,
  imgUrl: String,
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;