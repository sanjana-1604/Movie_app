var searchinput = document.querySelector(".search")
var itemWrapper = document.querySelector("main")



function createmovieItem(dataArr) {
    itemWrapper.innerHTML = ""

    for (var item of dataArr) {
        itemWrapper.insertAdjacentHTML("beforeend",
            `<div class="movie_item" style="background:linear-gradient(0deg,
                rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
               url(${item.image_url})">
        <h3>${item.Title}</h3>
        <p>${item.description}</p>
        <a href="${item.imdb_url}">More</a>
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
        fetch("https://www.omdbapi.com/?apikey=d77c4980&t=unstoppable")
        .then((responseObj)=>{
            responseObj.json().then((data)=>{
                console.log(data)
            })
        }
        )
        createmovieItem(matchesMovies)
    }
}



function init() {
    searchinput.addEventListener("keydown", getMovieName)

}

init()










/*
  
*/