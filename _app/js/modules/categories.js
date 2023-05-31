import RenderRecipes from "./recipes-list.js";

export default function Categories(recipes) {
	let activeButton = null;

	const categoryContainer = document.querySelector('.category__navigation-list');

	if (categoryContainer) {
		createCategoryButtons();
	}

	/**
  	* Creates category buttons based on the unique categories found in the recipes array.
	* Also creates a category with all recipes
  	*/
	function createCategoryButtons() {
		const categories = []; 

		categories.push({
			id: 'all',
			name: 'All',
			image: {
				imageURL: 'https://www.gausdal.kommune.no/getfile.php/3795042.1852.wppvrepqfs/640x0/Bra%26nbsp%3Bmat.jpg',
				altText: 'Vegtables and fruits formed as a heart'
			}
		});

		recipes.forEach(recipe => {
			const category = recipe.category;

			// Checks if the category button already exist
			if (!categories.some(existingCategory => existingCategory.id === category.id)) {
				categories.push(category);
			}
		});
	
		renderHTML(categories);
	}

	/**
	* Handles the button click event and renders recipes based on the selected category.
	* @param {Event} event - The click event object.
	*/

	function handleButtonElementClick(event) {
		const currentCategoryName = event.target.dataset.category;
		const currentButton = event.target;

		if(currentCategoryName === 'All') {
			RenderRecipes(recipes);
			renderCategory(currentButton);

		} else {
			const filteredRecipe = recipes.filter(recipe => {
				return recipe.category.name === currentCategoryName;
			});

			RenderRecipes(filteredRecipe);
			renderCategory(currentButton);
		}

		
	}

	/**
	* Creates a DOM element for a category and returns it.
	* @param {Object} category - The category object.
	* @returns {HTMLElement} The DOM element representing the category.
	*/

	function returnCategoryDOMElement(category) {
		const categoryName = category.name;
		const imageURL = category.image.imageURL;
		const altText = category.image.altText;

		const listItemElement = document.createElement('li');
		const buttonElement = document.createElement('button');
		const imageElement = document.createElement('img');
		const buttonTextElement = document.createElement('div');

		imageElement.setAttribute('src', imageURL);
		imageElement.setAttribute('alt', altText);

		buttonElement.dataset.category = categoryName;
		imageElement.dataset.category = categoryName;
		buttonTextElement.dataset.category = categoryName;

		buttonTextElement.textContent = categoryName;

		listItemElement.classList.add('category__navigation-element');
		buttonElement.classList.add('category__navigation-category-button')
		imageElement.classList.add('category__navigation-element-image');
		buttonTextElement.classList.add('category__navigation-element-title');

		buttonElement.addEventListener('click', handleButtonElementClick);

		buttonElement.append(
			imageElement,
			buttonTextElement
		);
		listItemElement.appendChild(buttonElement);

		return listItemElement;
	}

	// Renders the active state for the selected category button.
	function renderCategory(button) {

		if(activeButton) {
			activeButton.classList.remove('category--active');
		}

		button.classList.add('category--active');
		activeButton = button;
	}

	// Renders the category buttons on the page
	function renderHTML(categories) {
		categories.forEach(category => {
			const categoryButtonElement = returnCategoryDOMElement(category);
			categoryContainer.appendChild(categoryButtonElement);
			returnCategoryDOMElement(category)
		});
	}
}






