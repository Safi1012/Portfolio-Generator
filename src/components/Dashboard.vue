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
  .dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    margin: 1rem;
    margin-top: 70px;
  }

  h1 {
    color: var(--portfolio-title-text-color);
    font-size: 2rem;
    margin-bottom: 4rem;
    z-index: 2;
  }

  .grid {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 650px;
    z-index: 2;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 2.2rem;
    }

    .grid {
      max-width: 750px;
    }
  }

  @media (min-width: 1400px) {
    h1 {
      font-size: 2.5rem;
    }
    
    .grid {
      max-width: 850px;
    }
  }
</style>
