angular.module('sixkApp.factories', [])

.factory('runnerFactory', ['$filter', '$window',function($filter, $window) {
            var runners = [{name: 'Kumaravel',timing: []},
                           {name: 'Keshor',timing: []},
                           {name: 'Sathees',timing: []},
                           {name: 'Rekha',timing: []},
                           {name: 'Anjana',timing: []}];
          return {
            listRunners: function() {
              return runners;
            },
            getLength: function(){
              return runners.length;
            },
            pushRunner: function(runner){
              runners.push(runner);
            },
            removeRunner: function(index){
              runners.splice(index,1);
            }
          }
        }
    ]);
