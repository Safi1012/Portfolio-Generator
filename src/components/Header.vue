<template>
  <ul class="header" :class="{ 'header--home': this.$route.path !== '/' }" :style=" { 'top': currentScrollPosition } ">
    <li class="header__list" v-if="this.$route.path !== '/'">
      <router-link to="/" class="header__link" aria-label="home">
        <div class="header__icon" :style="{ 'mask-image': 'url(assets/logo/showroom.svg)' }" />
      </router-link>
    </li>

    <li class="header__list" v-for="(social, index) in getSocialMediaData()" :key="index">
      <a class="header__link" :href="social['url']" target="_blank" rel="noopener nofollow" :aria-label="social['name']">
        <div class="header__icon" :style="{ 'mask-image': getSocialMediaImageURL(social['image']) }" />
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
      'socialMedia'
    ])
  })
  export default class Header extends Vue {
    public socialMedia!: [SocialMedia];
    private currentScrollPosition = '0px';

    getSocialMediaImageURL(image: string) {
      return `url(assets/images/social-media/${image})`;
    }

    getSocialMediaData() {
      return this.$route.path === '/' ? this.socialMedia : [];
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
  .header {
    display: flex;
    position: fixed;
    justify-content: flex-end;
    width: 100vw;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: 1;
  }

  .header__link {
    display: inline-block;
    width: 1.7rem;
    height: 1.7rem;
  }

  .header__list {
    list-style: none;
    display: inline;
    margin: 2rem 1rem;
  }

  .header__list:last-child {
    margin-right: 2.5rem;
  }

  .header--home {
    justify-content: flex-start;
  }

  .svg-icon {
    stroke: var(--social-media-icon-color);
    fill: none;
  }

  .logo {
    stroke: none;
  }

  .header__icon {
    background-color: var(--social-media-icon-color);
    width: 1.7rem;
    height: 1.7rem;
    mask-repeat: no-repeat;
    mask-position: center;
    display: inline-flex;
  }

  @media (min-width: 768px) {
    .header__list {
      margin: 1rem 0.65rem;
    }

    .header__list:last-child {
      margin-right: 1.8rem;
    }

    .header__icon {
      width: 1.65rem;
      height: 1.65rem;
    }
  }

  @media (min-width: 1200px) {
    .header__list {
      margin: 1.2rem 0.8rem;
    }

    .header__list:last-child {
      margin-right: 2rem;
    }
  }

  @media (min-width: 1440px) {
    .header__list {
      margin: 2rem 1.5rem;
    }

    .header__list:last-child {
      margin-right: 4rem;
    }

    .header__icon {
      width: 2rem;
      height: 2rem;
    }
  }
</style>
