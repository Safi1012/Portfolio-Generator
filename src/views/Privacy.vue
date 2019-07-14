<template>
  <div class="privacy">
    <h1>I'm the privacy page</h1>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { mapState } from 'vuex'

  @Component({
    computed: mapState([
      // TODO
    ])
  })
  export default class Privacy extends Vue {}
</script>
