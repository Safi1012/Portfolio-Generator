<template>
  <article class="terms">
    <section>
      <h1>Website Terms and Conditions of Use</h1>

      <section>
        <h2>1. Terms</h2>
        <p>By accessing this Website, accessible from <a :href="this.terms.website" target="_blank" rel="noopener nofollow">{{this.terms.website}}</a>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law. These Terms of Service has been created with the help of the Terms of Service Generator and the Privacy Policy Template.</p>
      </section>

      <section>
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on {{this.terms.name}}'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>modify or copy the materials</li>
          <li>use the materials for any commercial purpose or for any public display;</li>
          <li>attempt to reverse engineer any software contained on {{this.terms.name}}'s Website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>This will let {{this.terms.name}} to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>
      </section>

      <section>
        <h2>3. Disclaimer</h2>
        <p>All the materials on {{this.terms.name}}’s Website are provided "as is". {{this.terms.name}} makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, {{this.terms.name}} does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
      </section>

      <section>
        <h2>4. Limitations</h2>
        <p>{{this.terms.name}} or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on {{this.terms.name}}’s Website, even if {{this.terms.name}} or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
      </section>

      <section>
        <h2>5. Revisions and Errata</h2>
        <p>The materials appearing on {{this.terms.name}}’s Website may include technical, typographical, or photographic errors. {{this.terms.name}} will not promise that any of the materials in this Website are accurate, complete, or current. {{this.terms.name}} may change the materials contained on its Website at any time without notice. {{this.terms.name}} does not make any commitment to update the materials.</p>
      </section>

      <section>
        <h2>6. Links</h2>
        <p>{{this.terms.name}} has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by {{this.terms.name}} of the site. The use of any linked website is at the user’s own risk.</p>
      </section>

      <section>
        <h2>7. Site Terms of Use Modifications</h2>
        <p>{{this.terms.name}} may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
      </section>

      <section>
        <h2>8. Your Privacy</h2>
        <p>Please read our Privacy Policy.</p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>Any claim related to {{this.terms.name}}'s Website shall be governed by the laws of us without regards to its conflict of law provisions.</p>
      </section>

      <p>These Terms and Conditions have been created at World's Free Terms Of Service Generator: <a href="https://www.termsofservicegenerator.net" target="_blank" rel="noopener nofollow">https://www.termsofservicegenerator.net</a></p>
    </section>
  </article>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { mapState } from 'vuex'

  interface TermsType {
    name: string;
    website: string;
  }

  @Component({
    computed: mapState([
      'terms'
    ])
  })
  export default class Terms extends Vue {
    public terms!: TermsType;
  }
</script>


<style lang="scss" scoped>
  .terms {
    max-width: 60ch;
    margin: 5rem 2rem;
    font-family: var(--project-card-font-family);
    color: var(--footer-text-color);
  }

  .terms > * > section {
    margin-bottom: 2em;
  }

  .terms > * a {
    color: var(--social-media-icon-color);
    text-decoration: none;
  }

  .terms > * p {
    text-align: justify;
    hyphens: auto;
    line-height: 1.5em;
  }

  .terms > * h1 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 2em;
    line-height: 1.5em;
  }

  .terms > * h2 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.5em;
  }

  @media (min-width: 620px) {
    .terms {
      margin: 5rem auto;
    }
  }
</style>
