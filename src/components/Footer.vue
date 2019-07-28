<template>
  <nav class="footer">
    <ul class="footer__list">
      <li v-if="terms"><router-link to="/terms" class="footer__link">Terms</router-link></li>
      <li v-if="terms" class="footer__link--divider">|</li>

      <li v-if="privacy"><router-link to="/privacy" class="footer__link">Privacy</router-link></li>
      <li v-if="privacy" class="footer__link--divider">|</li>

      <li><router-link to="/credits" class="footer__link">Credits</router-link></li>
    </ul>
  </nav>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'

  interface Terms {
    name: string;
    website: string;
  }

  interface Privacy {
    name: string;
    address: string;
    contact: string;
  }

  @Component({
    computed: mapState([
      'terms',
      'privacy'
    ])
  })
  export default class Footer extends Vue {
    public terms!: Terms;
    public privacy!: Privacy;
  }
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
