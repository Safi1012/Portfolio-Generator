<template>
  <div v-if="isFileExtensionSVG(fetchedImage)" class="patterns" :style="{ 'mask-image': fetchedImage }" />
  <div v-else class="patterns" :style="{ 'background': fetchedImage }" />
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
    public fetchedImage = '';

    mounted() {
      this.fetchPatternImage(`assets/images/patterns/${this.patternImage}`)
    }

    isFileExtensionSVG(path: string) {
      return path.includes('.svg')
    }
   
    fetchPatternImage(url = '') {
      fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then(response => {
          if (response.status === 200) {
            this.fetchedImage = `url(assets/images/patterns/${this.patternImage})`;
          } else {
            this.fetchedImage = `url(assets/images/patterns/hideout.svg)`;
          }
        })
        .catch(() => this.fetchedImage = `url(assets/images/patterns/hideout.svg)`);
    }
  }
</script>


<style lang="scss" scoped>
  .patterns {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: var(--pattern-color);
  }
</style>
