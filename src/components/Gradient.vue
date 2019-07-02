<template>
  <div class="gradient" />
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState } from 'vuex'

  interface GradientOptions {
    firstColor: string;
    secondColor: string;
    direction: string;
  }

  @Component({
    computed: mapState([
      'gradient'
    ])
  })
  export default class Gradient extends Vue {
    public gradient!: GradientOptions;

    trimBackslash(colorValue: string) {
      return colorValue.replace('\\', '');
    }

    getFallbackBackground() {
      return this.gradient.firstColor;
    }

    getWebKitLinearGradient() {
      const { direction, firstColor, secondColor } = this.gradient
      return `-webkit-linear-gradient(to ${direction}, ${this.trimBackslash(firstColor)}, ${this.trimBackslash(secondColor)})`;
    }

    getLinearGradient() {
      const { direction, firstColor, secondColor } = this.gradient
      return `linear-gradient(to ${direction}, ${this.trimBackslash(firstColor)}, ${this.trimBackslash(secondColor)})`;
    }
  }
</script>


<style lang="scss" scoped>
  .gradient {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: var(--gradient-start-color);  /* fallback for old browsers */
    background: -webkit-linear-gradient(var(--gradient-direction), var(--gradient-start-color), var(--gradient-end-color));  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(var(--gradient-direction), var(--gradient-start-color), var(--gradient-end-color));
  }
</style>
