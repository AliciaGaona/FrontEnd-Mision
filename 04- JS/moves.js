const fetchPokemonMoves = () => {
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
          for (let i = 0; i <= data.moves.length ; i++) {
            const pokemonMoves1 = document.getElementById("pokemonMoves1");
            const pokemonElMoves1 = document.createElement('div'); 
            pokemonElMoves1.classList.add('Abilities');                   
            const pokeInnerHTMLMoves1 = `${data.moves[i].move.name} `;
            pokemonElMoves1.innerHTML = pokeInnerHTMLMoves1;
            pokemonMoves1.appendChild(pokemonElMoves1);
            }             
           
    });
    const button = document.getElementById('fetchPokemonMoves');
    button.disabled = true;
  }

  const fetchPokemonStats = () => {
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
          for (let i = 0; i <= data.stats.length ; i++) {
            const PokemonNameStats = document.getElementById("PokemonNameStats");
            const pokemonELNameStats = document.createElement('div'); 
            pokemonELNameStats.classList.add('Abilities'); 
            const pokeInnerHTMLNameStats = ` <div class="info">
            <label>Name: ${data.stats[i].stat.name}</label><br>
            <small >Base stat: <span>${data.stats[i].base_stat}</span></small>
          </div>
 `;
            pokemonELNameStats.innerHTML = pokeInnerHTMLNameStats;
            PokemonNameStats.appendChild(pokemonELNameStats);
            }             
           
    });
    const button = document.getElementById('fetchPokemonMoves');
    button.disabled = true;
  }

  //fetchPokemonMoves();