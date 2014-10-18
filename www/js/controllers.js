angular.module('sixkApp.controllers', [])

.controller('RunnerController', function($ionicPopup,$scope, $interval, $window, RunnerService) {
        var elapsedTime = 0;
        var timer_enabled = false;
    
        /* Retrive the list of runners from Factory */
        $scope.runners = RunnerService.getRunnersList();

        /* Upon clicking startRace Button */
        $scope.startRace = function() {
            $scope.timer_enabled = true;
            RunnerService.setStartTime();
            raceInprogress = $interval(function() {         
                elapsedTime = $window.Math.round((new Date().getTime()) - RunnerService.getStartTime());
                $scope.elapsedTime = elapsedTime;
            }, 1000);
        }
        
        /* Upon clicking stopRace Button */
        $scope.stopRace = function() {
            $interval.cancel(raceInprogress);
        }
        
        /* Add the new Runner data to Factory */
        $scope.saveRunner = function(user){
            RunnerService.pushRunner({name:user.name,timing:user.timing});
            var alertPopup = $ionicPopup.alert({
              title: '<b>Success!</b>',
              template: 'Runner '+user.name+' got added successfully:)'
            });
        }
        
        /* Remove the Runner data from Factory */
        $scope.removeRunner = function(index){
            RunnerService.spliceRunner(index);
            var alertPopup = $ionicPopup.alert({
              title: '<b>Success!</b>',
              template: 'Runner got deleted successfully:('
            });            
        }       
       
        /* Add lap on tap */
        $scope.addLap = function(runner) {
            var currentRunner = RunnerService.filterRunnerTiming(runner);
            var t = currentRunner[0].timing;
            t.push(elapsedTime);
        }
        
        $scope.renderLaptime = function(runner, index, curTiming) {
            if (index == 0) {
                return runner.timing[index];
            } else {
                return parseInt(runner.timing[index]) - parseInt(runner.timing[index - 1]);
            }
        }
    });
