<template>
  <div class="dashboard">
    <h1 class="dashboard__title">{{this.portfolio}}</h1>

    <div class="dashboard__grid">
      <ProjectCard 
        v-for="(project, index) in projects" :key="index"
        :url="project.url"
        :image="project.image"
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
    image: string;
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
    padding-top: 2rem;
  }

  .dashboard__title {
    color: var(--portfolio-title-text-color);
    font-size: 2rem;
    margin-bottom: 4rem;
    z-index: 2;
  }

  .dashboard__grid {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 650px;
    z-index: 2;
  }

  @media (min-width: 992px) {
    .dashboard__title {
      font-size: 2.2rem;
    }

    .dashboard__grid {
      max-width: 750px;
    }
  }

  @media (min-width: 1400px) {
    .dashboard__title {
      font-size: 2.5rem;
    }
    
    .dashboard__grid {
      max-width: 850px;
    }
  }
</style>
