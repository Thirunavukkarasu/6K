angular.module('sixkApp.filters', [])
.filter('TimerConversion',[function(){
    var hours = 0, mins =0, secs = 0, timer = 0;
    return function(elapsedTime){
         hours = Math.floor(elapsedTime / 36e5),
         mins = Math.floor((elapsedTime % 36e5) / 6e4),
         secs = Math.floor((elapsedTime % 6e4) / 1000),
         timer = hours + ":"+ mins +":"+ secs;
         return timer;
    };
}]);