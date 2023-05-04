export default function RenderRecipeDescription(recipes) {

	const recipeDescription = document.querySelector('.description');
	if (recipeDescription) {
		const urlParams = new URLSearchParams(window.location.search);
		const slug = urlParams.get('recipe');
		
		renderHTML(slug);
	}

	function returnRecipeInfoToDOMElement(recipe) {
		
	}

	function renderHTML(slug) {
		const currentRecipeDescription = recipes.find(recipe => recipe.slug === slug);

		const recipeDescriptonInformation = returnRecipeInfoToDOMElement(currentRecipeDescription);

		recipeDescription.append(recipeDescriptonInformation);
	}
}


