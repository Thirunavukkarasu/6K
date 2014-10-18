angular.module('sixkApp.services', [])

.service('RunnerService', ['$filter', '$window',function($filter, $window) {
            var startTime = 0,
                services = {},
                runners = [{name: 'Kumaravel',timing: []},
                           {name: 'Keshor',timing: []},
                           {name: 'Sathees',timing: []},
                           {name: 'Rekha',timing: []},
                           {name: 'Anjana',timing: []}];
    
            services.getRunnersList = function() {
              return runners;
            };
    
            services.pushRunner = function(runner){
              runners.push(runner);
            };
    
            services.spliceRunner = function(index){
              runners.splice(index,1);
            };
    
            services.filterRunnerTiming = function(runner){ 
                return $filter('filter')(runners, {name: runner});
            };
    
            services.setStartTime = function(){
                 startTime = $window.Math.round((new Date().getTime()));
            };
    
            services.getStartTime = function(){
                return startTime;
            };
            
            return services;
        }
    ]);
