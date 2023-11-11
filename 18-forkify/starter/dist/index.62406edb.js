// *importing icons
const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
let showRecipe = async function() {
    try {
        let res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        let data = await res.json();
        if (!res.ok) throw new Error(`${data.message} and ${res.status}`);
        let { recipe } = data.data;
        let recipeobj = {
            recipeId: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            source_url: recipe.source_url,
            image_url: recipe.image_url,
            ingredients: recipe.ingredients,
            servings: recipe.servings,
            cooking_time: recipe.cooking_time
        };
        let html = `<figure class="recipe__fig">
    <img src="${recipeobj.image_url}" alt="${recipeobj.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipeobj.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="icons.21bad73c#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${recipeobj.cooking_time}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="icons.21bad73c#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">4</span>
      <span class="recipe__info-text">${recipeobj.servings}</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="icons.21bad73c#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="icons.21bad73c#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="icons.21bad73c#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="icons.21bad73c#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
     ${recipeobj.ingredients.map(function(ing) {
            let html = `<li class="recipe__ingredient">
      <svg class="recipe__icon">
      <use href="icons.21bad73c#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity}</div>
      <div class="recipe__description">
       <span class="recipe__unit">${ing.unit}</span>
       ${ing.description}
     </div>
    </li>`;
            return html;
        }).join(" ")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${recipeobj.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${recipeobj.source_url}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="icons.21bad73c#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`;
        // * visible the html
        recipeContainer.innerHTML = "";
        recipeContainer.insertAdjacentHTML("afterbegin", html);
    } catch (error) {
        alert(error);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
