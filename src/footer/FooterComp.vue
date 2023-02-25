<template>
  <div class="foot">
    <NewsletterSignup />
    <FooterMenu />
    <div class="disclaimer">
      <h4>Disclaimer:</h4>
      <p>
        Pictures are taken from Webhallen.com (This site is a school project
        only)
      </p>
    </div>
  </div>
</template>

<script>
  import NewsletterSignup from './NewsletterSignup.vue'
  import FooterMenu from './FooterMenu.vue'

  export default {
    components: {
      NewsletterSignup,
      FooterMenu
    }
  }
</script>

<style lang="scss" scoped>
  h4 {
    padding: 10px 10px 2px 10px;
    font-size: smaller;
    margin-bottom: 1px;
  }

  .foot {
    border-top: solid 2px white;
    color: white;
    margin-top: 20px;
  }
  .disclaimer p {
    padding: 2px 10px 3px 10px;
    font-size: x-small;
    margin-bottom: 30px;
  }
</style>
