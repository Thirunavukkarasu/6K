angular.module('sixkApp.controllers', [])

.controller('RunnerController', function($scope, $interval, $window, runnerFactory) {
        var startTime = 0;
        var elapsedTime = 0;
    
        /* Retrive the list of runners from Factory */
        $scope.runners = runnerFactory.listRunners();

        /* Upon clicking startRace Button */
        $scope.startRace = function() {
             startTime = $window.Math.round((new Date().getTime()));          
            raceInprogress = $interval(function() {
                 elapsedTime = $window.Math.round((new Date().getTime()) - startTime);
                 var hours = Math.floor(elapsedTime / 36e5),
                 mins = Math.floor((elapsedTime % 36e5) / 6e4),
                 secs = Math.floor((elapsedTime % 6e4) / 1000),
                 timer = hours + ":"+ mins +":"+ secs;                  
                 $scope.timer = timer;
            }, 1000);
        }
        
        /* Upon clicking stopRace Button */
        $scope.stopRace = function() {
            $interval.cancel(raceInprogress);
        }
        
        /* Add the new Runner data to Factory */
        $scope.saveRunner = function(user){
            runnerFactory.pushRunner({name:user.name,timing:user.timing});
        }
        
        /* Remove the Runner data from Factory */
        $scope.removeRunner = function(index){
            runnerFactory.removeRunner(index);
        }       
       
        /* Add lap on tap */
        $scope.addLap = function(runner) {
            console.log(runner);
            var currentRunner = $filter('filter')(runners, {
                    name: runner
            });
            console.log(currentRunner);
        }
    });
