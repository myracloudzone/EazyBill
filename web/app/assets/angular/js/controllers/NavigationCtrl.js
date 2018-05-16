var NavigationCtrl = GMApp.controller('NavigationCtrl', ['$scope', '$rootScope', 'ipCookie', '$state', '$mdDialog', function($scope, $rootScope, ipCookie, $state, $mdDialog){
    $scope.toggleNavbar = function() {
      	if($("body").hasClass("sidenav-toggled")) {
			ipCookie('appSideBar', true, { expires: 2 });
        	// $('.userImage').show();
      	} else {
			ipCookie('appSideBar', false, { expires: 2 });
        	// $('.userImage').hide();
     	}
		$("body").toggleClass("sidenav-toggled");
		$('.userImage').show();
		if($state.current.name.indexOf('home') >= 0) {
			$state.go($state.current.name, $state.params, { reload: true });
		}
	}

	$scope.handleMouseEnter = function() {
		$scope.isOriginallyCollapsed = $("body").hasClass("sidenav-toggled");
		if($scope.isOriginallyCollapsed == true) {
			var winWidth = window.innerWidth;
			if(winWidth > 992) {
				$("body").removeClass("sidenav-toggled");
			}
		}
	}

	$scope.handleMouseLeave = function() {
		if($scope.isOriginallyCollapsed == true) {
			var winWidth = window.innerWidth;
			if(winWidth > 992) {
				$("body").addClass("sidenav-toggled");
			}
		}
	}
	
	$scope.changePassword = function(ev) {
		$(".navbar-toggler").trigger( "click" );
		var dialog = $mdDialog.show({
			controller : function($scope, $mdDialog, $filter, notificationService, GlobalMethodService, GlobalVariableService) {
				
			},
			templateUrl: '/app/assets/angular/views/passwordChange.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			locals: {
			},
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
			})
			.then(function(answer) {
				// $('.navbar-toggler').removeClass('collapsed');
			}, function() {
				// $('.navbar-toggler').removeClass('collapsed');
			}
		);
		$rootScope.dialogList.push(dialog);
	};

    $scope.showUserImage = function() {
      	if($("body").hasClass("sidenav-toggled")) {
        	return true;
      	} else {
        	return true;
      	}
    }

	$('.settingBar').addClass('show');

    $scope.scrollToTop = function() {
		$('#listTable').animate({
    		scrollTop: $('html body').offset().top - 200
      	}, 500);
		$('html, body').animate({
        	scrollTop: 0
      	}, 500);
    }
}])
