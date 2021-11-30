<template>
  <div class="close">
    <Icons name="close" />
  </div>
  <mdb-container>
    <div class="embed-responsive embed-responsive-21by9">
      <iframe class="embed-responsive-item" :src="videoLink"></iframe>
    </div>
  </mdb-container>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseVideo",
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
</style>


