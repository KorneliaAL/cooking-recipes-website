import FetchRecipeData from "./modules/fetch-recipe-data.js";
import RenderRecipes from "./modules/recipes-list.js";
import RenderRecipeDescription from "./modules/recipe-description.js";
import InstructionButton from "./modules/instruction-button.js";
import Categories from "./modules/categories.js";

const recipeData = await FetchRecipeData();

RenderRecipes(recipeData);
RenderRecipeDescription(recipeData);
Categories(recipeData);
InstructionButton();

// console.log(recipeData);

