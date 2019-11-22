Vue.component('todo-item', {
  props: ['todo'],
  template: '<li class="list-item">'+
      '<span class="navbar__id li__item">{{todo.id}}</span>'+
      '<span class="navbar__descr li__item">{{ todo.text }}</span>'+
    '</li>'
});

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    todoList: [
      { id: 0, text: 'sthnrt' },
      { id: 1, text: 'xrtfjh' },
      { id: 2, text: 'ertjhrt' }
    ]
  },

  methods: {
    addTodoItem: function (obj) {      
      if(obj == 1) {
        todoApp.todoList.unshift({id: -1, text: 'fgnf'});
      } 
      if(obj == 'w') {
        todoApp.todoList.push({id: 5, text: 'fgetjrtnnf'});
      }   
    }
  }
});

