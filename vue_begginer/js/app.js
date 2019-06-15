Vue.component('todo-footer', {
    template : '<p>This is global child component</p>'
});

var con = {
    template : '<p>This is another local child component</p>'
};

var app = new Vue({
    el : '#app',
    data : {
        message : 'This is a parent component'
    },
    components : {
        'todo-list' : con
    }
})