describe("taskList.Controller test - ", function () {

    beforeEach(module('tasklist'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('Should add a new task and return it from the inside of list', function () {

        var $scope = {}
        var task = {Description: "", Status: 1};
        var taskListFactoryMock = getTaskListFactoryMock();
        
        var controller = $controller('taskListController', {$scope: $scope, taskListFactory: taskListFactoryMock});

        $scope.addTask(task);

        expect($scope.getAllTasks().length).toEqual(1);

    });

    it('Should remove an task from task list', function(){
        var $scope = {}
        var task = {Description: "", Status: 1};
        var taskListFactoryMock = getTaskListFactoryMock();
        
        spyOn(taskListFactoryMock, "removeItem");

        var controller = $controller('taskListController', {$scope: $scope, taskListFactory: taskListFactoryMock});

        $scope.removeTask();

        expect(taskListFactoryMock.removeItem).toHaveBeenCalled();

    });


    function getTaskListFactoryMock(){
        return {
            addItem: function(item) {},
            getAllItens: function() {return [{}]},
            removeItem: function(item) {}
        }
    }
});