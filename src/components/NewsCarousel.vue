<template>
  <div class="carousel">
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="desktopImage" img-src="/assets/hogwarts.avif" />
      <b-carousel-slide class="desktopImage" img-src="/assets/gow.webp" />
      <b-carousel-slide class="desktopImage" img-src="/assets/cod.jpg" />
      <b-carousel-slide
        class="mobileImage"
        img-src="/assets/hogwartsmobile.jpg"
      />
      <b-carousel-slide class="mobileImage" img-src="/assets/gowmobile.jpg" />
      <b-carousel-slide class="mobileImage" img-src="/assets/codmobile.jpg" />
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media (min-width: 400px) and (max-width: 1200px) {
    .carousel {
      width: 90vw;
      height: 480px;
      margin: 0 auto;
      margin-top: 1rem;
    }
  }
  @media (max-width: 399px) {
  }
</style>
