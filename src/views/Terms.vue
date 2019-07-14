<template>
  <div class="terms">
    <h1>I'm the terms page</h1>
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
  export default class Terms extends Vue {}
</script>
