<template>
  <ul>
    <li>
      <router-link to="/">
        <svg-icon class="logo" name="showroom" :original="true" />
      </router-link>
    </li>

    <div>
      <li v-for="(social, index) in socialMedia" :key="index">
        <a :href="social['url']" target="_blank" rel="noopener nofollow">
          <svg-icon :name="social['icon']" />
        </a>
      </li>
    </div>
  </ul>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex'
  import './icons';

  @Component({
    computed: mapState([
      'socialMedia',
    ]),
  })
  export default class Header extends Vue {
    public socialMedia!: string;
  }
</script>


<style lang="scss" scoped>
  ul {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    display: inline;
    margin: 1rem;
  }

  div {
    display: inline-flex;
  }

  .svg-icon {
    stroke: var(--primary-color);
    fill: none;
  }

  .logo {
    stroke: none;
  }
</style>
