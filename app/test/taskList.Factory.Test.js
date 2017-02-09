describe("taskList.Factory test - ", function () {
    
    var taskListFactory;

    beforeEach(module('tasklist'));

    beforeEach(inject(function (_taskListFactory_) {
        taskListFactory = _taskListFactory_.Create();
    }));

    it('Should add a new task and return it from the inside of list', function () {
        var item = {
            Description: "Junior",
            Status: 1
        };
        taskListFactory.addItem(item);
        var result = taskListFactory.getAllItens();

        expect(result[0]).toEqual(item);
    });

    it('Should remove an item from list', function () {
        var itemNotRemove = {
            Description: "notRemoveMe",
            Status: 1
        }

        var itemToRemove = {
            Description: "removeMe",
            Status: 1
        }

        taskListFactory.addItem(itemNotRemove);
        taskListFactory.addItem(itemNotRemove);
        taskListFactory.addItem(itemNotRemove);
        taskListFactory.addItem(itemToRemove);

        var itens = taskListFactory.getAllItens();

        taskListFactory.removeItem(itens[3])

        var itemThatILookFor = taskListFactory.getAllItens().filter(function (x) {
            return x.Description === "removeMe";
        });

        expect(taskListFactory.getAllItens().length).toEqual(3);
        expect(itemThatILookFor.length).toEqual(0);
    });
});