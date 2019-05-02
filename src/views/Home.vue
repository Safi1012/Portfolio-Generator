<template>
  <div class="home">
    <Header />
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';
  import Header from '@/components/Header.vue';

@Component({
  components: {
    HelloWorld,
    Header
  }
})
  export default class Home extends Vue {}
</script>
