'use strict';

angular.module('app.directive', [])
.directive('file', function() {
    return {
        scope: {
            file: '='
        },
        link: function(scope, el, attrs) {
            el.bind('change', function(event) {
                var files = event.target.files;
                var file = files[0];
                scope.file = file ? file.name : undefined;
                scope.$apply();
            });
        }
    };
})
.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var elem = angular.element( document.querySelector('#bg-text'));

            if (this.pageYOffset <= 15) {
                elem.css('opacity', '1')
            } 
            else if(this.pageYOffset > 15 && this.pageYOffset <= 17 ) {
                elem.css('opacity', '0.95');
            }
            else if(this.pageYOffset > 17 && this.pageYOffset <= 19 ) {
                elem.css('opacity', '0.90');
            }
            else if(this.pageYOffset > 19 && this.pageYOffset <= 24 ) {
                elem.css('opacity', '0.85');
            }
            else if(this.pageYOffset > 24 && this.pageYOffset <= 29 ) {
                elem.css('opacity', '0.80');
            }
            else if(this.pageYOffset > 29 && this.pageYOffset <= 37 ) {
                elem.css('opacity', '0.75');
            }
            else if(this.pageYOffset > 37 && this.pageYOffset <= 45 ) {
                elem.css('opacity', '0.70');
            }
            else if(this.pageYOffset > 45 && this.pageYOffset <= 55 ) {
                elem.css('opacity', '0.65');
            }
            else if(this.pageYOffset > 55 && this.pageYOffset <= 67 ) {
                elem.css('opacity', '0.60');
            }
            else if(this.pageYOffset > 67 && this.pageYOffset <= 79 ) {
                elem.css('opacity', '0.55');
            }
            else if(this.pageYOffset > 79 && this.pageYOffset <= 91 ) {
                elem.css('opacity', '0.50');
            }
            else if(this.pageYOffset > 91 && this.pageYOffset <= 105 ) {
                elem.css('opacity', '0.45');
            }
            else if(this.pageYOffset > 105 && this.pageYOffset <= 119 ) {
                elem.css('opacity', '0.40');
            }
            else if(this.pageYOffset > 119 && this.pageYOffset <= 139 ) {
                elem.css('opacity', '0.20');
            }
            else {
                elem.css('opacity', '0')
            }
            
            scope.$apply();
        });
    };
});
