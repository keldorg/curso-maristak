<template>
  <div class="todo-list">
    <ul>
      <ToDoItem v-for="item in list" :item="item" :key="item.key" @deleteItem:change="deleteItem"/>
    </ul>
  </div>
</template>

<script>
import ToDoItem from './todo-li.vue'
export default {
  name: 'ToDoList',
  components: {
    ToDoItem
  },
  props: ['list'],
  created () {
    console.log(this.list)
  },
  methods: {
    deleteItem (item) {
      console.log('Mensaje recibido de Padre')
      this.$emit('deleteItem:change', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-list {
    width: 500px;
  }
  ul {
    padding: 0;
    list-style: none;
    font-size: 24px;
   }
  li {
    height: 30px;
    line-height: 30px;
  }
</style>
