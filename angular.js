angular.module("myApp", []);

angular
	.module("myApp")
	.controller("myController", ['$scope', function($scope) {
   // $scope.days=[];

		$scope.green=false;
		$scope.red=true;
		

		$scope.hover = function () {
			if ($scope.green==true) {
				$scope.green=false;
			}
			else {
				$scope.green=true
			}
			if ($scope.red==true) {
				$scope.red=false;
			}
			else {
				$scope.red=true
			}
		}
		$scope.bookshelf = ['Book One', 'Book Two', 'Book Three'];

		$scope.bookSubmission = function (extraBook) {
			$scope.bookshelf.push(extraBook);
			$scope.extraBook = ''
		}

// 		$scope.days = [
// 	{"Day": 'Monday'},
// 	{"Day": 'Tuesday'},
// 	{"Day": 'Wednesday'},
// 	{"Day": 'Thursday'},
// 	{"Day": 'Friday'},
// 	{"Day": 'Saturday'},
// 	{"Day": 'Sunday'}
// ];
	}])

