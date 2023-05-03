export default function RenderRecipes(recipes) {
	const recipesContainer = document.querySelector('.recipes__list');

	console.log(recipes[0].id)
	if (recipesContainer) {
		renderHTML();
	}

	function returnRecipeDOMElement(recipe) {
		const recipeSlug = recipe.slug;
		const recipeID = recipe.id;
		const recipeURL = `/_app/recipe-description/inedx.html?recipe=${recipeSlug}`;

		const recipeCardElement = document.createElement('a');

		recipeCardElement.setAttribute('href', recipeURL);

		recipeCardElement.classList.add('recipes__list-element', 'grid__column-mobile--12', 'grid__column--3');
		
		recipeCardElement.dataset.id = recipeID;

		return recipeCardElement;		
	}

	function renderHTML() {
		recipes.forEach(recipe => {
			const recipeElement = returnRecipeDOMElement(recipe);

			recipesContainer.appendChild(recipeElement)
		})
	}
}