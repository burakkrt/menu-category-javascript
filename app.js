const filtersButtons = document.querySelector(".filters-buttons");
const dataProductsCategroy = [
  { id: 0, category: "dress" },
  { id: 1, category: "shorts - bermuda" },
  { id: 2, category: "festivaller" },
  { id: 3, category: "trousers" },
  { id: 4, category: "ball and corset" },
  { id: 5, category: "jeans" },
];
const dataProducts = [
  {
    id: 0,
    categoryId: 0,
    name: "halter neck mini dress",
    sizeNumber: { xs: 12, s: 32, m: 15, l: 12 },
    price: 98,
    image: "url(products-images/00.jpg)",
  },
  {
    id: 1,
    categoryId: 0,
    name: "long sleeve stretch dress",
    sizeNumber: { xs: 8, s: 15, m: 4, l: 2 },
    price: 110,
    image: "url(products-images/01.webp",
  },
  {
    id: 2,
    categoryId: 0,
    name: "tiktok's favorite",
    sizeNumber: { xs: 8, s: 25, m: 0, l: 0 },
    price: 89,
    image: "url(products-images/02.webp)",
  },
  {
    id: 3,
    categoryId: 1,
    name: "Lace-up cotton cargo bermuda shorts",
    sizeNumber: { xs: 0, s: 25, m: 44, l: 1 },
    price: 89,
    image: "url(products-images/03.webp)",
  },
  {
    id: 4,
    categoryId: 1,
    name: "Ruffled rustic shorts skirt",
    sizeNumber: { xs: 11, s: 15, m: 4, l: 6 },
    price: 89,
    image: "url(products-images/04.webp)",
  },
  {
    id: 5,
    categoryId: 1,
    name: "Crepe shorts skirt with ruffles",
    sizeNumber: { xs: 11, s: 35, m: 2, l: 7 },
    price: 89,
    image: "url(products-images/05.webp)",
  },
  {
    id: 6,
    categoryId: 2,
    name: "Tasseled openwork halter blouse",
    sizeNumber: { xs: 0, s: 0, m: 4, l: 2 },
    price: 89,
    image: "url(products-images/06.webp)",
  },
  {
    id: 7,
    categoryId: 2,
    name: "long mesh strap dress",
    sizeNumber: { xs: 12, s: 22, m: 41, l: 0 },
    price: 89,
    image: "url(products-images/07.webp)",
  },
  {
    id: 8,
    categoryId: 2,
    name: "Pleated denim bermuda shorts",
    sizeNumber: { xs: 3, s: 14, m: 21, l: 17 },
    price: 89,
    image: "url(products-images/08.webp)",
  },
  {
    id: 9,
    categoryId: 3,
    name: "Wide leg linen-blend fabric trousers with gathered waist",
    sizeNumber: { xs: 13, s: 21, m: 11, l: 36 },
    price: 89,
    image: "url(products-images/09.webp)",
  },
  {
    id: 10,
    categoryId: 3,
    name: "tiktok favorite",
    sizeNumber: { xs: 7, s: 14, m: 2, l: 28 },
    price: 89,
    image: "url(products-images/10.webp)",
  },
  {
    id: 11,
    categoryId: 3,
    name: "Adjustable multi-pocket serj cargo pants",
    sizeNumber: { xs: 0, s: 0, m: 0, l: 0 },
    price: 89,
    image: "url(products-images/11.webp)",
  },
  {
    id: 12,
    categoryId: 4,
    name: "sleeveless asymmetrical crop top",
    sizeNumber: { xs: 32, s: 11, m: 8, l: 0 },
    price: 89,
    image: "url(products-images/12.webp)",
  },
  {
    id: 13,
    categoryId: 4,
    name: "Ribbed halter neck crop top",
    sizeNumber: { xs: 18, s: 24, m: 29, l: 17 },
    price: 89,
    image: "url(products-images/13.webp)",
  },
  {
    id: 14,
    categoryId: 4,
    name: "Satin strap bodice top",
    sizeNumber: { xs: 0, s: 0, m: 12, l: 10 },
    price: 89,
    image: "url(products-images/14.webp)",
  },
  {
    id: 15,
    categoryId: 5,
    name: "Elastic denim jumpsuit with window detail on the back",
    sizeNumber: { xs: 41, s: 38, m: 22, l: 19 },
    price: 89,
    image: "url(products-images/15.webp)",
  },
  {
    id: 16,
    categoryId: 5,
    name: "long denim strapless dress",
    sizeNumber: { xs: 27, s: 25, m: 12, l: 0 },
    price: 89,
    image: "url(products-images/16.webp)",
  },
  {
    id: 17,
    categoryId: 5,
    name: "Elastic denim jumpsuit with window detail on the back",
    sizeNumber: { xs: 12, s: 20, m: 19, l: 4 },
    price: 89,
    image: "url(products-images/17.webp)",
  },
];

console.log(dataProducts[0]);

// Category buttons create
let categoryButtons = "";
dataProductsCategroy.map((categoryObj) => {
  categoryButtons += `<li><button class="filter-btn" data-categoryid="${categoryObj.id}" >${categoryObj.category}</button></li>`;
});
filtersButtons.innerHTML = categoryButtons;