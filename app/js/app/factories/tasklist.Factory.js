angular.module("tasklist").factory("taskListFactory", taskListFactory)

taskListFactory.$inject = ["Status"];

function taskListFactory(status) {

    var taskListItens = [];

    return {
        addItem: addItem,
        getAllItens: getAllItens,
        removeItem: removeItem,
    }

    function addItem(item) {
        item.Id = Math.random();
        item.Status = status.Added;
        taskListItens.push(item);
    }

    function getAllItens() {
        return taskListItens.filter(function (item) {
            return item.Status === status.Added;
        });
    }

    function removeItem(item) {
        taskListItens.filter(function (x) {
            return x.Id === item.Id;
        })[0].Status = status.Removed;
    }
}