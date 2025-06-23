// Menu
document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.querySelector('.navbar__toggle');
	const menu = document.querySelector('.navbar__menu');

	if (toggleButton && menu) {
		 toggleButton.addEventListener('click', () => {
			  const isMenuActive = menu.classList.contains('is-active');

			  menu.classList.toggle('is-active', !isMenuActive);
			  menu.classList.toggle('is-hidden', isMenuActive);
			  toggleButton.classList.toggle('is-active', !isMenuActive);

			  // Update the aria-expanded attribute
			  toggleButton.setAttribute('aria-expanded', !isMenuActive);
		 });
	}
});


// Share buttons pop-up
(function () {
	// share popup
	const shareButton = document.querySelector('.js-content__share-button');
	const sharePopup = document.querySelector('.js-content__share-popup');

	if (shareButton && sharePopup) {
		 sharePopup.addEventListener('click', function (e) {
			  e.stopPropagation();
		 });

		 shareButton.addEventListener('click', function (e) {
			  e.preventDefault();
			  e.stopPropagation();
			  sharePopup.classList.toggle('is-visible');
		 });

		 document.body.addEventListener('click', function () {
			  sharePopup.classList.remove('is-visible');
		 });
	}

	// link selector and pop-up window size
	const Config = {
		 Link: ".js-share",
		 Width: 500,
		 Height: 500
	};

	// add handler to links
	const shareLinks = document.querySelectorAll(Config.Link);
	shareLinks.forEach(link => {
		 link.addEventListener('click', PopupHandler);
	});

	// create popup
	function PopupHandler(e) {
		 e.preventDefault();

		 const target = e.target.closest(Config.Link);
		 if (!target) return;

		 // hide share popup
		 if (sharePopup) {
			  sharePopup.classList.remove('is-visible');
		 }

		 // popup position
		 const px = Math.floor((window.innerWidth - Config.Width) / 2);
		 const py = Math.floor((window.innerHeight - Config.Height) / 2);

		 // open popup
		 const linkHref = target.href;
		 const popup = window.open(linkHref, "social", `
			  width=${Config.Width},
			  height=${Config.Height},
			  left=${px},
			  top=${py},
			  location=0,
			  menubar=0,
			  toolbar=0,
			  status=0,
			  scrollbars=1,
			  resizable=1
		 `);

		 if (popup) {
			  popup.focus();
		 }
	}
})();

// Responsive embeds script
(function () {
	let wrappers = document.querySelectorAll('.post__video, .post__iframe');

	for (let i = 0; i < wrappers.length; i++) {
		let embed = wrappers[i].querySelector('iframe, embed, video, object');

		if (!embed) {
			continue;
		}

        if (embed.getAttribute('data-responsive') === 'false') {
            continue;
        }

		let w = embed.getAttribute('width');
		let h = embed.getAttribute('height');
		let ratio = false;

		if (!w || !h) {
			continue;
		}
		
		if (w.indexOf('%') > -1 && h.indexOf('%') > -1) { // percentage mode
			w = parseFloat(w.replace('%', ''));
			h = parseFloat(h.replace('%', ''));
			ratio = h / w;
		} else if (w.indexOf('%') === -1 && h.indexOf('%') === -1) { // pixels mode
			w = parseInt(w, 10);
			h = parseInt(h, 10);
			ratio = h / w;
		}

		if (ratio !== false) {
			let ratioValue = (ratio * 100) + '%';
			wrappers[i].setAttribute('style', '--embed-aspect-ratio:' + ratioValue);
		}
	}
})();

