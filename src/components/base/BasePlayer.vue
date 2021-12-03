<template>
  <div class="player fade-in">
    <main class="player__main">
      <div class="flex justify-between padding">
        <p>SL</p>
        <Icon v-if="!muteSound" name="soundOn" @click="mute" />
        <Icon v-else @click="unMute" name="soundOff" />
      </div>

      <p>{{ this.current.title }}</p>
    </main>
    <footer class="player__footer">
      <Icon @click="prev" name="leftAudio" />

      <Icon v-if="!isPlaying" @click="forceStart" name="play" />
      <Icon v-else @click="pause" name="pause" />

      <Icon @click="next" name="rightArrow" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasePlayer",
  data() {
    return {
      muteSound: false,
      current: {
        src: "",
      },
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: "FIRST SONG",
          artist: "Neffex",
          src: require("@/assets/audio/audio-2.mp3"),
        },
        {
          title: "Second SSONG",
          artist: "Neffex",
          src: require("@/assets/audio/audio-4.mp3"),
        },
        {
          title: "Third Song",
          artist: "Neffex",
          src: require("@/assets/audio/ghost-3.mp3"),
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song: any) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener("ended", () => {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.play(this.current);
      });
      this.isPlaying = true;
    },
    forceStart() {
      this.player.play();
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    mute() {
      this.player.muted = true;
      this.muteSound = true;
    },
    unMute() {
      this.player.muted = false;
      this.muteSound = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
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

@media (max-width: 900px) {
  .player {
    margin-top: toRem(50);
    width: 250px;
    height: 250px;
  }
}
</style>
