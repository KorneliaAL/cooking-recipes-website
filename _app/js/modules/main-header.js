export default function Header() {
	let isCollapsed = false;
	const navigationButton = document.querySelector('.main-header__mobile-burger-button');
	const navigationList = document.querySelector('.main-header__menu');
	navigationButton.addEventListener('click', handleNavigationButtonClick);

	function handleNavigationButtonClick(event) {
		isCollapsed = !isCollapsed;

		if (isCollapsed) {
			navigationList.classList.add('main-header__menu--visible')
		} else {
			navigationList.classList.remove('main-header__menu--visible');
		}
	}
}