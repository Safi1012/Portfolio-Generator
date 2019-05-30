<template>
  <div class="particles" id="particles-js"></div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import "particles.js";
  import particles from '../config/particles'

  @Component({})
  export default class Particles extends Vue {
    mounted() {
      this.initParticles();
    }

    initParticles() {
      (window as any).particlesJS("particles-js", particles );
    }
  }
</script>


<style lang="scss" scoped>
  .particles {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
</style>
