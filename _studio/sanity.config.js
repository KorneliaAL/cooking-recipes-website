import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';

export default {
	title: 'Studio',

	projectId: 'zih0t3ed',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemas,
	},
};
