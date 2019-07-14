<template>
  <nav class="footer">
    <ul class="footer__list">
      <!-- TODO: only display if configured in setup.yml -->
      <li><router-link to="/terms" class="footer__link">Terms</router-link></li>
      <li class="footer__link--divider">|</li>

      <!-- TODO: only display if configured in setup.yml -->
      <li><router-link to="/privacy" class="footer__link">Privacy</router-link></li>
      <li class="footer__link--divider">|</li>

      <li><router-link to="/credits" class="footer__link">Credits</router-link></li>
    </ul>
  </nav>
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
  .footer__list {
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem;
    max-width: 18.75rem;
    margin: auto;
    margin-bottom: 2rem;
  }

  .footer__list > li {
    display: inline-block;
  }

  .footer__link {
    text-decoration: none;
    color: var(--footer-text-color);
  }

  .footer__link:hover {
    border-bottom: 1px solid var(--footer-text-color);
    padding-bottom: 3px;
  }

  .footer__link--divider {
    color: var(--footer-text-color);
    opacity: 0.3;
  }
</style>
