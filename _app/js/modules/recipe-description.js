export default function RenderRecipeDescription(recipes) {

	const recipeDescription = document.querySelector('.description');

	if (recipeDescription) {
		const urlParams = new URLSearchParams(window.location.search);
		const slug = urlParams.get('recipe');
		
		renderHTML(slug);
	}

	function returnRecipeInfoToDOMElement(recipe) {
		const descriptionTitle = recipe.recipeName;
		const caloryAmount = recipe.calories.amount;
		const caloryUnit = recipe.calories.unit;
		const servingsAmount = recipe.servings;
		const servingsText = 'servings';
		const timeAmount = recipe.cookTime;
		const timeText = 'min';
		const favoriteButtonText = 'save to favorites';

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

		descriptionTitleElement.textContent = descriptionTitle;
		descriptionCaloryAmountElement.textContent = caloryAmount;
		descriptionCaloryUnitElement.textContent = caloryUnit;
		descriptionServingsTextElement.textContent = servingsText;
		descriptionTimeTextElement.textContent = timeText;
		descriptionFavoriteButtonTextElement.textContent = favoriteButtonText;
		descriptionTimeAmountElement.textContent = timeAmount;

		if(servingsAmount < 10) {
			descriptionServingsAmountElement.textContent = `0${servingsAmount}`;
		} else {
			descriptionServingsAmountElement.textContent = servingsAmount;
		}

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

	function returnIngredientTitleToDOMElement() {
		const descriptionIngredients = document.createElement('div');
		const ingredientMainTitle = document.createElement('h3');

		ingredientMainTitle.textContent = 'Ingredients';

		descriptionIngredients.classList.add('description__ingredients', 'grid__column-start-desktop--2', 'grid__column--3', 'grid__column-mobile--12');
		ingredientMainTitle.classList.add('description__sub-title');

		descriptionIngredients.appendChild(ingredientMainTitle);


		return descriptionIngredients;
	}

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
				ingredientButtonBoldText.textContent = `${ingredientAmount} ${ingredientUnit}`;
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

	function renderHTML(slug) {
		const currentRecipeDescription = recipes.find(recipe => recipe.slug === slug);

		const recipeDescriptonInformation = returnRecipeInfoToDOMElement(currentRecipeDescription);
		const recipeDescriptionImage = returnRecipeImageToDOMElement(currentRecipeDescription);
		const descriptionIngredientsContainer = returnIngredientTitleToDOMElement();
		const descriptionInstructionContainer = returnInstructionContainerToDOMElement();
		currentRecipeDescription.ingredients.forEach(ingredient => {
			const ingredientList = returnRecipeIngredientsToDOMElement(ingredient);

			descriptionIngredientsContainer.appendChild(ingredientList);
		});

		recipeDescription.append(
			recipeDescriptonInformation,
			recipeDescriptionImage,
			descriptionIngredientsContainer,
			descriptionInstructionContainer
		);
	}
}


