<template>
  <div class="close">
    <Icons name="close" />
  </div>
  <div class="video-wrapper">
    <h1>HERE WE ARE</h1>

    <!-- <iframe class="video" height="515" :src="videoLink"></iframe> -->
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseText",
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
.video-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: toRem(50);
  @include headline4;
  letter-spacing: 136px;
  color: $white;
  .video {
    margin-top: toRem(50);
    width: 40%;
  }
}

.base-card {
  width: 40%;
}
</style>


