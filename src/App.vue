<template>
  <div id="app">
    <!-- <Particles /> -->
    <router-view />
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex';
  import Particles from '@/components/Particles.vue';

  @Component({
    components: {
      Particles
    },
    computed: mapState([
      'theme',
    ]),
  })
  export default class App extends Vue {
    public theme!: string;
    
    mounted() {
      document.body.classList.add(this.theme);
    }
  }
</script>


<style lang="scss">
  @import './styles/themes.css';

  * {
    font-family: var(--primary-font-family);
    font-weight: var(--primary-font-weight);
  }

  body {
    margin: 0;
    background-color: var(--secondary-color);
  }
</style>
