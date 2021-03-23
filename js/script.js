const frequently = document.querySelector('.frequently-asked-toggle');
const reviews = document.querySelector('.reviews-toggle');

document.querySelector('.mobile-frequently-button').addEventListener('click', function(event) {
  frequently.classList.toggle('active');
  event.preventDefault();
});

document.querySelector('.reviews-button').addEventListener('click', function(event){
  event.preventDefault();
  reviews.classList.toggle('active');
});