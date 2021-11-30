<template>
  <svg
    v-if="name === 'menu'"
    xmlns="http://www.w3.org/2000/svg"
    id="Outline"
    viewBox="0 0 24 24"
    width="35"
    height="35"
    fill="white"
  >
    <rect y="11" width="24" height="2" rx="1" />
    <rect y="4" width="24" height="2" rx="1" />
    <rect y="18" width="24" height="2" rx="1" />
  </svg>

  <svg
    v-if="name === 'close'"
    xmlns="http://www.w3.org/2000/svg"
    id="Isolation_Mode"
    data-name="Isolation Mode"
    viewBox="0 0 24 24"
    width="35"
    height="35"
    fill="white"
  >
    <polygon
      points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  props: ["name"],
});
</script>

<style scoped lang="scss">
svg {
  &:hover {
    opacity: 0.3;
    transition: 0.4s ease-in-out;
  }
}
</style>
