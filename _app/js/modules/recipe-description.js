import HandleinstructionButtonClick from "./instruction-button.js";

/**
Renders the recipe description on the webpage
@param {Object} recipes - An object containing the recipe information to be displayed
@returns {HTMLElement} - The recipe description elements to be appended to the DOM
*/

export default async function RenderRecipeDescription(recipes) {

	const recipeDescription = document.querySelector('.description');

	 // Get the slug value from the URL parameters
	if (recipeDescription) {
		const urlParams = new URLSearchParams(window.location.search);
		const slug = urlParams.get('recipe');
		
		renderHTML(slug);
	}


	/**
	Returns the recipe information as DOM elements
	@param {object} recipe - The recipe data object
	@returns {HTMLElement} - The recipe information DOM elements
	*/

	function returnRecipeInfoToDOMElement(recipe) {

		// Extract the recipe data
		const descriptionTitle = recipe.recipeName;
		const caloryAmount = recipe.calories.amount;
		const caloryUnit = recipe.calories.unit;
		const servingsAmount = recipe.servings;
		const servingsText = 'servings';
		const timeAmount = recipe.cookTime;
		const timeText = 'min';
		const favoriteButtonText = 'save to favorites';

		// Creates the DOM elements for the recipe information
		const descriptionInformationElement = document.createElement('div');
		const descriptionTitleElement = document.createElement('h2');
		const descriptionInformationFactsElement = document.createElement('div');
		const descriptionFactCaloryElement = document.createElement('div');
		const descriptionCaloryIconElement = document.createElement('div');
		const descriptionCaloryAmountElement = document.createElement('div');
		const descriptionCaloryUnitElement = document.createElement('div');
		const descriptionFactServingsElement = document.createElement('div');
		const descriptionServingsIconElement = document.createElement('div');
		const descriptionServingsAmountElement = document.createElement('div');
		const descriptionServingsTextElement = document.createElement('div');
		const descriptionFactTimeElement = document.createElement('div');
		const descriptionTimeIconElement = document.createElement('div');
		const descriptionTimeAmountElement = document.createElement('div');
		const descriptionTimeTextElement = document.createElement('div');
		const descriptionFavoriteButtonElement = document.createElement('button');
		const descriptionFavoriteButtonIconElement = document.createElement('div');
		const descriptionFavoriteButtonTextElement = document.createElement('div');

		// Set the text content for the recipe information elements
		descriptionTitleElement.textContent = descriptionTitle;
		descriptionCaloryAmountElement.textContent = caloryAmount;
		descriptionCaloryUnitElement.textContent = caloryUnit;
		descriptionServingsTextElement.textContent = servingsText;
		descriptionTimeTextElement.textContent = timeText;
		descriptionFavoriteButtonTextElement.textContent = favoriteButtonText;
		descriptionTimeAmountElement.textContent = timeAmount;

		// Set the text content for servings amount, adding 0 if it's less than 10
		if(servingsAmount < 10) {
			descriptionServingsAmountElement.textContent = `0${servingsAmount}`;
		} else {
			descriptionServingsAmountElement.textContent = servingsAmount;
		}

		// Adds CSS classes to the recipe information elements
		descriptionInformationElement.classList.add(
			'description__information', 
			'grid__column-start-desktop--2', 
			'grid__column--10', 
			'grid__column-mobile--12');
		descriptionTitleElement.classList.add('description__information-title');
		descriptionInformationFactsElement.classList.add('description__information-facts');
		descriptionFactCaloryElement.classList.add('description__information-fact');
		descriptionCaloryIconElement.classList.add(
			'description__calories-icon', 
			'description__information-icon');
		descriptionCaloryAmountElement.classList.add('description__iformation-amount');
		descriptionCaloryUnitElement.classList.add('description__iformation-calories-text');
		descriptionFactServingsElement.classList.add('description__information-fact');
		descriptionServingsIconElement.classList.add(
			'description__servings-icon', 
			'description__information-icon');
		descriptionServingsAmountElement.classList.add('description__iformation-amount');
		descriptionFactTimeElement.classList.add('description__information-fact');
		descriptionTimeIconElement.classList.add(
			'description__time-icon', 
			'description__information-icon');
		descriptionTimeAmountElement.classList.add('description__iformation-amount');
		descriptionFavoriteButtonElement.classList.add('description__information-favorite-button');
		descriptionFavoriteButtonIconElement.classList.add('description__favorite-button-icon');
	
		descriptionFavoriteButtonElement.append(
			descriptionFavoriteButtonIconElement,
			descriptionFavoriteButtonTextElement
		);

		descriptionFactTimeElement.append(
			descriptionTimeIconElement,
			descriptionTimeAmountElement,
			descriptionTimeTextElement
		);

		descriptionFactServingsElement.append(
			descriptionServingsIconElement,
			descriptionServingsAmountElement,
			descriptionServingsTextElement
		);

		descriptionFactCaloryElement.append(
			descriptionCaloryIconElement,
			descriptionCaloryAmountElement,
			descriptionCaloryUnitElement
		);

		descriptionInformationFactsElement.append(
			descriptionFactCaloryElement,
			descriptionFactServingsElement,
			descriptionFactTimeElement,
		);

		descriptionInformationElement.append(
			descriptionTitleElement,
			descriptionInformationFactsElement,
			descriptionFavoriteButtonElement
		);

		return descriptionInformationElement;
	}

	/**
	Returns a DOM element containing an image of the recipe
	@param {Object} recipe - The recipe object containing the image data
	@return {HTMLElement} - A DOM element containing the image of the recipe
	*/

	function returnRecipeImageToDOMElement(recipe) {
		const imageUrl = recipe.image.imageURL;
		const imageAltText = recipe.image.altText;

		const descriptionImageContainerElement = document.createElement('div');
		const descriptionImageElement = document.createElement('img');

		descriptionImageElement.setAttribute('src', imageUrl);
		descriptionImageElement.setAttribute('alt', imageAltText);

		
		descriptionImageContainerElement.classList.add(
			'grid__column-start-desktop--2',
			'grid__column--10',
			'grid__column-mobile--12');

		descriptionImageContainerElement.append(descriptionImageElement);

		return descriptionImageContainerElement;
	}

	function returnIngredientContainerToDOMElement() {
		const descriptionIngredients = document.createElement('div');
		const ingredientMainTitle = document.createElement('h3');

		ingredientMainTitle.textContent = 'Ingredients';

		descriptionIngredients.classList.add('description__ingredients', 'grid__column-start-desktop--2', 'grid__column--3', 'grid__column-mobile--12');
		ingredientMainTitle.classList.add('description__sub-title');

		descriptionIngredients.appendChild(ingredientMainTitle);


		return descriptionIngredients;
	}

	/**
	Returns a DOM element that contains the ingredients of a recipe.
	@param {Object} ingredient - The ingredient object containing the information about the ingredients of the recipe.
	@return {HTMLElement} An HTML element containing the ingredients of a recipe.
	*/

	function returnRecipeIngredientsToDOMElement(ingredient) {
		const ingredientsContainer = document.createElement('div');
		const ingredientListTitleElement = document.createElement('h4');
		const ingredientListContainer = document.createElement('ul');
		ingredientListTitleElement.textContent = ingredient.name;

		ingredient.ingredients.forEach(ingredientElement => {
			const ingredientAmount = ingredientElement.amount;
			const ingredientName = ingredientElement.name;
			const ingredientUnit = ingredientElement.unit; 

			const ingredientListElement = document.createElement('li');
			const ingredientButton = document.createElement('button');
			const ingredientButtonDot = document.createElement('div');
			const ingredientButtonTextContainer = document.createElement('div');
			const ingredientButtonBoldText = document.createElement('b');
			const ingredientButtonText = document.createElement('span');

			ingredientButtonText.textContent = ingredientName;
			ingredientButtonBoldText.textContent = `${ingredientAmount} ${ingredientUnit}`;
			if (ingredientUnit !== undefined) {
				ingredientButtonBoldText.textContent = `${ingredientAmount} ${ingredientUnit} `;
			} else {
				ingredientButtonBoldText.textContent = ingredientAmount;
			}

			ingredientButton.classList.add('description__ingredient-button');
			ingredientButtonDot.classList.add('description__ingredient-button-dot');
			ingredientButtonTextContainer.classList.add('description__ingredient-button-text');

			ingredientButtonTextContainer.append(
				ingredientButtonBoldText,
				ingredientButtonText
				);

			ingredientButton.append(
				ingredientButtonDot,
				ingredientButtonTextContainer
			);

			ingredientListElement.appendChild(ingredientButton);
			ingredientListContainer.append(ingredientListElement);
		});

		ingredientListTitleElement.classList.add('description-ingredient-title');
		ingredientListContainer.classList.add('description__ingredients-list');

		ingredientsContainer.append(
			ingredientListTitleElement,
			ingredientListContainer
		)

		return ingredientsContainer;
	}

	function returnInstructionContainerToDOMElement() {
		const descriptionInstruction = document.createElement('div');
		const ingredientMainTitle = document.createElement('h3');

		ingredientMainTitle.textContent = 'Instruction';

		descriptionInstruction.classList.add('description__ingstruction', 'grid__column-start-desktop--5', 'grid__column--7', 'grid__column-mobile--12');
		ingredientMainTitle.classList.add('description__sub-title');

		descriptionInstruction.appendChild(ingredientMainTitle);

		return descriptionInstruction;
	}

	/**
	Returns a DOM element containing the instructions of a recipe.
	@param {Object} recipe - An object containing the information of the current recipe.
	@param {Array} recipe.instructions - An array of instructions of a recipe.
	@param {string} recipe.instructions.step - A string containing the instruction text of a recipe.
	
	@returns {HTMLUListElement} A DOM element containing the instructions of a recipe.
	*/

	function returnRecipeInstructionToDOMElement(recipe) {
		const instructionsListContainer = document.createElement('ul');

		instructionsListContainer.classList.add('description__instruction-list')
		recipe.instructions.forEach(instruction => {

			const instructionListItemElement = document.createElement('li');
			const instructionButton = document.createElement('button');
			const instructionButtonDot = document.createElement('div');
			const instructionButtonText = document.createElement('div');

			instructionButtonText.textContent = instruction.step;

			instructionButton.addEventListener('click', HandleinstructionButtonClick);
			
			instructionButton.classList.add('description__instruction-button');
			instructionButtonDot.classList.add('description__instruction-button-dot');
			instructionButtonText.classList.add('description__instruction-button-text');

			instructionButton.append(
				instructionButtonDot,
				instructionButtonText
			);

			instructionListItemElement.appendChild(instructionButton);

			instructionsListContainer.appendChild(instructionListItemElement);
		});
		return instructionsListContainer;
	}


	/**
	Renders the HTML for a given recipe slug.
	@param {string} slug - The slug of the recipe to render.
	@returns {void}
	*/

	function renderHTML(slug) {
		const currentRecipeDescription = recipes.find(recipe => recipe.slug === slug);

		const recipeDescriptonInformation = returnRecipeInfoToDOMElement(currentRecipeDescription);
		const recipeDescriptionImage = returnRecipeImageToDOMElement(currentRecipeDescription);
		const descriptionIngredientsContainer = returnIngredientContainerToDOMElement();
		const descriptionInstructionContainer = returnInstructionContainerToDOMElement();
		const recipeInstructions = returnRecipeInstructionToDOMElement(currentRecipeDescription)


		currentRecipeDescription.ingredients.forEach(ingredient => {
			const ingredientsList = returnRecipeIngredientsToDOMElement(ingredient);

			descriptionIngredientsContainer.appendChild(ingredientsList);
		});

		descriptionInstructionContainer.append(recipeInstructions)		

		recipeDescription.append(
			recipeDescriptonInformation,
			recipeDescriptionImage,
			descriptionIngredientsContainer,
			descriptionInstructionContainer
		);
	}
}


