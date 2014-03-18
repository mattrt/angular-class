
'use strict';

angular.module('justice-league', [])

  .controller('MainCtrl', function($scope, data){
    $scope.heroes = data.heroes;
  })

  .service('data', function(){
    this.heroes = [
      {
        name: 'Superman',
        image: 'img/superman.jpg',
        alterEgo: 'Clark Kent',
        abilities: [
          'Super Strength',
          'Flight',
          'X-Ray Vision',
          'Super Speed',
          'Super Hearing',
          'Heat Vision',
          'Super Breath',
        ]
      },
      {
        name: 'Batman',
        image: 'img/batman.jpg',
        alterEgo: 'Bruce Wayne',
        abilities: []
      },
      {
        name: 'The Flash',
        image: 'img/flash.jpg',
        alterEgo: 'Barry Allen',
        abilities: [ 'Super Speed' ]
      },
      {
        name: 'Wonder Woman',
        image: 'img/ww.jpg',
        alterEgo: 'Princess Diana',
        abilities: [ 'Super Strength', 'Flight' ]
      },
      {
        name: 'Aqua Man',
        image: 'img/aqua_man.jpg',
        alterEgo: 'Arthur Curry',
        abilities: [ 'Talk to fish' ]
      }
    ];
  });