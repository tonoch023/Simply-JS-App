let pokemonRepository = (function () {
  let pokemonList = [];
  //Function to add pokemon to repository
  function add(pokemon) {
    //Must be an 'object' type
    if (typeof pokemon !== 'object') {
      return 'Not a valid input';
    } else {
      pokemonList.push(pokemon);
    }
  }
  //Function to return repository
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    const $ul = document.querySelector('ul');
    let $li = document.createElement('li');
    let $button = document.createElement('ul');
    $ul.appendChild($li);
    $li.appendChild($button);
    $button.innerText = pokemon.name;
    $button.classList.add('btn');
    $button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(
      `Name: ${pokemon.name}  Height:  ${pokemon.height}  Ability:${pokemon.abilities}  Type: ${pokemon.types}`
    );
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();
// cSpell: disable
const ivysaur = {
  name: 'Ivysaur',
  height: 1,
  abilities: ['Chlorophyll'],
  types: ['Grass'],
};

const charizard = {
  name: 'Charizard',
  height: 1.7,
  abilities: ['Blaze'],
  types: ['Fire'],
};

const Charmander = {
  name: 'Charmander',
  height: 2.0,
  abilities: ['Blaze', 'Solar-power'],
  types: ['Fire'],
};

const Squirtle = {
  name: 'Squirtle',
  height: 0.5,
  abilities: ['Rain-dish', 'Torrent'],
  types: ['Monster', 'Water  1'],
};

pokemonRepository.add(ivysaur);
pokemonRepository.add(charizard);
pokemonRepository.add(Charmander);
pokemonRepository.add(Squirtle);

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
