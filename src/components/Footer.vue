<template>
  <div class="footer">
    <nav>
      <ul>
        <!-- TODO: only display if configured in setup.yml -->
        <li>Terms</li>
        <li>|</li>

        <!-- TODO: only display if configured in setup.yml -->
        <li>Privacy</li>
        <li>|</li>

        <li>Credits</li>
      </ul>
    </nav>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'
  import Terms from '@/views/Terms.vue';
  import Privacy from '@/views/Privacy.vue';

  @Component({
    components: {
      Terms,
      Privacy
    },
    computed: mapState([
      // TODO
    ])
  })
  export default class Footer extends Vue {}
</script>


<style lang="scss" scoped>
  // TODO
</style>
