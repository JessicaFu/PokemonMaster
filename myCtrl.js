
app.controller("myCtrl", function($scope) {
    function init_starter(){
    	$scope.base_name = "./images/pokemon/";
    	$scope.starter_list = [
    		{name:"pikachu", lvl: 1, choosen: false},
    		{name:"charmander", lvl: 1, choosen: false},
    		{name:"bulbasaur", lvl: 1, choosen: false},
    		{name:"squirtle", lvl: 1, choosen: false}
    	];
    }
    init_starter();

    $scope.status = "Walking...";
    $scope.wild_pokemon = null;
    $scope.capture = function() {

    };

    function randPokemon (){
        return {name:"pikachu", lvl: 1, choosen: false};
    }

    function changeStatus(){
        if ($scope.status === "Walking..."){
            $scope.status ="Appeared!"
            $scope.wild_pokemon = randPokemon();
        }else if ($scope.status === "Appeared!"){
            $scope.status ="Walking..."
            $scope.wild_pokemon = null;
        }
    }
    if 


    if (localStorage.PokemonMaster){
    	$scope.me = JSON.parse(localStorage.PokemonMaster);
    } else {
    	$scope.me = {
			starter: null,
			pokemonList: []
		};
	}
    $scope.me.pokemonList =[
            {name:"pikachu", lvl: 1, choosen: true},
            {name:"charmander", lvl: 1, choosen: true},
            {name:"bulbasaur", lvl: 1, choosen: false},
            {name:"squirtle", lvl: 1, choosen: false}
        ]; 

    $scope.select_starter = function(pokemon){
    	pokemon.choosen = "true";
		$scope.me.pokemonList.push(pokemon);
		$(document.getElementById("choose-starter")).animate({opacity: "0"}, 
			800,
			function(){
				this.style.display = "none";
				document.getElementById("travelling").style.display = "block";
				$(document.getElementById("travelling")).animate({opacity: "1"}, 500);
			});
		localStorage.PokemonMaster = JSON.stringify($scope.me);
    }

    $scope.closed = true;
    $scope.click_pokebag = function(closed){
        if (closed){
            open_pokebag();
            
        }else {
            close_pokebag();
            
        }
    }

    var open_pokebag = function(){
        document.getElementById("pokebag").style.opacity = 0;
    	document.getElementById("pokebag").style.display = "block";

        $(document.getElementById("travelling")).animate({opacity: "0"}, 300, function(){
            document.getElementById("travelling").style.display = "none";
        });
        $(document.getElementById("travelling")).animate({opacity: "0"}, 300, function(){
            document.getElementById("choose-starter").style.display = "none";
            $(document.getElementById("pokebag")).animate({opacity: "1"}, 300);
            $(document.getElementById("PokeBagTitle")).text("Close Bag");
            $scope.closed = false;
        });

        
    }


    var close_pokebag = function(){
        document.getElementById("travelling").style.opacity = 0;


        $(document.getElementById("pokebag")).animate({opacity: "0"}, 300, function(){
            document.getElementById("pokebag").style.display = "none";
            document.getElementById("travelling").style.display = "block";
            $(document.getElementById("travelling")).animate({opacity: "1"}, 300);
            $(document.getElementById("PokeBagTitle")).text("Poke-Bag");
            $scope.closed = true;
        });
        

       
    }
});