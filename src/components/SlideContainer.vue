<template>
  <div class="slider-container">
    <div class="left-container">
      <span class="slide-button button-left" @click="scroll(-1)"></span>
    </div>
    <div class="right-container">
      <span class="slide-button button-right" @click="scroll(1)"></span>
    </div>
    <div class="slide-items" :id="sliderId">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-container",
  props: {
    scrollUnit: {
      type: Number,
      default: 30,
    },
    sliderId: {
      type: String,
      default: "slide",
    },
  },
  components: {},
  methods: {
    scroll(direction) {
      document.getElementById(this.sliderId).scrollLeft +=
        this.scrollUnit * direction;
    },
  },
};
</script>