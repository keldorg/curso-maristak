<template>
  <li :key="item.key">{{item.name}}</li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    height: 30px;
    line-height: 30px;
  }
</style>
