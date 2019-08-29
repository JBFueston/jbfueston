<template>
  <div class="contentwrap justify prl">
    <h1 class="dtitle" data-aos="fade-right" data-aos-duration="900" data-aos-delay="300" id>
      <div vhleft />I'm JB Fueston,
      <br />And I Like To Make Stuff.
    </h1>
    <div class="prost" type="stripe-default" advert></div>
    <br />
    <br />
    <h5 class="dcont">
      I'm based in Edgewater, Maryland, and I specialize in mechanical and electrical engineering and
      I am currently expanding into web design, as you can see by this website.
      <br />
      <br />Some of my memorable projects include
      leading the design and build of three unique ROVs and then driving them in competition at the US Naval Academy,
      making extremely powerful etching lasers portable, building my own computer, and many others in various fields.
      <br />
      <br />
      <span id="ccd">I love everything about engineering</span>, and I plan to further grow my skills, eventually expanding into aerospace
      engineering.
      <br />
      <br />This website is a joint project between Ryan Wans and I to create a modern web platform for my personal portfolio
      and so I can learn web design techniques.
    </h5>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "about",
  props: []
};
let a = document.createElement("script");
a.setAttribute(
  "src",
  "https://ec2-100-24-22-69.compute-1.amazonaws.com/runtime/prostListener.js"
);
document.head.appendChild(a);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../themes/master.scss";
@import "../themes/light.scss";
</style>
