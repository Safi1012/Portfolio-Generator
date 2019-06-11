<template>
  <div class="project-card">

    <a class="project-logo" :href="url" target="_blank" rel="noopener nofollow" :style="{ 'background-color': computedBackgroundColor }">
      <img :src="fetchedImage" :alt="`${projectName} logo`" />
    </a>
    <a class="project-name" :href="url" target="_blank" rel="noopener nofollow">{{this.projectName}}</a>
  </div>
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
    public image!: string;
    public fetchedImage = 'assets/icons/fallback.svg'

    get computedBackgroundColor() {
      return this.$props.backgroundColor ? validateColor(this.$props.backgroundColor, '#FFF') : '#FFF';
    }

    mounted() {
      this.fetchProjectImage(`assets/icons/projects/${this.$props.image}`)
    }
    
    fetchProjectImage(url = '') {
      fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then(response => {
          if (response.status === 200) {
            this.fetchedImage = `assets/icons/projects/${this.$props.image}`;
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
    margin-bottom: 3.5rem;
  }

  .project-name {
    text-decoration: none;
    text-align: center;
    margin-top: 0.5rem;
    font-family: var(--project-name-font-family);
    font-weight: var(--project-name-font-weight);
    color: var(--project-name-text-color);
  }

  img {
    display: inline-flex;
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  img:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
  }

  h1 {
    font-size: 1rem;
  }

  .project-logo {
    text-decoration: none;
    border-radius: 1rem;
    width: 6rem;
    height: 6rem;
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

    img, .project-logo {
      width: 6.5rem;
      height: 6.5rem;
    }
  }

  @media (min-width: 1600px) {
    .project-card {
      width: 10rem;
    }

    img, .project-logo {
      width: 7rem;
      height: 7rem;
    }
  }
</style>
