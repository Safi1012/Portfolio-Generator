<template>
  <div class="gradient" />
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})
  export default class Gradient extends Vue {}
</script>


<style lang="scss" scoped>
  .gradient {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: #f857a6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
