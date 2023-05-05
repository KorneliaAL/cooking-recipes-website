import FetchRecipeData from "./modules/fetch-recipe-data.js";
import RenderRecipes from "./modules/recipes-list.js";
import RenderRecipeDescription from "./modules/recipe-description.js";

const recipeData = await FetchRecipeData();

RenderRecipes(recipeData);
RenderRecipeDescription(recipeData);

// console.log(recipeData);

