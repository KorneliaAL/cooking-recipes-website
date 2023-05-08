 export default function HandleinstructionButtonClick(event) {
	const currentButton = event.target;
	
	function renderHTML() {	
		currentButton.classList.toggle('description__instruction-button--active');
	}

	renderHTML();
}