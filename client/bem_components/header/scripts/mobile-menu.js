;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var menuBtn = document.querySelector('#menuBtn');
		var menuContent = document.querySelector('#menuContent');
		var menuOverlay = document.querySelector('#menuOverlay');
		var click = 0;

		menuBtn.addEventListener('click', clickMenuBtnHandler);
		menuOverlay.addEventListener('click', clickMenuOverlayHandler);

		function clickMenuBtnHandler() {
			click++;

			if (click % 2) {
				menuContent.style.transform = 'translateX(0px)';
				menuOverlay.style.display = 'block';
			} else {
				menuContent.style.transform = 'translateX(-180px)';
				menuOverlay.style.display = 'none';
			}
		}

		function clickMenuOverlayHandler() {
			click = 0;
			menuContent.style.transform = 'translateX(-180px)';
			menuOverlay.style.display = 'none';
		}
	};
})();