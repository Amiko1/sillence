<template>
  <TheNavigation />

  <router-view />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import TheNavigation from "@/components/layouts/TheNavigation.vue";
export default defineComponent({
  name: "Home",
  components: {
    TheNavigation,
  },
});
</script>


<style lang="scss">
body {
  background: url(assets/backgroun1d.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
