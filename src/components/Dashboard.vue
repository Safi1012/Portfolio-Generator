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
      'projects'
    ])
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
    margin: 3rem 1rem;
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
      grid-gap: 2.5rem 1.5rem;
      align-content: center;
      margin: 3rem auto;
      max-width: 270px;
    }

    .dashboard__title {
      grid-column-start: 1;
      grid-column-end: 13;
      margin-bottom: 0;
      font-size: 2rem;
    }

    .dashboard__grid {
      // position on the outer grid
      grid-column-start: 1;
      grid-column-end: 13;

      display: grid;
      grid-template-columns: repeat(2, 3fr);
      grid-auto-rows: minmax(1rem, auto);
      grid-gap: 2.5rem 1.5rem;
    }


    @media (min-width: 768px) {
      .dashboard {
        grid-template-columns: repeat(12, 1fr);
        max-width: 768px;
        grid-gap: 2.5rem 2rem;
      }

      .dashboard__title {
        grid-column-start: 4;
        grid-column-end: 10;
      }

      .dashboard__grid {
        grid-column-start: 4;
        grid-column-end: 10;
        grid-gap: 2.5rem 2rem;
        grid-template-columns: repeat(3, 2fr);
      }
    }


    @media (min-width: 990px) {
      .dashboard__title {
        grid-column-start: 3;
        grid-column-end: 11;
        font-size: 2.5rem;
      }

      .dashboard__grid {
        grid-column-start: 3;
        grid-column-end: 11;
        grid-template-columns: repeat(4, 2fr);
      }
    }


    @media (min-width: 1200px) {
      .dashboard {
        grid-gap: 3rem;
        max-width: 900px;
      }

      .dashboard__grid {
        grid-gap: 3rem;
      }
    }
  }
</style>
