function search(){
	$.ajax({
		type: 'GET',
        dataType: 'json',
        url: 'https://itunes.apple.com/search?term='+searchConvert($('#searchInput').val())+'&media=music&limit=100'+"&callback=?",       
        success: function(items) 
        {
			var songs = "";
			var output = "";
			$.each(items.results, function(index, song){
				var info = '<div class="navbar-header"><a class="navbar-toggle" ';
				info += '<img class="image" src="' + song.artworkUrl100 + '">';
				info += '<h5>Song Name:  ' + song.trackName + '<h5>';
				info += '<h6>Artist:  ' + song.artistName + '</h6>';
				info += '<p>Album:  ' + song.collectionName + '<br>Genre:  ' + song.primaryGenreName + '<br>Album Price:  ' + song.collectionPrice + '</p>';
				info += '<button type="button" class="btn btn-primary btn-sm" href=' + song.previewUrl + '>Preview</button>';
				info += '</center></div>';
				songs += info;
				});

            $('#searchResults').html(songs);
			
			if(items.resultCount == 0)
            {
              var nothingFound = "Sorry, no results matched your search for " + $('#searchInput').val();
              $('#searchResults').html('<div class="col-sm-12"><center><h4>' + nothingFound + '</h4></center></div>');
            }
          }
        });
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