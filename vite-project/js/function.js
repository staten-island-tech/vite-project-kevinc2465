import { fruits } from "./list";
import { DOM } from "./DOM";

function makeCards() {
fruits.forEach((fruits) => {
    DOM.cards.insertAdjacentHTML(
      "beforeend",
      `
        <div class="result">
        <h2 class="individual-name">${fruits.name}</h2>
        <img class="image" src= "${fruits.img_url}"/>
        <p class="paragraph"> ${fruits.origin}</p>
        <p class="paragraph"> ${fruits.flavor}</p>
        <p class="paragraph"> $${fruits.price_per_lb} per lb</p>
        </div>
        `
    );
  })};
makeCards();

function filterfruit() {
  const results = fruits.filter((fruit) => fruit.origin === (`Kazakhstan`))
  console.log(results)
  results.forEach((fruit) => {
    DOM.cards.insertAdjacentHTML(
      "beforeend",
      `
        <div class="result">
        <h2 class="individual-name">${fruit.name}</h2>
        <img class="image" src= "${fruit.img_url}"/>
        <p class="paragraph"> ${fruit.origin}</p>
        <p class="paragraph"> ${fruit.flavor}</p>
        <p class="paragraph"> $${fruit.price_per_lb} per lb</p>
        </div>
        `
    );
  })
};

DOM.Kazakhstan.addEventListener("click", function(){
  filterfruit()
});

// function resets() {
//   DOM.cards.reload();
// }
// DOM.reset.addEventListener("click", function(){
//   resets();
// })
