const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/img/NoEncontrado2.png")
        }
        else {
            return  res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;   
            pokeImage(pokeImg);        
            const pokeLabelId = document.getElementById("pokeLabelId");
            pokeLabelId.innerHTML= "Id: " + data.id;
            Id=data.id;
            const pokeLabelName = document.getElementById("pokeLabelName");
            pokeLabelName.innerHTML= "Name: " + data.name;
            const pokeLabelExperience = document.getElementById("pokeLabelExperience");           
            pokeLabelExperience.innerHTML= "Base Experiencia: " + data.base_experience;          
           // const abilities =[];
            const PokemonType = document.getElementById("PokemonType");
            PokemonType.classList.add('Abilities');
            PokemonType.innerHTML= data.types[0].type.name;

            for (let i = 0; i <= data.abilities.length ; i++) {
              const pokemonAbilities = document.getElementById("pokemonAbilities");
             // abilities.push(data.abilities[i].ability.name);  
              const pokemonElAbi = document.createElement('div');
              pokemonElAbi.classList.add('Abilities');
              const pokeInnerHTMLAb = `${data.abilities[i].ability.name}`;
              pokemonElAbi.innerHTML = pokeInnerHTMLAb;
	            pokemonAbilities.appendChild(pokemonElAbi);

          const pokemonMoves = document.getElementById("pokemonMoves");
          const pokemonElMoves = document.createElement('div');
          pokemonElMoves.classList.add('Abilities');
          const pokeInnerHTMLMoves = `${data.moves[i].move.name}`;
          NumberMove=data.moves.length;
          pokemonElMoves.innerHTML = pokeInnerHTMLMoves;
          pokemonMoves.appendChild(pokemonElMoves);

              }
              

        }
    });
}


function activarBtnMoves(){
const button = document.getElementById('fetchPokemonMoves');
button.disabled = false;
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

//-------------------Catalogo---------------------------------------
const pokeContainer = document.getElementById('poke_container');
const pokemonsNum = 150;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemonsNum; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { name, sprites, types } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `<div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <h3 class="name">${name}</h3>
  </div>`;
  pokemonEl.innerHTML = pokeInnerHTML;
	pokeContainer.appendChild(pokemonEl);
}

fetchPokemons();
