//Funciones para las animaciones

function openNav() {
    document.getElementById("nav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("nav").style.width = "0";
  }

// Funciones para el manejo de la API de Pokemon
/*
//Obtenemos el valor del input  denominado pokename
const searchBar = document.getElementById('pokename');
console.log("Hola mundo");
let pokeinput = searchBar.value.toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
const fetchPokemon = () =>{
  console.log(url);
fetch(url).then((res) => {
      //verificamos si la respuesta es correcta
      if(res.status !== 200){
          console.log(`Error: ${res.status}`);
          //cambiams la imaen de nuestra pokedex
          changeImage('./img/404.gif');
      }else{
          //si la respuesta es correcta
          console.log(`Correcto: ${res.status}`);
          console.log("Hola mundo");
          return res.json();
      }
  }).then((data) => {
      //Se crea una variable para guardar las imagenes
      let img = data.sprites.front_default;
      //Se cambia la imagen con nuestra funcion
      changeImage(img);
  })
}



// definimos una funcion para cambiar la imagen de nuestra pokedex
const changeImage = (url)=>{
  //Seleccionamos la imagen
  const img = document.getElementById('pokeimg');
  //Cambiamos la imagen
  img.src = url;
}


*/