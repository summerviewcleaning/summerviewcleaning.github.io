app.controller('navBarCtrl', function ($scope) {
	
	$scope.home = "Home";
	$scope.about = "About";
	$scope.freequote = "Free Quote";
	
}).controller('homeCtrl', function ($scope) {
	
	$scope.title = "Summer View | Window Cleaning";

	$scope.businessName = "Business Name or Tagline";
	$scope.businessParagraph = "This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!";
	$scope.quoteButton = "Call to Action!";
	$scope.businessTagline = "This is a well that is a great spot for a business tagline or phone number for easy access!";
	$scope.headingOne = "Heading 1";
	$scope.headingOneParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.";
	$scope.headingOneMoreInfo = "More Info";
	$scope.headingTwo = "Heading 2";
	$scope.headingTwoParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.";
	$scope.headingTwoMoreInfo = "More Info";
	$scope.headingThree = "Heading 3";
	$scope.headingThreeParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.";
	$scope.headingThreeMoreInfo = "More Info";

}).controller('aboutCtrl', function ($scope) {
	
	$scope.title = "About";
	$scope.backButton = "Back to Safety";
	$scope.heading = "Heading";
	$scope.paragraph = "Paragraph";

}).controller('freequoteCtrl', function ($scope) {
	
	$scope.title = "Get A Free Quote";
	$scope.loading = "Loading...";

}).controller('socialIcons', function ($scope) {
	
	
	
}).controller('footerCtrl', function ($scope, $sce) {
	
	$scope.copyRight = $sce.trustAsHtml("Copyright &copy; 2016");
	$scope.footerInfo = "Summer View Cleaning · 1234 N Main · 801-123-4567";
	
});