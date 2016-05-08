
var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'homeController',
                templateUrl: 'views/home.html'
            });
            
    $routeProvider
  
    .when('/about-us',
            {
                controller: 'aboutusController',
                templateUrl: 'views/aboutus.html'
            });
        
        
        $routeProvider
        
        .when('/services',
                {
                    controller: 'servicesController',
                    templateUrl: 'views/services.html'
                });
            
            
            $routeProvider
            
            .when('/products',
                    {
                        controller: 'productsController',
                        templateUrl: 'views/products.html'
                    });
                
                
                $routeProvider
    .when('/contactus',
        {
            controller: 'contactusController',
            templateUrl: 'views/contactus.html'
        });
    
    $routeProvider
  
    
  
    $routeProvider.otherwise({ redirectTo: '/' });
});




