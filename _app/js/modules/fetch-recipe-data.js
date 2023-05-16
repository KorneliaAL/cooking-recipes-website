import { sanity } from '../sanity.js';

export default async function FetchRecipeData() {
	try {
		const query = `
      *[ _type == 'cookingRecipes' ] {
        'slug': slug.current,
        'id': _id,
        'recipeName': name,
        'ingredients': ingredientList[],
        'instructions': instructions[],
        'category': category-> {
          name,
          'categorySlug': slug.current,
          'id': _id,
          'image': image {
            'imageURL': image.asset->url,
            'altText': altText
          }
        },
        'cookTime': readyInMinutes,
        'cuisines': cuisines[]-> {
          name,
          'id': _id,
          'slug': slug.current
        },
        servings,
        'image': image{
          'altText': altText,
          'imageURL': image.asset->url
        },
        calories
      }
    `;

		const params = {};

		const recipeData = await sanity.fetch(query, params);

		return recipeData;
	} catch (error) {
		console.error('An error occurred while fetching recipe data:', error);
		// Handle the error or throw it to be handled in the calling code
		throw error;
	}
}