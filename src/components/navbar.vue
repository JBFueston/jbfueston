<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <a class="navbar-brand" id="nhe" href="/">JB Fueston</a>
      <button right class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav navbar-right" >
          <a class="nav-item nav-link" id="npt" href="/about">About</a>
          <a class="nav-item nav-link" id="npt" href="/games">Games</a>
          <a class="nav-item nav-link" id="npt" href="mailto:jbfueston@gmail.com?Subject=Hello%20JB">Contact</a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../themes/master.scss';
@import '../themes/light.scss';
</style>
