angular.module('sixkApp.controllers', [])

.controller('RunnerController', function($scope, $interval, $window, runnerFactory) {
        var startTime = 0,
            elapsedTime = 0,
            hours = 0,
            mins = 0,
            secs = 0,
            timer = 0;
    
        /* Retrive the list of runners from Factory */
        $scope.runners = runnerFactory.getRunnersList();

        /* Upon clicking startRace Button */
        $scope.startRace = function() {
             startTime = $window.Math.round((new Date().getTime()));          
            raceInprogress = $interval(function() {
                 elapsedTime = $window.Math.round((new Date().getTime()) - startTime);
                 hours = Math.floor(elapsedTime / 36e5),
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
            runnerFactory.spliceRunner(index);
        }       
       
        /* Add lap on tap */
        $scope.addLap = function(runner) {
            var currentRunner = runnerFactory.filterRunnerTiming(runner);
            var t = currentRunner[0].timing;
            t.push(timer);
            console.log(t);
        }
    });
