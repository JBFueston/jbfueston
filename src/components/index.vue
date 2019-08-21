<template>
  <div class="contentwrap noy">
    <h1 class="ctitle floating" id="center">{{ name }}</h1>
    <h4 class="cdesc floating" id="center">
      {{ dqoute }}
    </h4>

    <div class="lc ref" id="center">
      <a class="fab fa-spinner fa-spin si fa-2x"></a><br>
      <p id="aaa"> LOADING CONTENT... </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['name', 'dqoute']
}
$('head, body, html').css('overlflow', 'hidden');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../themes/master.scss';
@import '../themes/light.scss';
$limit: true;
</style>
