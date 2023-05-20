import FetchRecipeData from "./modules/fetch-recipe-data.js";
import RenderRecipes from "./modules/recipes-list.js";
import RenderRecipeDescription from "./modules/recipe-description.js";
import Categories from "./modules/categories.js";
import RecipeSearch from "./modules/recipe-search.js";
import Header from "./modules/main-header.js";

const recipeData = await FetchRecipeData();

RenderRecipes(recipeData);
RenderRecipeDescription(recipeData);
Categories(recipeData);
RecipeSearch(recipeData);
Header();


