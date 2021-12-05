<template>
  <main>
    <her-we-are class="container"> </her-we-are>
    <SillenseNews />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HerWeAre from "@/components/pages/HereWeAre.vue";
import SillenseNews from "@/components/pages/SillenseNews.vue";

export default defineComponent({
  name: "Home",
  components: {
    HerWeAre,
    SillenseNews,
  },
});
</script>
