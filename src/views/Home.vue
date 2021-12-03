<template>
  <main class="container">
    <her-we-are> </her-we-are>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HerWeAre from "@/components/pages/HereWeAre.vue";
export default defineComponent({
  name: "Home",
  components: {
    HerWeAre,
  },
});
</script>
