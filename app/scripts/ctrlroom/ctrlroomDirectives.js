'use strict';

/**
 * @ngdoc function
 * @name arcidDirectives 
 * @description
 * # ctrlroomDirectives
 * Directives for the control room management
 **/
angular.module('ctrlroomDirectives', ['underscore', 'ctrlroomServices'])
// ARCID Single flight detail panel
.directive('ctrlroomButton', ctrlroomButton);

/* ctrlroomButton */
function ctrlroomButton() {
  return {
    restrict: 'E',
    templateUrl: 'views/ctrlroom/_button.html',
    controller: ctrlroomButtonController,
    controllerAs: 'vm',
    scope: {
      position: '='
    }
  };
}

ctrlroomButtonController.$inject = ['_', '$scope', '$q', 'ctrlroomPosition', '$timeout', '$mdDialog'];
function ctrlroomButtonController(_, $scope, $q, ctrlroomPosition, $timeout, $mdDialog) {
  var vm = this;
  vm.positionDisabled = true;
  vm.loading = true;

  ctrlroomPosition.refreshAll(); // This needs to be set somewhere else

  vm.loading = false;
  vm.position = ctrlroomPosition.get($scope.position);

  vm.positionClass = function(position) {
    if(position.disabled === true) {
      return '';
    } else {
      if(_.isEmpty(position.sectors)) {
        return 'md-primary md-hue-3';
      } else {
        return 'md-accent md-hue-2';
      }
    }
  }

  vm.showDialog = function(ev) {
    if(vm.position.disabled !== true) {
      $mdDialog.show({
        controller: ctrlroomDialogController,
        templateUrl: 'views/ctrlroom/_dialog.html',
        locals: {
          position: vm.position
        },
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    }
  }

  vm.positionDisabled = vm.position.disabled;

}

ctrlroomDialogController.$inject = ['_', '$scope', 'ctrlroomPosition', 'position'];
function ctrlroomDialogController(_, $scope, ctrlroomPosition, position) {
  var vm = this;
  $scope.position = position;
}