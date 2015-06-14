SC.initialize({ client_id: "34417f683cc3691f1c2db4f3b1311cc8" });

(function(){

    var curr_track  = null;
    var players = document.querySelectorAll('.player');

    function getPlayer(player, track) {
        SC.get("/tracks/" + track, { limit: 1 }, function(data) {

            // load artwork
            player.style.backgroundImage = "url(" + data.artwork_url.replace('-large', '-t300x300') + ")";

            // when play is clicked
            player.addEventListener("click", function() {

                if (curr_track) {
                    curr_track.unload();
                }
                SC.stream("/tracks/" + track, function(sound) {
                    curr_track = sound;
                    curr_track.play();
                });

            });

        });
    }

    for(var i = 0; i < players.length; i++){
        var player = players[i];
        var track = player.dataset.track;
        getPlayer(player, track);
    }
}()); 