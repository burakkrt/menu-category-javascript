const filtersButtonsDOM = document.querySelector(".filters-buttons");
const producstListDOM = document.querySelector(".product-list");

const dataProductsCategroy = [
  { id: 0, category: "jeans" },
  { id: 1, category: "shorts - bermuda" },
  { id: 2, category: "festivaller" },
  { id: 3, category: "trousers" },
  { id: 4, category: "ball and corset" },
  { id: 5, category: "dress" },
];
const dataProducts = [
  {
    id: 0,
    categoryId: 5,
    name: "halter neck mini dress",
    sizeNumber: { xs: 12, s: 32, m: 15, l: 12 },
    price: 29.99,
    image: "product-images/00.jpg",
  },
  {
    id: 1,
    categoryId: 5,
    name: "long sleeve stretch dress",
    sizeNumber: { xs: 8, s: 15, m: 4, l: 2 },
    price: 49.99,
    image: "product-images/01.webp",
  },
  {
    id: 2,
    categoryId: 5,
    name: "tiktok's favorite",
    sizeNumber: { xs: 8, s: 25, m: 0, l: 0 },
    price: 49.99,
    image: "product-images/02.webp",
  },
  {
    id: 3,
    categoryId: 1,
    name: "Lace-up cotton cargo bermuda shorts",
    sizeNumber: { xs: 0, s: 25, m: 44, l: 1 },
    price: 55.99,
    image: "product-images/03.webp",
  },
  {
    id: 4,
    categoryId: 1,
    name: "Ruffled rustic shorts skirt",
    sizeNumber: { xs: 11, s: 15, m: 4, l: 6 },
    price: 39.99,
    image: "product-images/04.webp",
  },
  {
    id: 5,
    categoryId: 1,
    name: "Crepe shorts skirt with ruffles",
    sizeNumber: { xs: 11, s: 35, m: 2, l: 7 },
    price: 89.99,
    image: "product-images/05.webp",
  },
  {
    id: 6,
    categoryId: 2,
    name: "Tasseled openwork halter blouse",
    sizeNumber: { xs: 0, s: 0, m: 4, l: 2 },
    price: 155,
    image: "product-images/06.webp",
  },
  {
    id: 7,
    categoryId: 2,
    name: "long mesh strap dress",
    sizeNumber: { xs: 12, s: 22, m: 41, l: 0 },
    price: 99.99,
    image: "product-images/07.webp",
  },
  {
    id: 8,
    categoryId: 2,
    name: "Pleated denim bermuda shorts",
    sizeNumber: { xs: 3, s: 14, m: 21, l: 17 },
    price: 37.99,
    image: "product-images/08.webp",
  },
  {
    id: 9,
    categoryId: 3,
    name: "Wide leg linen-blend fabric trousers with gathered waist",
    sizeNumber: { xs: 13, s: 21, m: 11, l: 36 },
    price: 50,
    image: "product-images/09.webp",
  },
  {
    id: 10,
    categoryId: 3,
    name: "tiktok favorite",
    sizeNumber: { xs: 7, s: 14, m: 2, l: 28 },
    price: 49.99,
    image: "product-images/10.webp",
  },
  {
    id: 11,
    categoryId: 3,
    name: "Adjustable multi-pocket serj cargo pants",
    sizeNumber: { xs: 0, s: 0, m: 0, l: 0 },
    price: 27.99,
    image: "product-images/11.webp",
  },
  {
    id: 12,
    categoryId: 4,
    name: "sleeveless asymmetrical crop top",
    sizeNumber: { xs: 32, s: 11, m: 8, l: 0 },
    price: 62.99,
    image: "product-images/12.webp",
  },
  {
    id: 13,
    categoryId: 4,
    name: "Ribbed halter neck crop top",
    sizeNumber: { xs: 18, s: 24, m: 29, l: 17 },
    price: 55,
    image: "product-images/13.webp",
  },
  {
    id: 14,
    categoryId: 4,
    name: "Satin strap bodice top",
    sizeNumber: { xs: 0, s: 0, m: 12, l: 10 },
    price: 42.99,
    image: "product-images/14.webp",
  },
  {
    id: 15,
    categoryId: 0,
    name: "Elastic denim jumpsuit with window detail on the back",
    sizeNumber: { xs: 41, s: 38, m: 22, l: 19 },
    price: 89.99,
    image: "product-images/15.webp",
  },
  {
    id: 16,
    categoryId: 0,
    name: "long denim strapless dress",
    sizeNumber: { xs: 27, s: 25, m: 12, l: 0 },
    price: 145,
    image: "product-images/16.webp",
  },
  {
    id: 17,
    categoryId: 0,
    name: "Elastic denim jumpsuit with window detail on the back",
    sizeNumber: { xs: 12, s: 20, m: 19, l: 4 },
    price: 99.99,
    image: "product-images/17.webp",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  getFilterButtonElement(dataProductsCategroy);
  getProductElement(dataProducts, "all");
  // add event listener category filter btn
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    filterButtonEvent(btn);
  });
});

// Category buttons create
function getFilterButtonElement(filterButtonCategoryData) {
  let categoryButtons = filterButtonCategoryData.map((categoryObj) => {
    return `<li><button class="filter-btn" data-categoryid="${categoryObj.id}" >${categoryObj.category}</button></li>`;
  });
  categoryButtons = categoryButtons.join("");
  filtersButtonsDOM.innerHTML += categoryButtons;
}

// All products created
function getProductElement(producDatas, categoryId) {
  let productDOMelement = producDatas.map((product) => {
    if (product.categoryId === categoryId || categoryId === "all") {
      return `
    <div class="product">
      <div class="product-image">
      <img src="${product.image}" alt="">
      </div>
      <div class="product-info">
        <div class="info-header">
          <h3 class="product-name">${product.name}</h3>
          <span class="product-price">$${product.price}</span>
        </div>
        <div class="info-body">
          <ul class="size-numbers">
            <li ${
              product.sizeNumber.xs === 0 ? `class="no-stock"` : ""
            }>xs<span class="product-size-count">${
        product.sizeNumber.xs
      }</span></li>
            <li ${
              product.sizeNumber.s === 0 ? `class="no-stock"` : ""
            }>s<span class="product-size-count">${
        product.sizeNumber.s
      }</span></li>
            <li ${
              product.sizeNumber.m === 0 ? `class="no-stock"` : ""
            }>m<span class="product-size-count">${
        product.sizeNumber.m
      }</span></li>
            <li ${
              product.sizeNumber.l === 0 ? `class="no-stock"` : ""
            }>l<span class="product-size-count">${
        product.sizeNumber.l
      }</span></li>
          </ul>
        </div>
      </div>
    </div>
    `;
    }
  });
  producstListDOM.innerHTML = productDOMelement.join("");
}

function filterButtonEvent(buttonElement) {
  buttonElement.addEventListener("click", (e) => {
    let catagoryId = e.currentTarget.dataset.categoryid;
    if (catagoryId !== "all") {
      getProductElement(dataProducts, Number(catagoryId));
    } else getProductElement(dataProducts, "all");
    activeCategory(e.currentTarget);
  });
}

function activeCategory(filterButton) {
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });
  filterButton.classList.add("active");
}