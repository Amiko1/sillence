<template>
  <article class="card">
    <main>
      <img :src="require('@/assets/PlayerBackgrounds/' + imgPath)" alt="" />
    </main>
    <footer>
      <h3>{{ data.txt }}</h3>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },

  // created() {
  //   console.log(this.data?.src);

  //   console.log(this.imgPath);
  // },
  computed: {
    imgPath() {
      let { src } = this.data;
      return src || "232910.jpg";
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  main {
    overflow: hidden;
    cursor: pointer;

    max-height: 500px;
  }
  footer {
    padding: toRem(15) toRem(10);
    @include headline6();
    background-color: $black;
    opacity: 0.7;
    color: $white;
    max-height: 300px;
  }
  img {
    width: 100%;
  }
  &:hover {
    img {
      transform: scale(1.1);
      transition: 0.5s;
    }
    footer {
      background-color: $red-dark;
      transition: 0.5s;
    }
  }
}
</style>