<template>
  <div>
    <h1>Hello Dashboard11</h1>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'

  interface Project {
    name: string;
    url: string;
    icon: string;
    backgroundColor: string;
  }

  @Component({
    computed: mapState([
      'portfolio',
      'projects',
    ]),
  })
  export default class Dashboard extends Vue {
    public portfolio!: string;
    public projects!: Project[];

    mounted() {
      console.log(this.portfolio);
      console.log(this.projects);
    }
  }
</script>


<style lang="scss" scoped>
  h1 {
    color: var(--primary-color);
  }
</style>
