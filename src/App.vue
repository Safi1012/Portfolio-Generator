<template>
  <div id="app">
    <router-view />
    <Background />
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex';
  import Background from '@/components/Background.vue';

  @Component({
    components: {
      Background
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
