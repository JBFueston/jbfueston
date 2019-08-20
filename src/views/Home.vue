<template>
  <div class="home reuse">
    <navbar class="navbar" />
    <index name="JB Fueston"/>
  </div>
</template>

<style lang="scss" scoped>
@import '../themes/light.scss';
@import '../themes/master.scss';
</style>

<script>
// @ is an alias to /src
import index from '@/components/index.vue';
import navbar from '@/components/navbar.vue';
export default {
  name: 'home',
  components: {
    index,
    navbar
  }
}
</script>
