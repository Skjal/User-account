var user = localStorage.getItem('username');
var mail = localStorage.getItem('email');
var pwd = localStorage.getItem('password');
var cntry = localStorage.getItem('country');
var cty = localStorage.getItem('city');
var pos = localStorage.getItem('postal');
var avt = localStorage.getItem('avatar');

var profile = angular.module('userAcc', []);
profile.controller('autoComplete', function($scope){
  $scope.values = [
    {val: user, name: "Username"},
    {val: mail, name: "E-mail"},
    {val: pwd, name: "Password"},
    {val: cntry, name: "Country"},
    {val: cty, name: "City"},
    {val: pos, name: "Postal"},
  ];
});

var getUser = angular.module('userName', []);
getUser.controller('getName', function($scope) {
  $scope.yourName = user;
  $scope.yourAvatar = avt;
});

angular.bootstrap(document.getElementById("app2"),['userAcc']);
