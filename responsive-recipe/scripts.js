    ingredientsSection = document.querySelector('.ingredients');
 	const button = document.querySelector('#button');

  	button.addEventListener('click', () => {
   		ingredientsSection.classList.toggle('open');
 	 });

    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
        ingredientsSection.classList.remove('open');
    });