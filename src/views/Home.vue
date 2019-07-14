<template>
  <div class="home">
    <Header />
    <Dashboard />
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import Dashboard from '@/components/Dashboard.vue';

  @Component({
    components: {
      Header,
      Dashboard
    }
  })
  export default class Home extends Vue {}
</script>


<style lang="scss" scoped>
  @media (min-width: 576px) {
    .home {
      margin-bottom: 10rem;
    }
  }
</style>
