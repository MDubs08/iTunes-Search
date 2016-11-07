function carousel(){
	$('#myCarousel').carousel({
		interval: 10000
		})
	$('.carousel .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
  
		if (next.next().length>0) {
			next.next().children(':first-child').clone().appendTo($(this));
		}else{
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady(){
	player = new YT.Player('player',{
		height:'390',
		width: '640',
		position: 'center',
		videoId:'M71c1UVf-VE',
		events:{
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event){
	event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event){
	if(event.data == YT.PlayerState.PLAYING && !done){
		setTimeout(stopVideo, 6000);
		done=true;
	}
}

function stopVideo(){
	player.stopVideo();
}