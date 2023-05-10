export default function Categories(recipes) {
	const categoryContainer = document.querySelector('.category');

	
/**
 * @Todo - fetch category image in fetch recipe
 */
	if (categoryContainer) {
		createCategoryButtons();
	}


	function createCategoryButtons() {
		const categories = [];

		recipes.forEach(recipe => {
			const category = recipe.category;

			// Check if the category button is already created
			if (!categories.some(existingCategory => existingCategory.id === category.id)) {
				categories.push(category);
			}
		});
		console.log(categories)
		renderHTML(categories);
	}

	function renderHTML(categories) {
		categories.forEach(category => {
			const buttonElement = document.createElement('button');
			buttonElement.innerText = category.name;
			categoryContainer.appendChild(buttonElement);
		});
	}
}






