class Modal {

	constructor(options) {
		const api = {
			url: 'https://api.chucknorris.io/jokes/random', 
		};

		// Grab the options
		this.el = options.el;
		this.toggle = options.toggle;

		// Set the modal content
		fetch(api.url)
			.then((res) => res.json())
			.then(({value}) => {
				this.updateContent(value);
			});

		// Set the listeners
		this.addEventListeners();
	}

	addEventListeners() {
		this.toggle.addEventListener('click', (e) => {
			e.preventDefault();
			this.open();
		});

		this.el.querySelector('.js-close').addEventListener('click', (e) => {
			e.preventDefault();
			this.close();
		});
	}

	updateContent( newContent ) {
		const content = this.el.querySelector('.js-content');
		if (content) {
			content.innerHTML = newContent;
		}
	}

	open() {
		this.el.classList.add('is-active');
	}

	close() {
		this.el.classList.remove('is-active');
	}

};

export default Modal;
