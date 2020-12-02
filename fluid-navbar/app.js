const sections = document.querySelectorAll('section');
const bubble  = document.querySelector('.bubble');
const colors = ["#264653", "#E76F51", "#2A9D8F"];

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach((entry) => {
    // console.log(entry);
    const className = entry.target.className;
    // console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    // console.log(activeAnchor);
    const colorIndex = entry.target.getAttribute('data-index');
    // console.log(colorIndex);
    const coords = activeAnchor.getBoundingClientRect();
    // console.log(coords);
    // console.log(coords.width);
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if(entry.isIntersecting){
      bubble.style.setProperty('height', `${directions.height}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.background = colors[colorIndex];
    }
  });
}



sections.forEach(section => {
  observer.observe(section);
});
