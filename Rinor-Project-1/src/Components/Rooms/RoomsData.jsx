import { faker } from "@faker-js/faker";

// const roomImage = () => {
//   const imageServices = ["unsplash.com", "pexels.com", "loremflickr.com"];
//   const service =
//     imageServices[Math.floor(Math.random() * imageServices.length)];
//   const keywords = ["hotel room", "bedroom", "living space"];
//   const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
//   return `https://${service}/search?q=${randomKeyword}`;
// };

export const data = [...Array(30)].map((_, index) => ({
  id: index + 1,
  avatar: faker.image.urlLoremFlickr({ category: 'food' }),
//   roomImage(),
  roomType: faker.helpers.arrayElements([
    "Single",
    "Double",
    "Suite",
    "Standard",
    "Family",
    "Villa",
  ])[0],
  bedType: faker.helpers.arrayElements(["Single Bed", "Double Bed"])[0],
  nightlyRate: faker.commerce.price({ min: 50, max: 300, dec: 0, symbol: "$" }),
  isBooked: faker.datatype.boolean(),
}));
