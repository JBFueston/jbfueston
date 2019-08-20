<template>
  <div class="home reuse">
    <navbar class="navbar" />
    <stripe />
    <meme />
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
import meme from '@/components/meme.vue';
import stripe from '@/components/stripe.vue';
import foot from '@/components/foot.vue';
export default {
  name: 'Memes',
  components: {
    navbar,
    meme,
    stripe,
    foot
  }
}
</script>
