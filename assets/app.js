

var app = angular.module('app',[])

 app.controller('PostCtrl', function($scope,$http){
   $scope.addPost = function() {
     if($scope.postBody){
       $http.post('/api/posts',{
         username:'battlerUshinomiya',
         body: $scope.postBody
       }).success(function(post) {
         $scope.posts.unshift(post) {
        $scope.postBody = null
        })
     }
   }

   $http.get('/api/post').success(function(posts){
     $scope.posts = postsa
   })
 })
