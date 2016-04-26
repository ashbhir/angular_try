angular.module("Main",[])
  .controller("myCtrl",function($scope){
    $scope.data=[{name:"Bookmark1",category:"Tech"}, {name:"Bookmark2",category:"Science"}, {name:"Bookmark3",category:"Non-Tech"}];
    $scope.categories=["Tech","Science","Non-Tech"];
    $scope.currentCategory=null;
    function setCurrentCategory(category){
      $scope.currentCategory=category;
    }
    function isCurrentCategory(category){
      return $scope.currentCategory!==null && $scope.currentCategory===category;
    }
    $scope.setCurrentCategory=setCurrentCategory;
    $scope.isCurrentCategory=isCurrentCategory;
  });

