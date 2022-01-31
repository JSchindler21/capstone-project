
const hasTripNameMinLength = (name, stringLength) =>
name.length > stringLength;

const hasValidCategory = (category) => category !== '';


const isTripValid = (trip) =>
hasTripNameMinLength(trip.name, 3) &&
hasValidCategory(trip.category) 


export default isTripValid;