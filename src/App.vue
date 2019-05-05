<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex'

  @Component({
    computed: mapState([
      'theme',
    ]),
  })
  export default class App extends Vue {
    public theme!: string;
    
    mounted() {
      // refactor to own method w/ a switch button
      if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
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
