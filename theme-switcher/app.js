
const navSlide = () => {
  const toggleButton = document.querySelector('.toggleButton');
  const body = document.body;

  toggleButton.addEventListener('click',() => {

    if (toggleButton.classList.contains('fa-moon')) {
      console.log('dark-theme');
      body.classList.replace('light', 'dark');
    } else if (toggleButton.classList.contains('fa-sun')) {
      console.log('light-theme');
      body.classList.replace('dark', 'light');
    }

    toggleButton.classList.toggle('fa-moon');
    toggleButton.classList.toggle('fa-sun');
  });
}

navSlide();


// function classToggle() {
//   document.getElementById("toggle").classList.toggle('fa-moon');
//   document.getElementById("toggle").classList.toggle('fa-sun');
// }
//
// document.querySelector('#toggle').addEventListener('click', classToggle);
