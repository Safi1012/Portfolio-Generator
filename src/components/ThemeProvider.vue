<template>
  <h1>ThemeProvider {{this.theme}} and {{this.computedProperty}}</h1>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex'

  @Component({
    computed: mapState([
      'theme',
    ]),
  })
  export default class ThemeProvider extends Vue {
    public theme!: string;

    get computedProperty() {
      return 'I\'m computed ' + this.normalMethod()
    }

    normalMethod() {
      return 'method'
    }
    
    mounted() {
      console.log('Mounted')
      console.log(this.theme)
    }
  }
</script>


<style scoped lang="scss">
  h1 {
    color: blue;
  }
</style>
