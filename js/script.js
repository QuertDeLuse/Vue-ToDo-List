Vue.component('todo-item', {
  props: ['todo'],
  template: '<li class="list-item">'+
      '<span class="navbar__id li__item">{{ todo.id }}</span>'+
      '<span class="navbar__descr li__item">{{ todo.text }}</span>'+
    '</li>'
});

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    todoList: [],
    isBefore: false,
    isAfter: false,
    btnName: '',
    newTodo: {
      id: '',
      text: ''
    }
  },

  methods: {
    chooseStart: function (btnID) {  

      if(btnID == 'beforeBtn') {
        this.isAfter = false;
        this.isBefore = true;        
        this.btnName = 'Add before'; 
      } 
      if(btnID == 'afterBtn') {
        this.isBefore = false;
        this.isAfter = true;        
        this.btnName = 'Add after';
      }   
    },

   

    addTodo: function() {
      if (this.isBefore == true) {          
        this.todoList.unshift({ id: this.newTodo.id , text: this.newTodo.text});        
      }
      if (this.isAfter == true) {
        this.todoList.push({ id: this.newTodo.id , text: this.newTodo.text});
      }

      this.todoList.forEach((item, index) => {
        item.id = index + 1;
      });
      this.newTodo.text = '';      
   
      return this.todoList;       
    }
  }

 
});




