var searchinput = document.querySelector(".search")
var itemWrapper = document.querySelector("main")



function createmovieItem(dataArr) {
    itemWrapper.innerHTML = ""
    console.log(dataArr)

    for (var item of dataArr) {
        itemWrapper.insertAdjacentHTML("beforeend",
            `<div class="movie_item" style="background-image:linear-gradient(0deg,
                rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
               url(${item.Poster})">
        <h3>${item.Title}</h3>
        <p>Release Year: ${item.Year}</p>
        <a href="https://www.imdb.com/title/${item.imdbID}" target="_blank">More</a>
    </div>`
        )

    }




}

function getMovieName(event) {
    var serachText = searchinput.value.trim().toLowerCase();
    if (event.keyCode === 13 && serachText /*&& serachText.length > 1*/) {
        let matchesMovies = []
        for (var movie of movieData) {
            if (movie.title.toLowerCase().includes(serachText)) {
                matchesMovies.push(movie)
            }

        }
        fetch(`https://www.omdbapi.com/?apikey=d77c4980&s=${serachText}`)
      .then(res => res.json())
      .then(data => createmovieItem(data.Search) )

     
        
    }
}



function init() {
    searchinput.addEventListener("keydown", getMovieName)

}

init()










/*
  
*/