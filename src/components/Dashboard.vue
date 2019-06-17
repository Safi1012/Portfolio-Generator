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
    margin: 70px 1rem;
    padding: 2rem 0;
  }

  .dashboard__title {
    color: var(--portfolio-title-text-color);
    font-size: 2rem;
    margin-bottom: 2rem;
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
      margin-bottom: 2.5rem;
    }

    .dashboard__grid {
      max-width: 750px;
    }
  }

  @media (min-width: 1400px) {
    .dashboard__title {
      font-size: 2.5rem;
      margin-bottom: 4rem;
    }
    
    .dashboard__grid {
      max-width: 850px;
    }
  }

  // progressively enhance user experience
  @supports(display: grid) {
    .dashboard {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: minmax(1rem, auto);
      column-gap: 1rem;
      row-gap: 1rem;
      align-content: center;
    }

    .dashboard__title {
      grid-column-start: 4;
      grid-column-end: 8;
    }

    .dashboard__grid {
      // position on the outer grid
      grid-column-start: 4;
      grid-column-end: 8;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(1rem, auto);
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }
</style>
