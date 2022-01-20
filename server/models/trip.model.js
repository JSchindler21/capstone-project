import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  country: String,
  category: String,
  name: String,
  Info: String,
  tags: Array,
  img: String,
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;