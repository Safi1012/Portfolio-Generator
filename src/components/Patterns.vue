<template>
  <div class="pattern-mask" :style="{ 'mask-image': getPattern() }" />
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState } from 'vuex'

  @Component({
    computed: mapState([
      'pattern'
    ]),
  })
  export default class Patterns extends Vue {
    public pattern!: string;

    getPattern() {
      return `url(assets/patterns/${this.pattern}.svg)`;
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
    z-index: 0;
    // set real background color -> body
  }
</style>
