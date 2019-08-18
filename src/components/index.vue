<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../themes/master.scss';
@import '../themes/light.scss';
</style>
