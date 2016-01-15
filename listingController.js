angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.inputs = [];

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      
      $scope.listings.push($scope.inputs);
      $scope.inputs = [];
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(input) {

      for(i=0;i<$scope.listings.length;i++){
        if($scope.listings[i].code == input){
          $scope.detailedInfo = $scope.listings[i];
        }
      }
      
    };
  }
]);