import { sanity } from '../sanity.js';

export default async function FetchRecipeData() {
	const query = `* [_type == 'cookingRecipes'] {
  'slug': slug.current,
  'id': _id,
  'recipeName': name,
  'ingredients': ingredientList[],
  'instructions': instructions[],
   'category': category-> {
        name,
        'categorySlug': slug.current,
        'id': _id
	},
    'cookTime': readyInMinutes,
    'cuisines': cuisines[] -> {
        name,
        'id': _id,
        'slug': slug.current
    },
    servings,
    'image': image{
    'altText': altText,
    'imageURL': image.asset -> .url
  },
  calories
  }`;

  const params = {};

  const recipeData = await sanity.fetch(query, params);

  return recipeData;
}