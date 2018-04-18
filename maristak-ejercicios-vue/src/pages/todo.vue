<template>
  <div class="todo">
    <h1>{{title}}</h1>
    <div class="contenido">
      <ToDoAdd @new="addNewToDo"/>
      <ToDoList :list="list" @deleteItem:change="deleteItem"/>
    </div>
  </div>
</template>

<script>
import ToDoList from '../components/todo-list.vue'
import ToDoAdd from '../components/todo-add.vue'

export default {
  name: 'ToDo',
  components: {
    ToDoList,
    ToDoAdd
  },
  data () {
    return {
      title: 'ToDo List',
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
      todo.key = this.list.length + 1
      this.list.push(todo)
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
