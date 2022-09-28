// const items = [
//   // {
//   //   id: 1,
//   //   title: "buttermilk pancakes",
//   //   category: "breakfast",
//   //   price: 15.99,
//   //   img: "./images/item-1.jpeg",
//   //   desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//   // },
//   // {
//   //   id: 2,
//   //   title: "diner double",
//   //   category: "lunch",
//   //   price: 13.99,
//   //   img: "./images/item-2.jpeg",
//   //   desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//   // },
//   // {
//   //   id: 3,
//   //   title: "godzilla milkshake",
//   //   category: "shakes",
//   //   price: 6.99,
//   //   img: "./images/item-3.jpeg",
//   //   desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//   // },
//   // {
//   //   id: 4,
//   //   title: "country delight",
//   //   category: "breakfast",
//   //   price: 20.99,
//   //   img: "./images/item-4.jpeg",
//   //   desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//   // },
//   // {
//   //   id: 5,
//   //   title: "egg attack",
//   //   category: "lunch",
//   //   price: 22.99,
//   //   img: "./images/item-5.jpeg",
//   //   desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//   // },
//   // {
//   //   id: 6,
//   //   title: "oreo dream",
//   //   category: "shakes",
//   //   price: 18.99,
//   //   img: "./images/item-6.jpeg",
//   //   desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//   // },
//   // {
//   //   id: 7,
//   //   title: "bacon overflow",
//   //   category: "breakfast",
//   //   price: 8.99,
//   //   img: "./images/item-7.jpeg",
//   //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//   // },
//   // {
//   //   id: 8,
//   //   title: "american classic",
//   //   category: "lunch",
//   //   price: 12.99,
//   //   img: "./images/item-8.jpeg",
//   //   desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//   // },
//   // {
//   //   id: 9,
//   //   title: "quarantine buddy",
//   //   category: "shakes",
//   //   price: 16.99,
//   //   img: "./images/item-9.jpeg",
//   //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//   // },
//   {
//     role: "Avocat",
//     _id: "622a0458dd4ab67932bf8a26",
//     name: "avocat abdelghxni",
//     email: "avocat.abdelghxni@gmail.com",
//     phoneNumber: "0771717171772",
//     city: "rabat",
//     price: 16,
//     __v: 0,
//     speciality: "speciality1",
//   },
//   {
//     role: "Avocat",
//     _id: "623a83215d59c7bb3ebe3dbe",
//     name: "avocat txhiri",
//     email: "avocat.txhiri@gmail.com",
//     phoneNumber: "0771717171772",
//     city: "meknes",
//     price: 9,
//     __v: 0,
//     speciality: "speciality2",
//   },
//   {
//     role: "Avocat",
//     _id: "623a83925d59c7bb3ebe3dbf",
//     name: "avocat hichxm",
//     email: "avocat.hichxm@gmail.com",
//     phoneNumber: "0771717171772",
//     city: "rabat",
//     __v: 0,
//     price: 9,
//     speciality: "speciality3",
//   },
//   {
//     role: "Avocat",
//     _id: "623a83d05d59c7bb3ebe3dc0",
//     name: "avocat zxidi",
//     email: "avocat.zxidi@gmail.com",
//     phoneNumber: "0771717171772",
//     city: "meknes",
//     __v: 0,
//     price: 6,
//     speciality: "speciality4",
//   },
// ];
import axios from "axios";
const items = axios
  .get(`/api/avocats`)
  .then((response) => {
    const items = response.data;
    // this.setState({ posts: data });
    return items;
  })
  .catch(() => {
    alert("Error retrieving data!!!");
  });

export default items;
