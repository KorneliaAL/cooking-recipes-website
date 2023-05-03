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
		const recipeImageURL = recipe.image.imageURL;

		const recipeCardElement = document.createElement('a');
		const recipeImageElement = document.createElement('div');
		const recipeFavoriteButtonElement = document.createElement('button');

		recipeCardElement.setAttribute('href', recipeURL);
		recipeImageElement.style.backgroundImage = `url('${recipeImageURL}')`;

		recipeCardElement.classList.add('recipes__list-element', 'grid__column-mobile--12', 'grid__column--3');
		recipeImageElement.classList.add('recipes__list-element-image');
		recipeFavoriteButtonElement.classList.add('recipes__list-element-favorite-button');
		
		recipeCardElement.dataset.id = recipeID;
		recipeFavoriteButtonElement.dataset.id = recipeID;

		recipeImageElement.appendChild(recipeFavoriteButtonElement);
		recipeCardElement.append(recipeImageElement);
		return recipeCardElement;		
	}

	function renderHTML() {
		recipes.forEach(recipe => {
			const recipeElement = returnRecipeDOMElement(recipe);

			recipesContainer.appendChild(recipeElement)
		})
	}
}