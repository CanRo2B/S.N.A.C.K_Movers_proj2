// const zip = document.getElementById("zipcode");
const moverButtonEl = document.getElementById("mover-button")

moverButtonEl.onclick = function(){
  console.log('clicked on button to go to movers');
  document.location.replace("/api/movers/" + localStorage.getItem("storeZip"));
};

// moverButtonEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log('clicked on button to go to mover handlebar');
//   document.location.replace("/api/movers/" + localStorage.getItem("storeZip"));
// });