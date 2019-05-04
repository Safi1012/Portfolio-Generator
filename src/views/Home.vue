<template>
  <div class="home">
    <Header />
    <Dashboard />
    <ProjectCard />
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import ProjectCard from '@/components/ProjectCard.vue';
  import Dashboard from '@/components/Dashboard.vue';

  @Component({
    components: {
      Header,
      Dashboard,
      ProjectCard
    }
  })
  export default class Home extends Vue {}
</script>
