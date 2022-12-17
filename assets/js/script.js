var searchinput = $(".search")
var itemWrapper = $("main")


function createmovieItem(dataArr) {
    itemWrapper.html("")
    if(!dataArr)
    {
       return  itemWrapper.html(`<p>No match found </p>`)
    }

    for (var item of dataArr) {
        itemWrapper.append(
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
    var serachText = searchinput.val().trim();
    
    if (event.keyCode === 13 && serachText /*&& serachText.length > 1*/) {
        searchinput.val("")
       $.get(`https://www.omdbapi.com/?apikey=d77c4980&s=${serachText}`)
      .then(data => createmovieItem(data.Search) )       
    }
}

function init() {
    searchinput.keydown( getMovieName)

}

init()










/*
  
*/