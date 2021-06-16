var showList = [];

function getData() {
  return fetch("../data/tv-shows.json").then((resp) => resp.json());
}
function setTvShows(data) {
  var liste = document.querySelector(".tvShowList");

  liste.innerHTML = "";
  data.forEach((tvShow) => {
    liste.innerHTML += ` 
    <div class="col-md-3"> 
 <div class="card" >
   <img src=${
     tvShow.show.image ? tvShow.show.image.medium : ""
   } class="card-img-top">
   <div class="card-body">
     <h5 class="card-title">${tvShow.show.name}</h5>
     
     
     <a class= "btn btn-success"  href=${tvShow.show.url}>Detaylar</a>
     <p> </p>
   </div>
 </div></div> `;
  });
}
document.getElementById("search").oninput = (e) => {
  var text = e.target.value.toLowerCase();
  var data = showList.filter((item) => {
    return item.show.name.toLowerCase().includes(text);
  });
  setTvShows(data);
};

getData().then((data) => {
  showList = data;
  setTvShows(showList);
});
