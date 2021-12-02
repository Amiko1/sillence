<template>
  <div class="player fade-in">
    <main class="player__main">
      <div class="flex justify-between padding">
        <p>SL</p>
        <Icon v-if="soundOn" name="soundOn" @click="soundOn = false" />
        <Icon v-else @click="soundOn = true" name="soundOff" />
      </div>
      soundOff
      <p>Quenye eye sounds</p>
    </main>
    <footer class="player__footer">
      <Icon name="leftAudio" />

      <Icon name="pause" />

      <Icon name="rightArrow" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasePlayer",
  data() {
    return {
      soundOn: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.player {
  width: 350px;
  display: flex;
  flex-direction: column;
  height: 350px;
  border-radius: 25px;
  box-shadow: -1px 0px 14px 10px #888888;
  p {
    text-align: center;
    @include headline6;
    color: $white;
  }
  &__footer {
    height: 20%;
    margin-top: auto;
    opacity: 0.7;
    background-color: #888888;
    display: flex;
    align-items: center;

    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    justify-content: space-around;
  }
}

.player::after {
  content: "";
  background: url("../../assets/PlayerBackgrounds/backgroundman.jpg");
  background-position: -120px -20px;
  background-size: cover;
  opacity: 0.45;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  border-radius: 25px;
}
</style>
