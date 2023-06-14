async function getPikachu(){
    let pokemon = document.getElementById("pokemons")
    let pikachu = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36",{method:"GET"}) 
    let json = await pikachu.json()
    // console.log(json)
    for (i=0;i<json.results.length;i++){
        // console.log(json.results[i])
        let pokemonSingle = document.createElement("div")
        pokemon.append(pokemonSingle)
        let pokemonName = document.createElement("p")
        pokemonName.innerHTML = json.results[i].name
        pokemonSingle.append(pokemonName)
        let pokemonGambarUrl = await getDetailPokemon(json.results[i].url)
        let pokemonGambar = document.createElement("img")
        pokemonGambar.src = pokemonGambarUrl
        pokemonSingle.append(pokemonGambar)

        console.log(await getType(json.results[i].url))
        backgroundColor(await getType(json.results[i].url),pokemonSingle)
    }
    // let name = document.createElement("p")
    // name.innerHTML = json.name
    // pokemon.append(name)
    // let gambar = document.createElement("img")
    // gambar.src = json.sprites.front_default
    // pokemon.append(gambar)
}
async function getDetailPokemon(url){
    let pokemon = await fetch(url,{method:"GET"})
    let json = await pokemon.json()
    let gambar = json.sprites.front_default
    return gambar;
}
async function getType(url){
    let pokemon = await fetch(url,{method:"GET"})
    let json = await pokemon.json()
    let type = json.types[0].type.name
    return type
}
function backgroundColor(type,pokemon){
    switch(type){
        case "grass":
            pokemon.style.backgroundColor = "#8DD694"
            pokemon.style.border = "2px solid #5DAD65"
            break;
        case "water":
            pokemon.style.backgroundColor = "#8dc6e6"
            pokemon.style.border = "2px solid #6f9eca"
            break;
        case "fire":
            pokemon.style.backgroundColor = "#e69d8d"
            pokemon.style.border = "2px solid #c67d6d"
            break;
        case "bug":
            pokemon.style.backgroundColor = "#bddd7a"
            pokemon.style.border = "2px solid #a2c170"
            break;
        case "normal":
            pokemon.style.backgroundColor = "#b1b1b1"
            pokemon.style.border = "2px solid #959595"
            break;
        case "flying":
            pokemon.style.backgroundColor = "#c9adec"
            pokemon.style.border = "2px solid #a485cc"
            break;
        case "rock":
            pokemon.style.backgroundColor = "#b99d72"
            pokemon.style.border = "2px solid #957d59"
            break;
        case "ground":
            pokemon.style.backgroundColor = "#efbe85"
            pokemon.style.border = "2px solid #d0a068"
            break;
        case "psychic":
            pokemon.style.backgroundColor = "#d053bc"
            pokemon.style.border = "2px solid #a44094"
            break;
        case "ghost":
            pokemon.style.backgroundColor = "#835e94"
            pokemon.style.border = "2px solid #6b4c79"
            break;
        case "dark":
            pokemon.style.backgroundColor = "#686868"
            pokemon.style.border = "2px solid #434343"
            break;
        case "steel":
            pokemon.style.backgroundColor = "#598fa3"
            pokemon.style.border = "2px solid #517c8b"
            break;
        case "poison":
            pokemon.style.backgroundColor = "#a55db1"
            pokemon.style.border = "2px solid #8a4a95"
            break;
        case "electric":
            pokemon.style.backgroundColor = "#e7c859"
            pokemon.style.border = "2px solid #d0b34a"
            break;
        case "fairy":
            pokemon.style.backgroundColor = "#eea1e2"
            pokemon.style.border = "2px solid #c77fbc"
            break;
        case "fighting":
            pokemon.style.backgroundColor = "#e07f60"
            pokemon.style.border = "2px solid #b1664f"
            break;
        case "dragon":
            pokemon.style.backgroundColor = "#8859d5"
            pokemon.style.border = "2px solid #724cae"
            break;
        case "ice":
            pokemon.style.backgroundColor = "#71d8de"
            pokemon.style.border = "2px solid #65c1c6"
            break;
        
    }
}
let getPokemon = document.getElementsByTagName("button")[0]
getPokemon.addEventListener("click",getPikachu)