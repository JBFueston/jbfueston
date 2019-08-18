<template>
  <div class="home reuse">
    <index name="JB Fueston"/>
    <h3 id="secondary">Yeet</h3>
  </div>
</template>

<style lang="scss" scoped>
@import '../themes/light.scss';
@import '../themes/master.scss';
</style>

<script>
// @ is an alias to /src
import index from '@/components/index.vue'

export default {
  name: 'home',
  components: {
    index
  }
}
</script>
