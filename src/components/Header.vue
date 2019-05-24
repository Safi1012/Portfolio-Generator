<template>
  <ul>
    <li>
      <router-link to="/">
        <img src="@/assets/icons/showroom.svg" alt="showroom icon" />
      </router-link>
    </li>

    <div>
      <li v-for="(social, index) in socialMedia" :key="index">
        <a :href="social['url']" target="_blank" rel="noopener nofollow">
          <div class="icon-mask" :style="{ 'mask-image': getCSSImageURL(social['name']) }" />
        </a>
      </li>
    </div>
  </ul>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex'

  @Component({
    computed: mapState([
      'socialMedia',
    ]),
  })
  export default class Header extends Vue {
    public socialMedia!: string;

    isFileExtensionSVG(path: string) {
      return path.indexOf('.svg') === path.length - 4
    }

    getCSSImageURL(svgName: string) {
      return `url(assets/icons/social-media/${svgName.toLowerCase()}.svg`
    }
  }
</script>


<style lang="scss" scoped>
  ul {
    display: flex;
    position: fixed;
    justify-content: space-between;
    width: 100vw;
    background-color: var(--secondary-color);
    margin: 0;
    padding: 0;
    top: 0;
  }

  li {
    list-style: none;
    display: inline;
    margin: 1rem 0.5rem;
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

  img {
    width: 2rem;
    height: 2rem;
  }

  .icon-mask {
    background-color: var(--primary-color);
    width: 2rem;
    height: 2rem;
    mask-repeat: no-repeat;
    mask-position: center;
  }
</style>
