<template>
  <div class="home reuse">
    <navbar class="navbar" />
    <stripe />
    <index name="JB Fueston" dqoute="Mechanical and Electrical Engineer" />
    <foot />
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
import stripe from '@/components/stripe.vue';
import foot from '@/components/foot.vue';

export default {
  name: 'home',
  components: {
    index,
    navbar,
    stripe,
    foot,
  }
}
</script>
