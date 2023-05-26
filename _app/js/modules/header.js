export default function Header() {
	let isCollapsed = false;
	const navigationButton = document.querySelector('.main-header__mobile-burger-button');
	const navigationList = document.querySelector('.main-header__menu');
	navigationButton.addEventListener('click', handleNavigationButtonClick);

	/**
	 * Event handler for navigation button click.
	 * Toggles the collapsed state and renders HTML accordingly.
	 */

	function handleNavigationButtonClick(event) {
		isCollapsed = !isCollapsed;
		renderHTML();
	}

	/**
	 * Renders the HTML based on the collapsed state.
	 */
	
	function renderHTML() {
		if (isCollapsed) {
			navigationList.classList.add('main-header__menu--visible');
			navigationButton.style.backgroundImage = 'url(/_app/assets/icons/exit.svg)';
			navigationButton.setAttribute('aria-label', "Close Navigation Menu");
			// Disable scroll
			document.body.classList.add('main-header--no-scroll');
		} else {
			navigationList.classList.remove('main-header__menu--visible');
			navigationButton.style.backgroundImage = 'url(/_app/assets/icons/menu-2.svg)';
			navigationButton.setAttribute('aria-label', "Open Navigation Menu");
			// Enable scroll
			document.body.classList.remove('main-header--no-scroll');
		}
	}
}
