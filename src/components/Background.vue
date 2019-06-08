<template>
  <div class="pattern-mask" :style="{ 'mask-image': getBackgroundPattern() }" />
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})
  export default class Background extends Vue {

    getBackgroundPattern() {
      return `url(assets/patterns/jigsaw.svg)`;
    }
  }
</script>


<style lang="scss" scoped>
  .pattern-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary-color-light);
    // set real background color -> body
  }
</style>
