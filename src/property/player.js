SC.initialize({ client_id: "34417f683cc3691f1c2db4f3b1311cc8" });

var Player = (function(module){

    module.players = document.querySelectorAll('.player');

    module.resetTracks = function(){
        for(var i = 0; i < module.players.length; i++){
            module.players[i].classList.remove('active');
        }
        return module;
    };

    // play track
    module.playTrack = function() {
        var track = this.dataset.track;
        var isActive = this.classList.contains('active');
        SC.streamStopAll();
       module.resetTracks();

        // if it's already playing turn off
        if(!isActive){
            this.classList.add('active');
            SC.stream("/tracks/" + track, function(sound) {
                sound.play();
            });
        }

        return module;
    };

    // config player
    module.configPlayer = function(player, track) {
        SC.get("/tracks/" + track, { limit: 1 }, function(data) {
            player.style.backgroundImage = "url(" + data.artwork_url.replace('-large', '-t300x300') + ")";
            player.addEventListener("click", module.playTrack, false);
        });
    };

    // config
    for(var i = 0; i < module.players.length; i++){
        var player = module.players[i];
        var track = player.dataset.track;
        module.configPlayer(player, track);
    }

}(Player || {})); 