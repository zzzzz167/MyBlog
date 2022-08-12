<template>
  <div ref="player" id="aplayer"></div>
</template>

<script>
import "APlayer/dist/APlayer.min.css";
import { ref } from "vue";

export default {
  name: "APlayer",
  props: {
    fixed: {
      required: false,
      type: Boolean,
      default: false,
    },
    mini: {
      required: false,
      type: Boolean,
      default: null,
    },
    autoplay: {
      required: false,
      type: Boolean,
      default: false,
    },
    theme: {
      required: false,
      type: String,
      default: "#b7daff",
    },
    loop: {
      required: false,
      type: String,
      default: "all",
    },
    order: {
      required: false,
      type: String,
      default: "list",
    },
    preload: {
      required: false,
      type: String,
      default: "auto",
    },
    volume: {
      required: false,
      type: Number,
      default: 0.7,
    },
    audio: {
      required: true,
      type: Array,
    },
    customAudioType: {
      required: false,
      type: Object,
      default: undefined,
    },
    mutex: {
      required: false,
      type: Boolean,
      default: true,
    },
    lrcType: {
      required: false,
      type: Number,
      default: 0,
    },
    listFolded: {
      required: false,
      type: Boolean,
      default: false,
    },
    listMaxHeight: {
      required: false,
      type: String,
      default: undefined,
    },
    storageName: {
      required: false,
      type: String,
      default: "aplayer-setting",
    },
  },
  setup() {
    const player = ref();
    return {
      player,
    };
  },
  data() {
    return {
      ap: undefined,
      info: {
        fixed: this.fixed,
        listFolded: this.listFolded,
        autoplay: this.autoplay,
        preload: this.preload,
        loop: this.loop,
        order: this.order,
        mini: this.mini,
        theme: this.theme,
        volume: this.volume,
        mutex: this.mutex,
        lrcType: this.lrcType,
        listMaxHeight: this.listMaxHeight,
        storageName: this.storageName,
        customAudioType: this.customAudioType,
      },
    };
  },
  mounted() {
    this.initPlayer();
  },
  updated() {
    this.updatePlayer();
  },
  beforeUnmount() {
    this.ap.pause();
    this.ap.destroy();
  },
  methods: {
    initPlayer() {
      if (!__VUEPRESS_SSR__) {
        import("APlayer").then((module) => {
          this.ap = new module.default({
            container: this.player,
            audio: this.audio,
            ...this.info,
          });
          const info = this.player.querySelector(".aplayer-info");
          info.style.display = "block";
        });
      }
    },
    updatePlayer(){
      this.ap.list.clear()
      this.ap.list.add(this.audio)
    }
  },
};
</script>

<style>
</style>