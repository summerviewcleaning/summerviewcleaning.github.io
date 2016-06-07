app.controller('navBarCtrl', function ($scope) {
	
	$scope.home = "Home";
	$scope.about = "About";
	$scope.contact = "Contact";
	$scope.logo = "files/images/logo.jpg";
	
}).controller('homeCtrl', function ($scope) {
	
	$scope.title = "Summer View | Window Cleaning";
	$scope.pageHeader = "Summer View";
	$scope.pageSubHeader = "Window Cleaning";
	$scope.loading = "Loading...";

}).controller('aboutCtrl', function ($scope) {
	
	$scope.title = "About";
	$scope.backButton = "Back to Safety";
	$scope.heading = "Heading";
	$scope.paragraph = "Paragraph";

}).controller('contactCtrl', function ($scope) {
	
	$scope.title = "Contact Us";
	$scope.loading = "Loading...";

}).controller('socialIcons', function ($scope) {
	
	
	
}).controller('footerCtrl', function ($scope, $sce) {
	
	$scope.copyRight = $sce.trustAsHtml("Copyright &copy; 2016");
	$scope.footerInfo = "Summer View Cleaning · 1234 N Main · 801-123-4567";
	
});