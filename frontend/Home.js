window.addEventListener('scroll', function() {
    var container = document.getElementById('imageContainer');
    var containerPosition = container.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (containerPosition < screenPosition) {
      container.classList.add('blurred'); // Add blur when in view
    } else {
      container.classList.remove('blurred'); // Remove blur when out of view
    }
  });