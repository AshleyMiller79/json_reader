function getData() {
  return fetch("../data/tv-shows.json").then((resp) => resp.json());
}

getData().then((data) => {
  var liste = document.querySelector(".tvShowList");

  data.forEach((tvShow) => {
    console.log(tvShow);
    liste.innerHTML += `   
 <div className="card" style={{ width: "16rem" }}>
   <img src=${tvShow.show.image.medium} >
   <div className="card-body">
     <h5 className="card-title">${tvShow.show.name}</h5>
     <p className="card-text">
     ${tvShow.show.genres} ${tvShow.show.status} ${tvShow.show.summary}
     </p>
     
     <a className= "btn btn-success"  href=${tvShow.show.url}>Detaylar</a>
     <p> </p>
   </div>
 </div>`;
  });
});
