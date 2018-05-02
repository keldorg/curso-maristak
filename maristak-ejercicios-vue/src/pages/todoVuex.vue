<template>
  <div class="todo">
    <h1>{{title}}</h1>
    <div class="contenido">
      <ToDoAdd @new="addNewToDo"/>
      <ToDoList :list="$store.state.todos" @deleteItem:change="deleteItem"/>
    </div>
  </div>
</template>

<script>
import ToDoList from '../components/todo-list.vue'
import ToDoAdd from '../components/todo-add.vue'
import store from '../store'

export default {
  name: 'ToDo',
  store,
  components: {
    ToDoList,
    ToDoAdd
  },
  data () {
    return {
      title: 'ToDo List Vuex',
      list: [ {
        key: 1,
        name: 'Suspender a todos',
        state: 'done'
      }, {
        key: 2,
        name: 'Preparar exámenes',
        state: 'todo'
      } ]
    }
  },
  methods: {
    addNewToDo: function (todo) {
      this.$store.dispatch('addTodo', todo)
    },
    deleteItem (item) {
      console.log(item.key)
      console.log('Mensaje recibido de Abuelo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contenido {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
