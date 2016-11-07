//https://itunes.apple.com/search?term=whateverparameters (example: term=jack+johnson)
//https://itunes.apple.com/search?lookup? <== don't use 

function search(){
	$.ajax({
		type: 'GET',
        dataType: 'json',
        url: 'https://itunes.apple.com/search?term=' + searchConvert($('#searchInput').val()) + '&media=music'+'&limit=48'+"&callback=?",       
        success: function(items) 
        {
			var musicResult = "";
			$.each(items.results, function(index, music){
				var attribute = '<div class="col-sm-3"><center>';
				attribute += '<img class="image" src="' + music.artworkUrl100 + '">';
				attribute += '<h5>' + trimAttribute(music.trackName) + '</h5>';
				attribute += '<h6>Artist:  ' + trimAttribute(music.artistName) + '</h6>';
				attribute += '<p>Album:  ' + trimAttribute(music.collectionName) + '<br>Genre:  ' + music.primaryGenreName + '<br>Album Price:  $' + music.collectionPrice + '</p>';
				attribute += '<button type="button"' + isExplicit(music.trackExplicitness)+'<br>';
				attribute += '<input type="button" class="btn btn-primary btn-sm" onclick="location.href=' + "'" + music.artistViewUrl + "';" + '" value="View Artist"/>';
				attribute += '</center></div>';
				musicResult += attribute;
				});
            $('#searchResults').html('<div class="jumbotron">' + musicResult + '</div>');
			if(items.resultCount == 0)
            {
              var noResults = "No results available for " + $('#searchInput').val();
              $('#searchResults').html('<div class="col-sm-12"><center><h4>' + noResults + '</h4></center></div>');
            }
          }
        });
};

function trimAttribute(name){
	var result = name;
	if (result.length > 20){
		return (result.substring(0,20)+"...");
	}
	else return result;
};

function isExplicit(track){
	var result = track;
	if (result == "notExplicit"){
		return ('class="btn btn-outline-success">Clean</button>');
	}
	else return ('class="btn btn-outline-danger">Explicit</button>');
}

function searchType(type){
	/*<label for="searchTerm">Search Here:</label>
	<input class="form-control" id="searchInput" placeholder="Search on iTunes... Ex. Imagine Dragons" type="text">
	<button type="button" id="search" onclick="search()" class="btn btn-primary btn-md" value="Search">Search</button>*/
};

function searchConvert(search){
	return search.trim().replace(/ /g, "+");
};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}