<template>
  <div class="icon">
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

    <svg
      v-if="name === 'heart'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>

    <svg
      v-if="name === 'arrowRight'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
    <svg
      v-if="name === 'arrowLeft'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
    <svg
      v-if="name === 'external'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>

    <svg
      v-if="name === 'soundOff'"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        clip-rule="evenodd"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
      />
    </svg>

    <svg
      width="40"
      v-if="name === 'soundOn'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
      />
    </svg>

    <svg
      v-if="name === 'rightArrow'"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.64429 14.8284L9.0585 16.2426L13.3012 12L9.05853 7.75739L7.64432 9.1716L10.4727 12L7.64429 14.8284Z"
        fill="white"
      />
      <path d="M14.3559 16L14.3559 7.99996H16.3559V16H14.3559Z" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
        fill="white"
      />
    </svg>
    <svg
      v-if="name === 'leftAudio'"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6743 9.1716L15.26 7.75739L11.0174 12L15.26 16.2426L16.6742 14.8284L13.8458 12L16.6743 9.1716Z"
        fill="white"
      />
      <path
        d="M9.96265 8.00007V16.0001H7.96265V8.00007H9.96265Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
        fill="white"
      />
    </svg>
    <svg
      v-if="name === 'pause'"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 9H11V15H9V9Z" fill="white" />
      <path d="M15 15H13V9H15V15Z" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  props: {
    name: {
      type: String,
    },
  },
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
