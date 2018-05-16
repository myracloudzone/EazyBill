var HomeCtrl = GMApp.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.onlineCourses = [
        {name : "Whatsappinar on Love and Relationship", color : "#bc8f12"},
        {name : "Whatsappinar on Power of Subconscious Mind", color : "#000"},
        {name : "Whatsappinar on Mindful Parenting", color : "#00ad91"},
    ];                  
}]);
