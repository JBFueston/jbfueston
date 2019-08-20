<template>
  <div class="contentwrap">
    <h1 id="light">{{ name }}</h1>
    <p>
      This webpage is currently under contruction
    </p>
    <img alt="yeet" class="yeetpic" src="../assets/yeet.jpeg" >
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
