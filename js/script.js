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
  },

  methods: {
    chooseStart: function (btnID, el) {  
      console.log(el);
      // console.log(btnID)    ;
      if(btnID == 'beforeBtn') {
        this.isBefore = true;
        this.btnName = 'Add before';
        // todoApp.todoList.unshift('fgnf');
      } 
      if(btnID == 'afterBtn') {
        this.isAfter = true;
        this.btnName = 'Add after';
        // todoApp.todoList.push('fgetjrtnnf');
      }   
    },

    cancelation: function () {
      this.isBefore = false;
      this.isAfter = false;
    },

    addTodo: function() {

    }
  }

 
});

