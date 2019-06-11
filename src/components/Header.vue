<template>
  <ul :style=" { 'top': currentScrollPosition } ">
    <li v-for="(social, index) in socialMedia" :key="index">
      <a class="header-link" :href="social['url']" target="_blank" rel="noopener nofollow" :aria-label="social['name']">
        <div class="icon-mask" :style="{ 'mask-image': getCSSImageURL(social['image']) }" />
      </a>
    </li>
  </ul>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { mapState, mapGetters } from 'vuex'

  interface SocialMedia {
    name: string;
    url: string;
    image: string;
  }

  @Component({
    computed: mapState([
      'socialMedia',
    ])
  })
  export default class Header extends Vue {
    public socialMedia!: [SocialMedia];
    private currentScrollPosition = '0px';

    getCSSImageURL(image: string) {
      return `url(assets/icons/social-media/${image})`;
    }

    onScroll() {    
      this.currentScrollPosition = (-1 * (window.pageYOffset || document.documentElement.scrollTop)) + 'px';
    }

    created() {
      window.addEventListener('scroll', this.onScroll);
    }

    destroyed() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
</script>


<style lang="scss" scoped>
  .header-link {
    display: inline-block;
    width: 1.7rem;
    height: 1.7rem;
  }

  ul {
    display: flex;
    position: fixed;
    justify-content: flex-end;
    width: 100vw;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: 1;
  }

  li {
    list-style: none;
    display: inline;
    margin: 2rem 1rem;
  }

  li:last-child {
    margin-right: 2.5rem;
  }

  div {
    display: inline-flex;
  }

  .svg-icon {
    stroke: var(--social-media-icon-color);
    fill: none;
  }

  .logo {
    stroke: none;
  }

  .icon-mask {
    background-color: var(--social-media-icon-color);
    width: 1.7rem;
    height: 1.7rem;
    mask-repeat: no-repeat;
    mask-position: center;
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
