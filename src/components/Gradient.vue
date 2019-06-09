<template>
  <div class="gradient" :style="{ 'background': [getFallbackBackground(), getWebKitLinearGradient(), getLinearGradient()] }" />
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
      'theme',
      'gradient'
    ]),
  })
  export default class Gradient extends Vue {
    public theme!: string;
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
  }
</style>
