(function () {

    angular.module("tasklist").controller("taskListController", taskListController)

    taskListController.$inject = ["$scope", "taskListFactory"];

    function taskListController($scope, taskListFactory) {

        $scope.addTask = function(task){
            taskListFactory.addItem(angular.copy(task));
        }

        $scope.getAllTasks = function(){
            return taskListFactory.getAllItens();
        }

        $scope.removeTask = function(task){
            taskListFactory.removeItem(task);
        }
    }
})()