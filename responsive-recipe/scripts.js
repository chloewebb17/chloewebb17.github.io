    ingredientsSection = document.querySelector('.ingredients');
 	const button = document.querySelector('#button');

  	button.addEventListener('click', () => {
   		ingredientsSection.classList.toggle('open');
 	 });