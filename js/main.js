function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add () {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

function clearDefault(a) {
    if (a.defaultValue==a.value) {
        a.value="";
    }
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos =get_todos();

    var html = '<ul class="fa-ul">';
    for(var i=0; i<todos.length; i++) {
        html += '<li><i class="fa fa-thumb-tack" aria-hidden="true"></i>' +" "+todos[i] + '<button class="remove" id="' + i + '"><i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></button> </li>'
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for(var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();