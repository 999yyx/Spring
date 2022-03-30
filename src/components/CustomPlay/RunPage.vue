<template>
  <div class="page">
    <div
      class="mask"
      :style="{
        backgroundImage: `url(${
          currentSong.picUrl
            ? currentSong.picUrl
            : currentSong.al
            ? currentSong.al.picUrl
            : currentSong.artists[0].img1v1Url
        }?imageView=1&type=webp&thumbnail=247x0)`,
      }"
    ></div>

    <PageHead @change="$emit('change', $event)" :currentSong="currentSong" />
    <PageCD
      v-if="CDShow"
      class="PageCD"
      :currentSong="currentSong"
      :playing="playing"
      @ToWord="$emit('ToWord', (CDShow = $event))"
    />
    <PageWord
      v-else
      :currentSong="currentSong"
      :currentTime="currentTime"
      @ToCD="$emit('ToWord', (CDShow = $event))"
    />
    <PageFooter
      class="PageFooter"
      :durationTime="durationTime"
      :currentTime="currentTime"
      :playing="playing"
      :ListPlayShow="ListPlayShow"
      :currentSong="currentSong"
      :PLayMode="PLayMode"
      @changePlay="$emit('changePlay', $event)"
      @pull-change="$emit('pull-change', $event)"
      @changeListPlay="$emit('changeListPlay', $event)"
      @hideListplay="$emit('hideListplay', $event)"
      :ListPlay="ListPlay"
      @updataListPLay="updataListPLay"
      @nextsong="$emit('nextsong', $event)"
      @prevsong="$emit('prevsong', $event)"
      @repeatMode="$emit('repeatMode', $event)"
      @changePlayMode="$emit('changePlayMode', $event)"
    />
  </div>
</template>

<script>
import PageHead from "./PageHead.vue";
import PageCD from "./PageCD.vue";
import PageWord from "./PageWord.vue";
import PageFooter from "./PageFooter.vue";
export default {
  name: "WyyMusicRunpage",
  components: {
    PageHead,
    PageCD,
    PageWord,
    PageFooter,
  },
  props: {
    currentSong: Object,
    playing: Boolean,
    durationTime: Number,
    currentTime: Number,
    ListPlayShow: Boolean,
    ListPlay: Array,
    PLayMode: Number,
  },

  data() {
    return {
      CDShow: true,
    };
  },

  methods: {
    updataListPLay(e, p) {
      this.$emit("updateListPlayPage", e, p);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  overflow: hidden;

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-size: cover;
    filter: blur(10px) brightness(0.6);
    background-position: center center;
    z-index: -1;
    transform: scale(1.1);
    background-color: black;
  }
  .PageCD {
    flex: 1;
    position: relative;
  }
  .PageFooter {
    height: 200px;
    // background-color: red;
  }
}
</style>