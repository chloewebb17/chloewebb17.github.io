    ingredientsSection = document.querySelector('.ingredients');
 	const button = document.querySelector('#button');

  	button.addEventListener('click', () => {
   		ingredientsSection.classList.toggle('open');
 	 });

    const closebutton = document.querySelector('.closebutton');

    closebutton.addEventListener('click', () => {
        ingredientsSection.classList.remove('open');
    });