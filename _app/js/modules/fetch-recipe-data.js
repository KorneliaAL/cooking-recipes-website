import { sanity } from '../sanity.js';

/**
 * Fetches recipe data from the server.
 * If an error occurs during the fetch, a custom error message is displayed.
 * @returns {Promise<object>} The recipe data.
 */


export default async function FetchRecipeData() {
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

	async function getDataFromTryCatch(query) {
		const errorMessage = document.querySelectorAll('.error-message');
		try {
			const recipeData = await sanity.fetch(query);
			return recipeData;
		}
		// Display error message from sanity-client.js
		catch (error) {
			errorMessage.forEach(message => {
				message.textContent = error.message;
			})
		}
	}

	const fetchData = getDataFromTryCatch(query);

	return fetchData;
}