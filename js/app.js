//dejamos a la espera los elementos del formulario
const searchBox = document.getElementById("pokename");
const searchBox2 = document.getElementById("pokename2");
const searchButton = document.getElementById("search-button");
const alerta = document.getElementById("alerta");

//funcion para limpiar el formulario
function cleanForm() {
      searchBox.value = "";
      searchBox2.value = "";
    }



//funcion a la espera de que el usuario presione el boton
searchButton.addEventListener("click", function () {
      findPokemon();
      //limpiamos el formulario
});
  
async function findPokemon() {
      //definimoa url vacio
      let url = "";
      //obtenemos el valor del input verificando que no este vacio
      if (searchBox.value != "") {
            //obtenemos el valor del input
            let pokemonName = searchBox.value.toLowerCase();
            url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      } else if (searchBox2.value != "") {
            //obtenemos el valor del input
            let pokemonName = searchBox2.value.toLowerCase();
            url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      } else {
            let contenido = "";
            contenido += `<div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Error!</strong> No se ingreso ningun pokemon.
          </div>`;
            alerta.innerHTML = contenido;
      }
      const data = await fetch(url);
      //verificamos el status de la peticion
      if (data.status == 200) {
        await data.json().then((response) => {
        displayPokemon(response); 
        cleanForm(); // limpiamos el formulario
      });
      } else if (data.status == 404) {
        let contenido = "";
        contenido += `<div class="alert alert-danger alert-dismissible">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Error!</strong> No se encontro el pokemon.
      </div>`;
        alerta.innerHTML = contenido;
        cleanForm(); // limpiamos el formulario
    }};

// funcion para mostrar el pokemon en la pokedex
function displayPokemon(pokemon) {
      const pokemonImg = document.getElementById("pokemon-img");
      const pokemonName = document.getElementById("pokemon-name");
      const pokemonId = document.getElementById("pokemon-id");
      const pokemonXP = document.getElementById("pokemon-xp");
      const pokemonHeight = document.getElementById("pokemon-height");
      const pokemonWeight = document.getElementById("pokemon-weight");
      const pokemonAbilities = document.getElementById("pokemon-abilities");
      const pokemonstats = document.getElementById("pokemon-stats");
      const pokemonTypes = document.getElementById("pokemon-type");


      //hacemos una conversion del peso y la altura
      let weight = pokemon.weight*0.1 ;
      let height = pokemon.height*0.1;
      //modificamos el DOM
      pokemonImg.src = pokemon.sprites.other.dream_world.front_default;
      pokemonName.innerHTML = correctData(pokemon.name);
      pokemonId.innerHTML = "#" + pokemon.id;
      pokemonXP.innerHTML = pokemon.base_experience;
      pokemonHeight.innerHTML = height.toFixed(2) + " m";
      pokemonWeight.innerHTML = weight.toFixed(2) + " kg";

       /* habilidades */
       let abilities = "";
       for (var i in pokemon.abilities) {
         // entering all abilities
         abilities +=
           "<button type='button tag' class='list-group-item list-group-item-action '>"+
             correctData(pokemon.abilities[i].ability.name)+"</button>"
           
       }
       // creamos el html para mostrar el pokemon
       pokemonAbilities.innerHTML= ""; // clean abilities
       pokemonAbilities.innerHTML = abilities; // add abilities
      

      let types = "";
      for (var i in pokemon.types) {
        // entering all types
        types += `<div class="categoria ${pokemon.types[i].type.name}">
                    <img src="img/iconos/${pokemon.types[i].type.name}.svg" alt="${pokemon.types[i].type.name}" class="type-icon">
                    <br>
                    <span class="title">${correctData(pokemon.types[i].type.name)}</span> 
                  </div>`
      }
      // clean types
      pokemonTypes.innerHTML = "";
      pokemonTypes.innerHTML = types;
      

      //definimos un arreglo con las estadisticas
      //creamos un ciclo for para mostrar los stats del pokemon
      let stats = "";
      for (var i in pokemon.stats) {
          //agrgamos los labes y div de porcentajes
          stats += `<span class="titulo">${correctData(pokemon.stats[i].stat.name)}</span>
          <div class="progress caja">
            <div class="progress-bar barra" role="progressbar" style="width: ${pokemon.stats[i].base_stat}%" aria-valuenow="${pokemon.stats[i].base_stat}" aria-valuemin="0" aria-valuemax="100">${pokemon.stats[i].base_stat}%</div>
          </div>`;
     
      }
      // creamos el html para mostrar el pokemon
      pokemonstats.innerHTML= ""; // clean stats
      pokemonstats.innerHTML = stats; // add stats


      //funcion para corregir los datos
      function correctData(string) {
        // optimize string
        if (/[-]/.test(string)) {
          return correctData(string.replace(/-/g, "&nbsp"));
        } else {
          return string
            .toLowerCase()
            .split("&nbsp")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        }
      }
      /* end operation  */





    //Testeo
          /*
          console.log(pokemon.sprites.other.dream_world.front_default);
          console.log(pokemon.name);
          console.log("ID: "+pokemon.id);
          console.log(pokemon.types[0].type.name);
          console.log("Experiencia"+pokemon.base_experience);//experiencia base
          console.log("Altura"+pokemon.height);//altura
          console.log("Peso"+pokemon.weight);//peso
          */
        

    }
  
//definimos una funcion que redirija a el error 302 sitio en construccion
function coming() {
  window.location.href = "comingsoon.html";
}