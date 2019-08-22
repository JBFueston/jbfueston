<template>
  <div id="app" app style="height: 100%;">
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
@import './themes/master.scss';
</style>

<script src="./assets/presc.js"></script>
<script lang="ts">
export default {
  name: 'App',
  created() {
    AOS.init();
  }
}
</script>