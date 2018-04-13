<template>
  <div class="todo-add">
    <input type="text" v-model="todo" />
    <button @click="emitNew">Añadir</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoAdd',
  props: ['list'],
  data: function () {
    return {
      todo: null
    }
  },
  methods: {
    emitNew: function () {
      if (this.todo) {
        this.$emit('new', { name: this.todo })
        this.todo = null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-add {
    width: 500px;
  }
  ul {
    list-style: none;
    font-size: 24px;
   }
  li {
    height: 30px;
    line-height: 30px;
  }
</style>
