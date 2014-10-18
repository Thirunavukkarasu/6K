angular.module('sixkApp.factories', [])

.factory('runnerFactory', ['$filter', '$window',function($filter, $window) {
            var runners = [{name: 'Kumaravel',timing: []},
                           {name: 'Keshor',timing: []},
                           {name: 'Sathees',timing: []},
                           {name: 'Rekha',timing: []},
                           {name: 'Anjana',timing: []}];
          return {
            getRunnersList: function() {
              return runners;
            },
            pushRunner: function(runner){
              runners.push(runner);
            },
            spliceRunner: function(index){
              runners.splice(index,1);
            },
            filterRunnerTiming: function(runner){ 
                return $filter('filter')(runners, {name: runner});
            }
          }
        }
    ]);
