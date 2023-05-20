export default function Header() {
	let isCollapsed = false;
	const navigationButton = document.querySelector('.main-header__mobile-burger-button');
	const navigationList = document.querySelector('.main-header__menu');
	navigationButton.addEventListener('click', handleNavigationButtonClick);

	function handleNavigationButtonClick(event) {
		isCollapsed = !isCollapsed;
		renderHTML()
	}

	function renderHTML() {
		if (isCollapsed) {
			navigationList.classList.add('main-header__menu--visible');
			// Disable scroll
			document.body.classList.add('main-header--no-scroll')
		} else {
			navigationList.classList.remove('main-header__menu--visible');
			// Enable scroll
			document.body.classList.remove('main-header--no-scroll');
		}
	}
}
