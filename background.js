var status = {encounter: false, pokemon: null};

if (localStorage.PokemonMaster){
    me = JSON.parse(localStorage.PokemonMaster);
} else {
	me = {
		starter: null,
		pokemonList: [],
		info: {}
	};
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (!request.status.encounter){
    	chrome.browserAction.setIcon({path: "/images/pikachu.png"});
    	status = {encounter: false, pokemon: null};
    }
      
  });

function setStatus(){


	wildPokemon = getWildPokemon();
	var img_path = "/images/pokeball.png";
	if (wildPokemon.encounter && !status.encounter){

		chrome.browserAction.setIcon({path: img_path}, function(){
			if (img_path === "/images/pokeball.png"){
				img_path = "/images/pokeball.png";
			}else {
				img_path = "/images/exclamation.png";
			}
		});
		status = wildPokemon;
	}
}

function changeStatus(){

}

function getWildPokemon(){
	var state = {encounter: false, pokemon: null};



	

	return state;
}
