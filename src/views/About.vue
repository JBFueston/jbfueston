<template>
  <div class="home reuse">
    <navbar class="navbar" />
    <stripe />
    <about />
    <foot />
  </div>
</template>

<style lang="scss" scoped>
@import '../themes/light.scss';
@import '../themes/master.scss';
</style>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue';
import about from '@/components/about.vue';
import stripe from '@/components/stripe.vue';
import foot from '@/components/foot.vue';
export default {
  name: 'About',
  components: {
    navbar,
    about,
    stripe,
    foot
  }
}
</script>
