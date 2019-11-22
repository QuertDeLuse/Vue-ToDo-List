Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    productList: [
      { id: 0, text: 'q' },
      { id: 1, text: 'w' },
      { id: 2, text: 'e' }
    ]
  }
});

