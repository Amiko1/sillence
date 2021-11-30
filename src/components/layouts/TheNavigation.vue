<template>
  <div class="mob-logo">
    <img src="@/assets/logo.svg" alt="" />
  </div>
  <div class="icons">
    <div v-if="!isNavOpen" @click="isNavOpen = true" class="icons__menu">
      <Icon name="menu" />
    </div>

    <div v-if="isNavOpen" @click="isNavOpen = false" class="icons__close">
      <Icon name="close" />
    </div>
  </div>

  <nav :class="[isNavOpen ? 'show-item' : 'hidde-item']" class="navigation">
    <ul class="navigation__list fade-in">
      <li class="navigation__item">NEWS</li>
      <li class="navigation__item">About Us</li>
      <li class="navigation__item"><img src="@/assets/logo.svg" alt="" /></li>
      <li class="navigation__item">about us</li>
      <li class="navigation__item">TICKETS</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      isNavOpen: false,
    };
  },
});
</script>

<style scoped lang="scss">
.icons {
  display: none;
  position: fixed;
  right: toRem(30);
  top: toRem(30);
  cursor: pointer;
  z-index: 30;
}
.navigation {
  padding-top: toRem(70);
  &__list {
    display: flex;
    gap: toRem(120);
    justify-content: center;
    color: $white;
    img {
      position: relative;
      top: toRem(-40);
    }
  }
  &__item {
    @include headline5;
    cursor: pointer;
    &:hover {
      color: $red-dark;
    }
  }
}

.mob-logo {
  display: none;
}

@media (max-width: 1000px) {
  .mob-logo {
    display: flex;
    justify-content: center;
  }
  .navigation {
    position: fixed;
    display: none;
    backdrop-filter: blur(0.3rem);
    height: 100vh;
    top: 0;
    width: 100%;

    &__list {
      height: 100%;
      align-items: center;
      flex-direction: column;
    }
  }
  .show-item {
    display: block !important;
  }

  .hidde-item {
    display: none !important;
  }
  .icons {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
