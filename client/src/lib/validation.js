
const hasTripNameMinLength = (name, stringLength) =>
name.length > stringLength;

const isNumberGreaterThanZero = (price) => price > 0;
const hasValidCategory = (category) => category !== '';
const isValidEmail = (email) => email.includes('@') && isValidDomain(email);
const isValidDomain = (email) => email.split('@')[1].includes('.');

const isTripValid = (trip) =>
hasTripNameMinLength(trip.name, 3) &&
isNumberGreaterThanZero(trip.number) &&
hasValidCategory(trip.category) &&
isValidEmail(trip.contactEmail);

export default isTripValid;