<template>
  <ul>
    <li v-for="(social, index) in socialMedia" :key="index">
      <a :href="social['url']" target="_blank" rel="noopener nofollow">
        <div class="icon-mask" :style="{ 'mask-image': getCSSImageURL(social['name']) }" />
      </a>
    </li>
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
    justify-content: flex-end;
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

  li:last-child {
    margin-right: 1.5rem;
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

  .icon-mask {
    background-color: var(--primary-color);
    width: 1.5rem;
    height: 1.5rem;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  @media (min-width: 768px) {
    li {
      margin: 1rem 0.65rem;
    }

    .icon-mask {
      width: 1.65rem;
      height: 1.65rem;
    }
  }

  @media (min-width: 768px) {
    li {
      margin: 1rem 0.65rem;
    }

    li:last-child {
      margin-right: 1.8rem;
    }

    .icon-mask {
      width: 1.65rem;
      height: 1.65rem;
    }
  }

  @media (min-width: 1200px) {
    li {
      margin: 1.2rem 0.8rem;
    }

    li:last-child {
      margin-right: 2rem;
    }
  }
</style>
