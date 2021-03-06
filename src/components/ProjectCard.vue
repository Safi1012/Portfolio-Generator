<template>
  <a class="project-card" :href="url" target="_blank" rel="noopener nofollow">
    <img class="project-card__logo"
         :src="fetchedImage"
         :alt="`${projectName} logo`"
         :style="{ 'background-color': computedBackgroundColor }"
    />
    <span class="project-card__name">{{this.projectName}}</span>
  </a>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'
  import { validateColor } from '../utils/validator';

  @Component({
    props: {
      url: String,
      image: String,
      projectName: String,
      backgroundColor: String
    }
  })
  export default class ProjectCard extends Vue {
    public fetchedImage = 'assets/images/fallback.svg'

    get computedBackgroundColor() {
      return this.$props.backgroundColor ? validateColor(this.$props.backgroundColor, '#FFF') : '#FFF';
    }

    mounted() {
      this.fetchProjectImage(`assets/images/projects/${this.$props.image}`)
    }

    fetchProjectImage(url = '') {
      fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then(response => {
          if (response.status === 200) {
            this.fetchedImage = `assets/images/projects/${this.$props.image}`;
          }
        })
    }
  }
</script>


<style lang="scss" scoped>
  .project-card {
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
    text-decoration: none;
  }

  .project-card__name {
    text-align: center;
    margin-top: 0.5rem;
    font-family: var(--project-card-font-family);
    font-weight: var(--project-card-font-weight);
    color: var(--project-card-text-color);
  }

  .project-card__logo {
    display: inline-flex;
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
    box-shadow: 0 3px 6px var(--project-card-shadow-color);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .project-card__logo:hover {
    box-shadow: 0 14px 28px var(--project-card-shadow-color), 0 10px 10px var(--project-card-shadow-color);
  }

  @media (min-width: 620px) {
    .project-card {
      width: 8.5rem;
    }
  }

  @media (min-width: 992px) {
    .project-card {
      width: 9.5rem;
    }

    .project-card__logo {
      width: 6.5rem;
      height: 6.5rem;
    }
  }

  @media (min-width: 1600px) {
    .project-card {
      width: 10rem;
    }

    .project-card__logo {
      width: 7rem;
      height: 7rem;
    }
  }

  // progressively enhance user experience
  @supports(display: grid) {
    .project-card {
      width: auto;
      margin-bottom: 0;
    }

    .project-card__logo {
      width: 100%;
      height: auto;
    }
  }
</style>
