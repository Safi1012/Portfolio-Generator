<template>
  <div class="dashboard">
    <h1>{{this.portfolio}}</h1>

    <div class="grid">
      <ProjectCard 
        v-for="(project, index) in projects" :key="index"
        :url="project.url"
        :iconPath="project.icon"
        :projectName="project.name"
        :backgroundColor="project.backgroundColor"
      />
    </div>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'
  import ProjectCard from '@/components/ProjectCard.vue';

  interface Project {
    name: string;
    url: string;
    icon: string;
    backgroundColor: string;
  }

  @Component({
    components: {
      ProjectCard
    },
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
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  .dashboard {
    margin: 1rem;
  }

  .grid {
    display: flex;
    justify-content: space-evenly; // flex-start
    flex-wrap: wrap;
  }
</style>
