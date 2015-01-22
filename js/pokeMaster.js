var me;

if (localStorage.PokemonMaster){
    me = JSON.parse(localStorage.PokemonMaster);
} else {
	me = {
		starter: null,
		pokemonList: []
	};
}

function initPokemon(){
	console.log("here");
	if (me.pokemonList.length===0){
		document.getElementById("choose-starter").style.display="block";
		document.getElementById("pokebag").style.display="none";
		document.getElementById("travelling").style.display="none";
	}else {
		document.getElementById("choose-starter").style.display="none";
		document.getElementById("pokebag").style.display="none";
		document.getElementById("travelling").style.display="block";
	}
}
initPokemon();

function starterPokemon (){
	var starterOpt = document.getElementsByClassName("starter-poke-block")

}

var trainer1 = document.getElementById("trainer1");
var trainer2 = document.getElementById("trainer2");

setInterval(function(){
	if (trainer1.style.display==="none"){
		trainer1.style.display="block";
	}else{
		trainer1.style.display="none";
	}

	if (trainer2.style.display==="none"){
		trainer2.style.display="block";
	}else{
		trainer2.style.display="none";
	}

}, 300);

