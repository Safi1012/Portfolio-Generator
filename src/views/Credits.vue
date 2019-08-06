<template>
  <article class="credits">
    <section>
      <h1>Licenses</h1>
      <p>
        This site uses Open Source components and MIT images.
        I acknowledge and am grateful to these developers and designers for their contributions to the open source community.
      </p>

      <section>
        <h2>Hero Patterns</h2>
        <p>Steve Schoger</p>
        <a href="http://www.heropatterns.com/" target="_blank" rel="noopener nofollow">http://www.heropatterns.com/</a><br>
        <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener nofollow">
          Creative Commons Attribution 4.0 International License
        </a>
      </section>

      <section>
        <h2>Feather Icons</h2>

        <p>The MIT License (MIT)</p>
        <p>Copyright (c) 2013-2017 Cole Bemis</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </p>
      </section>
    </section>
  </article>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  export default class Credits extends Vue {}
</script>


<style lang="scss" scoped>
  .credits {
    max-width: 60ch;
    margin: 5rem 2rem;
    font-family: var(--project-card-font-family);
    color: var(--footer-text-color);
  }

  .credits > * > section {
    margin-top: 3em;
  }

  .credits > * a {
    color: var(--social-media-icon-color);
    text-decoration: none;
  }

  .credits > * p {
    text-align: justify;
    hyphens: auto;
    line-height: 1.5em;
  }

  .credits > * h1 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 0;
    line-height: 1.5em;
  }

  .credits > * h2 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.5em;
  }

  @media (min-width: 620px) {
    .credits {
      margin: 5rem auto;
    }
  }
</style>
