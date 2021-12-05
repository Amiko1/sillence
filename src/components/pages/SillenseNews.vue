<template>
  <section id="newsid" class="news">
    <div class="container card-wrapper">
      <BaseCard v-for="item in data" :data="item" :key="item.id" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SillenceNews",
  setup() {
    let data = [
      {
        id: 1,
        src: "232910.jpg",
        txt: "What sillence is doing",
      },
      { id: 2, src: "1772697.jpg", txt: "our last party" },
      { id: 3, src: "1772792.jpg", txt: "Check out" },
    ];
    return { data };
  },
});
</script>

<style scoped lang="scss">
.news {
  min-height: 100vh;
  background: url(../../assets/news/232911.jpg) no-repeat center center fixed;
  background-size: cover;
}

.card-wrapper {
  padding: toRem(40);
  display: flex;
  justify-content: space-between;

  align-items: center;
  min-height: 100vh;
  gap: 50px;
}

@media (max-width: 1200px) {
  .card-wrapper {
    flex-wrap: wrap;
  }
}
</style>