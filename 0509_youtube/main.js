//程式邏輯，主要程式運作 // $()表用到jQuery
var player;
var currentplay=0;

function onYoutubeIframeAPIReady(){
    player=new YT.Player(
        "player",
        {
            height:"400",
            width:"700",
            videoId:playlist[currentplay],
            playerVars:
            {
                "autoplay":0,
                "controls":0,
                "start":playtime[currentplay][0],
                "end":playtime[currentplay][1],
                "showinfo":0,
                "rel":0,
                "iv_load_policy":3
            },
            events:
            {
                "onReady":onPlayerReady,
                "onStateChange":onPlayerStateChange
            }
        }
    );
}

function onPlayerReady(event){
    $("#playButton").click(function(){
       $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    if(event.data==1 && (Math.floor(player.getCurrentTime())==playtime[currentplay][1]))
    {
        if(currentplay < playlist.length-1)
        {
            currentplay++;
            player.loadVideoById({
                "videoId":playlist[currentplay],
                "startSeconds":playtime[currentplay][0],
                "endSeconds":playtime[currentplay][1],
                "suggestedQuality":"large"
            });
        }
        else
        {
            currentplay=0;
            player.cueVideoById({
                "videoId":playlist[currentplay],
                "startSeconds":playtime[currentplay][0],
                "endSeconds":playtime[currentplay][1],
                "suggestedQuality":"large"
            });
        }
    }
    if(player.getVideoLoadedFraction()>0)
    {
        $("h2").text(player.getVideoData().title);
    }
}