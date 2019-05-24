var app = new Vue({
  el: '.app',
  data: {
    message: 'Hello Vue!',
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    datas: [
      { "text": 'Learn JavaScript', "sens":true},
      { "text": 'Learn Vue', "sens":false },
      { "text": 'Build something awesome', "sens":true }
    ]
  }
});

var vm = new Vue({
	el:"#app5",
	data: { "a": 1 }
});

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});



new Vue({ el: '#components-demo' })

vm.b = 'hi';

app4.datas.push({ "text": 'New item', "sens":true });



console.log(vm);
