export default {
	title: 'Cooking recipes',
	name: 'cookingRecipes',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Ingredients',
			name: 'ingredients',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Name',
							name: 'name',
							type: 'string'
						},
						{
							title: 'Amount',
							name: 'amount',
							type: 'number'
						},
						{
							title: 'Unit',
							name: 'unit',
							type: 'string'
						},
						{
							title: 'Measures',
							name: 'measures',
							type: 'object',
							fields: [
								{
									title: 'Metric',
									name: 'metric',
									type: 'object',
									fields: [
										{
											title: 'Amount',
											name: 'amount',
											type: 'number'
										},
										{
											title: 'Unit Long',
											name: 'unitLong',
											type: 'string'
										},
										{
											title: 'Unit Short',
											name: 'unitShort',
											type: 'string'
										}
									]
								},
								{
									title: 'Us',
									name: 'us',
									type: 'object',
									fields: [
										{
											title: 'Amount',
											name: 'amount',
											type: 'number'
										},
										{
											title: 'Unit Long',
											name: 'unitLong',
											type: 'string'
										},
										{
											title: 'Unit Short',
											name: 'unitShort',
											type: 'string'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			title: 'Instructions',
			name: 'instructions',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Number',
							name: 'number',
							type: 'number'
						},
						{
							title: 'Step',
							name: 'step',
							type: 'text'
						}
					]
				}
			]
		},
		{
			title: 'Ready in minutes',
			name: 'readyInMinutes',
			type: 'number'
		},
		{
			title: 'Vegetarian',
			name: 'vegetarian',
			type: 'boolean'
		},
		{
			title: 'Vegan',
			name: 'vegan',
			type: 'boolean',
		},
		{
			title: 'Gluten free',
			name: 'glutenFree',
			type: 'boolean'
		},
		{
			title: 'Dairy Free',
			name: 'dairyFree',
			type: 'boolean'
		}
	]
}