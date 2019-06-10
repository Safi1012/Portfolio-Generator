<template>
  <div class="pattern-mask" :style="{ 'mask-image': fetchedImage }" />
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState } from 'vuex'

  @Component({
    computed: mapState([
      'patternImage'
    ])
  })
  export default class Patterns extends Vue {
    public patternImage!: string;
    public fetchedImage = 'url(assets/patterns/hideout.svg)' // fallback image

    mounted() {
      this.fetchPatternImage(`assets/patterns/${this.patternImage}`)
    }
    
    fetchPatternImage(url = '') {
      fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then(response => {
          if (response.status === 200) {
            this.fetchedImage = `url(assets/patterns/${this.patternImage})`;
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
    background-color: var(--pattern-color);
  }
</style>
