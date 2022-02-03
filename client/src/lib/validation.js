
const hasTripNameMinLength = (name, stringLength) =>
name.length > stringLength;

const hasValidCategory = (category) => category !== '';
const hasValidurlImg = (urlImg) => urlImg !== '';


const isTripValid = (trip) =>
hasTripNameMinLength(trip.name, 3) &&
hasTripNameMinLength(trip.country, 3) &&
hasTripNameMinLength(trip.info, 3) &&
hasValidCategory(trip.category) &&
hasValidurlImg(trip.urlImg) &&
hasValidurlImg(trip.imgUrl)


export default isTripValid;