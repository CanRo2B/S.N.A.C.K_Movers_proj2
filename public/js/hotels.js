// const zip = document.getElementById("zipcode");
const hotelButtonEl = document.getElementById("hotel-button")

hotelButtonEl.onclick = function(){
  console.log('clicked on button to go to hotels');
  document.location.replace("/api/hotels/" + localStorage.getItem("storeZip"));
};

// hotelButtonEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log('clicked on button to go to hotels');
//   document.location.replace("/api/hotels/" + localStorage.getItem("storeZip"));
// });

// document.getElementById("myButton").onclick = function () {
//   location.href = "www.yoursite.com";