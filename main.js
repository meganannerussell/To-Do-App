
var newToDo = document.querySelector('#new-to-do')
var newToDoType = document.querySelector('#to-do-type')
//alert(newToDoType.options[newToDoType.selectedIndex].value)

/*newToDo.addEventListener('input', function (e) {
})*/  // --- on an event, triggers a callback function   
newToDo.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        console.log(newToDo, newToDoType)
        makeItem(newToDo, newToDoType);
        //figure out need for var below
        //var newToDoType = document.querySelector('#to-do-type')
    }
})





/*
newToDoType.addEventListener('input', function(e){
    if('input')
})
*/

/*var html = document.querySelector('html')
html.addEventListener('click', function (e) {
    console.log('html clicked')
    console.log(e)
})
*/

var button = document.querySelector('button')
button.addEventListener('click', function (e) {
    makeItem(newToDo, newToDoType);



});

var createListItem = function (toDoValue, listID) {
    var newListItem = document.createElement("li");
    var newContent = document.createTextNode(toDoValue); //why text node instead of textContent
    //console.log(newContent)
    newListItem.appendChild(newContent);
    var list = document.querySelector(listID);
    list.appendChild(newListItem);
    clearField(newToDo);

};

var makeItem = function (toDoItem, toDoType) {
    var newToDoValue = toDoItem.value
    var newToDoTypeValue = toDoType.options[toDoType.selectedIndex].value


    if (newToDoValue !== "") {
        // 1. need to assign to a list
        // 2. write if else for value options

        if (newToDoTypeValue === 'chores-item') {
            // to do
            createListItem(newToDoValue, '#chores-list');



        }

        else if (newToDoTypeValue === 'work-item') {

            createListItem(newToDoValue, '#work-list');

        }

        else if (newToDoTypeValue === 'admin-item') {

            createListItem(newToDoValue, '#admin-list');

        }
    }
    else {
        alert('you have not added an item')
    }

}



var clearField = function (field) {
    field.value = ''
    console.log('clear field')
    console.log(field);
}

