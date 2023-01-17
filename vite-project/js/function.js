import { fruits } from "./list";
import { DOM } from "./DOM";

function makeCard() {
  fruits.forEach((fruit) => {
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
  });
}
makeCard();

function clearField() {
  document.querySelectorAll(".result").forEach((result) => {
    result.remove();
  });
}

function filterKazakhstan() {
  const results = fruits.filter((fruit) => fruit.origin === `Kazakhstan`);
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
  });
}

DOM.Kazakhstan.addEventListener("click", function () {
  clearField();
  filterKazakhstan();
});

function filterChina() {
  const results = fruits.filter((fruit) => fruit.origin === `China`);
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
  });
}

DOM.China.addEventListener("click", function () {
  clearField();
  filterChina();
});

function filterIndoneisa() {
  const results = fruits.filter((fruit) => fruit.origin === `Indoneisa`);
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
  });
}

DOM.Indoneisa.addEventListener("click", function () {
  clearField();
  filterIndoneisa();
});

function filterNorthAmerica() {
  const results = fruits.filter((fruit) => fruit.origin === `NorthAmerica`);
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
  });
}

DOM.NorthAmerica.addEventListener("click", function () {
  clearField();
  filterNorthAmerica();
});

function filterBrazil() {
  const results = fruits.filter((fruit) => fruit.origin === `Brazil`);
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
  });
}

DOM.Brazil.addEventListener("click", function () {
  clearField();
  filterBrazil();
});

DOM.reset.addEventListener("click", function () {
  clearField();
  makeCard();
});

DOM.theme.addEventListener("click", function () {
  if (document.body.classList.contains("first")) {
    document.body.classList.add("second");
    document.body.classList.remove("first");
  } else {
    document.body.classList.add("first");
    document.body.classList.remove("second");
  }
});
