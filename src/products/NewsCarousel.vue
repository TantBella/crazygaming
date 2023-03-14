<template>
  <div class="carousel1">
    <b-carousel
      id="carousel1"
      v-model="slide"
      :interval="8000"
      controls
      indicators
      img-width="1600"
      img-height="650"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="desktopImage" img-src="/assets/hogwarts.avif" />

      <b-carousel-slide class="desktopImage" img-src="/assets/gow.webp" />
      <b-carousel-slide class="desktopImage" img-src="/assets/cod.jpg" />
    </b-carousel>
  </div>
  <div class="carousel2">
    <b-carousel
      id="carousel2"
      v-model="slide"
      :interval="8000"
      controls
      indicators
      img-width="400"
      img-height="500"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
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
  .carousel1 {
    width: 90vw;
    max-width: 1400px;
    height: 650px;
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .carousel2 {
    width: 90vw;
    margin: 0 auto;
    margin-top: 0;
  }

  @media (min-width: 600px) and (max-width: 6000px) {
    .carousel1 {
      display: block;
    }
    .carousel2 {
      display: none;
    }
  }
  @media (max-width: 599px) {
    .carousel1 {
      display: none;
    }
    .carousel2 {
      display: block;
    }
  }
</style>
