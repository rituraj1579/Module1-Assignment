(function () {
'use strict';

angular.module('Module1App', [])
.controller('Mod1Controller', Mod1Controller);

Mod1Controller.$inject = ['$scope', '$filter'];

function Mod1Controller($scope, $filter) {

  $scope.menuitems = "";

  $scope.DisplayMessage = function (menuitems) {
    var count = 0;
    //count = splitString();
    var stringToSplit = menuitems;
    var arrayOfMenuItems = stringToSplit.split(',');
    count = arrayOfMenuItems.length;

    if(stringToSplit == ""){
      $scope.userMessage = "Please enter data first";
    }
    else if (count > 0 && count <=3)
    {
      $scope.userMessage = "Enjoy!";
    }
    else {
        $scope.userMessage = "Too much!";
    }

    //$scope.message = "Count is : " + count + "menu : " + stringToSplit;
  };


}

})();
