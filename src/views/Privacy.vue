<template>
  <article class="privacy">
    <section>
      <h1>Privacy Policy</h1>

      <p>Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.</p>
      <p>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.</p>
      <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.</p>
      <p>Our privacy policy is structured as follows:</p>

      <ol type="I">
        <li><p>Information about us as controllers of your data</p></li>
        <li><p>The rights of users and data subjects</p></li>
        <li><p>Information about the data processing</p></li>
      </ol>

      <section>
        <h2>I. Information about us as controllers of your data</h2>
        <p>The party responsible for this website (the "controller") for purposes of data protection law is:</p>
        <p class="privacy__address">
          {{this.privacy.name}}<br>
          {{this.privacy.address}}<br>

          <a v-if="privacy.mail" :href="mailto">{{this.privacy.mail}}</a><br>
          <a v-if="privacy.phone" :href="tel">{{this.privacy.phone}}</a><br>
        </p>
      </section>

      <section>
        <h2>II. The rights of users and data subjects</h2>
        <p>With regard to the data processing to be described in more detail below, users and data subjects have the right</p>
        <ul>
          <li><p>to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);</p></li>
        </ul>
        <ul>
          <li><p>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</p></li>
        </ul>
        <ul>
          <li><p>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;</p></li>
        </ul>
        <ul>
          <li><p>to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);</p></li>
        </ul>
        <ul>
          <li><p>to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</p></li>
        </ul>
        <p>
          In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections,
          deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation
          does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a
          right to information about these recipients.
        </p>
        <p>
          Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing
          of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose
          of direct advertising is permissible.
        </p>
      </section>

      <section>
        <h2>III. Information about the data processing</h2>
        <p>
          Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases
          to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise
          stipulated below.
        </p>
      </section>

      <p>This Privacy has been generated with the Privacy Generator from <a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html#englische-version-ihrer-muster-datenschutzerklaerung" target="_blank" rel="noopener nofollow">Anwaltskanzlei Weiß &amp; Partner</a></p>
    </section>
  </article>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { mapState } from 'vuex'

  interface PrivacyType {
    name: string;
    address: string;
    mail: string;
    phone: string;
  }

  @Component({
    computed: mapState([
      'privacy'
    ])
  })
  export default class Privacy extends Vue {
    public privacy!: PrivacyType;

    get mailto() {
      return `mailto:${this.privacy.mail}`
    }

    get tel() {
      return `tel:${this.privacy.phone}`
    }
  }
</script>


<style lang="scss" scoped>
  .privacy {
    max-width: 60ch;
    margin: 5rem 2rem;
    font-family: var(--project-card-font-family); // TODO: create variable
    color: var(--footer-text-color);
  }

  .privacy > * > section {
    margin-bottom: 2em;
  }

  .privacy > * a {
    color: var(--social-media-icon-color);
    text-decoration: none;
  }

  .privacy > * p {
    text-align: justify;
    hyphens: auto;
    line-height: 1.5em;
  }

  .privacy > * h1 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 2em;
    line-height: 1.5em;
  }

  .privacy > * h1:first-child {
    margin-bottom: 0;
  }

  .privacy > * h2 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.5em;
  }

  .privacy__address {
    text-align: center !important;
  }

  @media (min-width: 620px) {
    .privacy {
      margin: 5rem auto;
    }
  }
</style>
