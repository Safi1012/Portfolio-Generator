<template>
  <div id="app">
    <router-view />
    <Patterns v-if="backgroundType === 'pattern'" />
    <Gradient v-else />
    <Footer />
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex';
  import Footer from '@/components/Footer.vue';
  import Patterns from '@/components/Patterns.vue';
  import Gradient from '@/components/Gradient.vue';

  @Component({
    components: {
      Patterns,
      Gradient,
      Footer
    },
    computed: mapState([
      'theme',
      'backgroundType'
    ])
  })
  export default class App extends Vue {
    public theme!: string;
    public backgroundType!: string;

    mounted() {
      document.body.classList.add(this.theme);
    }
  }
</script>


<style lang="scss">
  @import './styles/themes.css';

  * {
    font-family: var(--portfolio-title-font-family);
    font-weight: var(--portfolio-title-font-weight);
  }

  body {
    margin: 0;
    background-color: var(--background-color);
  }
</style>
