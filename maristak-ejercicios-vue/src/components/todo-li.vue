<template>
  <div>
<li :key="item.key" v-bind:class="item.state">{{item.name}}</li>
<button @click="emitDelete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['item'],
  methods: {
    emitDelete () {
      this.$emit('deleteItem:change', this.item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    height: 30px;
    line-height: 30px;
    display: inline-block;
  }
  .done {
  	text-decoration:line-through;
  	display: inline-block;
  }
</style>
