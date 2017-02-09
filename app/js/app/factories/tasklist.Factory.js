angular.module("tasklist").factory("taskListFactory", taskListFactory)

taskListFactory.$inject = ["Status"];

function taskListFactory(status) {

    var _taskListItens = [];

    return {
        Create: Create
    }

    function Create() {
        return {
            addItem: addItem,
            getAllItens: getAllItens,
            removeItem: removeItem,
        }
    }

    function addItem(item) {
        item.Id = Math.random();
        item.Status = status.Added;
        _taskListItens.push(item);
    }

    function getAllItens() {
        return _taskListItens.filter(function (item) {
            return item.Status === status.Added;
        });
    }

    function removeItem(item) {
        _taskListItens.filter(function (x) {
            return x.Id === item.Id;
        })[0].Status = status.Removed;
    }
}