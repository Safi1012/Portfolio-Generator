<template>
  <div class="home">
    <Header />
    <ProjectCard />
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import ProjectCard from '@/components/ProjectCard.vue';

  @Component({
    components: {
      Header,
      ProjectCard
    }
  })
  export default class Home extends Vue {}
</script>
