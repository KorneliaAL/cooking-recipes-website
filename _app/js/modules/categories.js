import RenderRecipes from "./recipes-list.js";

export default function Categories(recipes) {
	const categoryContainer = document.querySelector('.category__navigation-list');
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
		renderHTML(categories);
		// console.log(categories)
	}

	function returnCategoryDOMElement(category) {
		const categoryName = category.name;
		const imageURL = category.image.imageURL;
		const altText = category.image.altText;
		const id = category.id;

		const listItemElement = document.createElement('li');
		const buttonElement = document.createElement('button');
		const imageElement = document.createElement('img');
		const buttonTextElement = document.createElement('div');

		imageElement.setAttribute('src', imageURL);
		imageElement.setAttribute('alt', altText);

		buttonElement.dataset.id = id;
		buttonTextElement.textContent = categoryName;

		listItemElement.classList.add('category__navigation-element');
		buttonElement.classList.add('category__navigation-category-button')
		imageElement.classList.add('category__navigation-element-image');
		buttonTextElement.classList.add('category__navigation-element-title');

		buttonElement.append(
			imageElement,
			buttonTextElement
		);
		listItemElement.appendChild(buttonElement);

		return listItemElement;
	}

	function renderHTML(categories) {
		categories.forEach(category => {
			const categoryButtonElement = returnCategoryDOMElement(category);
			categoryContainer.appendChild(categoryButtonElement);
			returnCategoryDOMElement(category)
		});
		// console.log(categories);
	}
}






