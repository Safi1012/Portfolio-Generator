<template>
  <div>
    <section v-for="(project, index) in projects" :key="index">
      <img :src="project['icon']" :alt="`${project['name']} icon`" />
      <h1>{{project['name']}}</h1>
    </section>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'

  @Component({
    computed: mapState([
      'projects',
    ]),
  })
  export default class ProjectCard extends Vue {
    public projects!: string;

    mounted() {
      console.log('ProjectCard Mount: ', this.projects);
    }
  }
</script>


<style lang="scss" scoped>
  section {
    display: inline-block;
    background-color: lightgreen;
    margin: 4rem;
  }

  img {
    background-color: lightblue;
    width: 4rem;
    height: 4rem;
  }

  h1 {
    font-size: 1rem;
  }
</style>
