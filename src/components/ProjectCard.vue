<template>
  <div class="project-card">

    <a :href="url" target="_blank" rel="noopener nofollow" :style="{ 'background-color': computedBackgroundColor }">
      <img :src="iconPath" :alt="`${projectName} icon`" />
    </a>
    <p>{{this.projectName}}</p>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'

  @Component({
    props: {
      url: String,
      iconPath: String,
      projectName: String,
      backgroundColor: String
    },
    computed: mapState([
      'projects'
    ]),
  })
  export default class ProjectCard extends Vue {
    get computedBackgroundColor() {
      return this.$props.backgroundColor ? this.$props.backgroundColor.replace('\\', '') : this.$props.backgroundColor;
    }
  }
</script>


<style lang="scss" scoped>
  .project-card {
    width: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;    
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

  p {
    text-align: center;
    margin-top: 0.5rem;
    font-weight: var(--secondary-font-weight);
    color: var(--text-color-dark);
  }

  a {
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

    img, a {
      width: 6.5rem;
      height: 6.5rem;
    }
  }

  @media (min-width: 1600px) {
    .project-card {
      width: 10rem;
    }

    img, a {
      width: 7rem;
      height: 7rem;
    }
  }
</style>
