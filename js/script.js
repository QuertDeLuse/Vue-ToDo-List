Vue.component('todo-item', {
  props: ['todo'],
  template: '<li class="list-item">'+
      '<span class="navbar__id li__item">{{ todo.key }}</span>'+
      '<span class="navbar__descr li__item">{{ todo }}</span>'+
    '</li>'
});

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    todoList: [],
    isBefore: false,
    isAfter: false,
    btnName: '',
    newTodo: ''
  },

  methods: {
    chooseStart: function (btnID) {  

      if(btnID == 'beforeBtn') {
        this.isBefore = true;
        this.isAfter = false;
        this.btnName = 'Add before'; 
      } 
      if(btnID == 'afterBtn') {
        this.isAfter = true;
        this.isBefore = false;
        this.btnName = 'Add after';
      }   
    },

   

    addTodo: function() {
      return this.todoList.push(this.newTodo);
    }
  }

 
});

