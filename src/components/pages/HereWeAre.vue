<template>
  <section class="here-we-are">
    <div class="here-we-are__text fade-in">
      <div>
        <p class="description">Silence rock band</p>
        <p class="description mt-md text-md">Georgia, Kutaisi</p>
        <p class="description mt-md text-sm">
          kutaisi is the rock city so we are the rock and rolls
        </p>
      </div>
      <div class="mt-md ml-md">
        <base-button class="here-we-are__button"> explore </base-button>
      </div>
    </div>
    <BasePlayer class="here-we-are__player" />
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "../base/BaseButton.vue";

export default defineComponent({
  components: { BaseButton },
  name: "HereWeAre",
  props: {
    videoLink: {
      type: String,
      default: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
  },

  data() {
    return {
      iframe: {
        src: this.videoLink,
        style: null,
        wrapperStyle: null,
      },
    };
  },
  // mounted() {
  //   this.loaded = true;
  // },
});
</script>


<style lang="scss" scoped>
.here-we-are {
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-between;

  .description {
    max-width: 450px;
    line-height: 30px;
    @include headline6;
    font-family: "Rock Salt", cursive;
    letter-spacing: 7px;
    color: rgb(255, 255, 255);
    font-weight: 900;
    text-shadow: 2px 2px #000000;
  }

  &__player {
    position: relative;
  }
}

@media (max-width: 900px) {
  .here-we-are {
    padding-top: toRem(30);
    flex-direction: column;
    justify-content: start;
    &__button,
    p {
      text-align: center;
    }
  }
}
</style>


