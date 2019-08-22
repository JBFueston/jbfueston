<template>
  <div class="contentwrap noy">
    <h1 class="ctitle floating" id="center">{{ name }}</h1>
    <h4 class="cdesc floating" id="center">
      {{ dqoute }}
    </h4><br><br><br>
    <h4 class="cdesc" id="center">
      Random Qoute: <br><br>"<span id="qotd" v-html="qq">{{ qq }}</span>"
    </h4>

    <!--
    <div class="lc ref" id="center">
      <a class="fab fa-spinner fa-spin si fa-2x"></a><br>
      <p id="aaa"> LOADING CONTENT... </p>
    </div>
    -->
  </div>
</template>

<script>
import * as presc from '../assets/presc.js';

/* eslint-disable */

export default {
  name: 'index',
  props: ['name', 'dqoute', 'qq'],
    methods: {
    newq() {
      this.qq = presc.qwet()
    }
  },
  created() {
    this.newq()
  },
}
$('head, body, html').css('overlflow', 'hidden');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../themes/master.scss';
@import '../themes/light.scss';
$limit: true;
</style>
