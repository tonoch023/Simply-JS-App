let pokemonRepository = (function () {
  let pokemonList = [];
  //Function to add pokemon to repository
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  //Function to return repository
  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll,
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

const $ul = document.querySelector('ul');

pokemonRepository.getAll().forEach((pokemon) => {
  let name = pokemon.name;
  let height = pokemon.height;

  let $li = document.createElement('li');
  $ul.appendChild($li);

  let $button = document.createElement('ul');
  $li.appendChild($button);
  $button.innerText = name;
  $button.classList.add('btn');
});
