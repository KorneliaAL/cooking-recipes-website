export default function HandleinstructionButtonClick(event) {
	const currentButton = event.target.parentElement;
	const currentDot = currentButton.firstChild;
	const currentText = currentButton.lastChild;
	
	function renderHTML() {	
		currentButton.classList.toggle('description__instruction-button--active');
		currentDot.classList.toggle('description__dot--active');
		currentText.classList.toggle('description__text--active');
	}

	renderHTML();
}