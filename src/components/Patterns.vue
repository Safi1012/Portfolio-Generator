<template>
  <div class="pattern-mask" :style="{ 'mask-image': patternImage, 'background-color': pattern.color }" />
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState } from 'vuex'

  interface PatternType {
    type: string;
    color: string;
  }

  @Component({
    computed: mapState([
      'pattern'
    ])
  })
  export default class Patterns extends Vue {
    public pattern!: PatternType;
    public patternImage = 'url(assets/patterns/hideout.svg)' // fallback image

    mounted() {
      this.fetchPatternImage(`assets/patterns/${this.pattern.type}`)
    }
    
    fetchPatternImage(url: string) {
      fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then(response => {
          if (response.status === 200) {
            this.patternImage = `url(assets/patterns/${this.pattern.type})`;
          }
        })
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
    z-index: 0;
  }
</style>
