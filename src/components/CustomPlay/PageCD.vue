<template>
  <div>
    <div class="bar">
      <img
        :class="{ barMove: playing }"
        src="https://s3.music.126.net/mobile-new/img/needle-ab.png?4b81da043356110081e5ccaed2e6f2ad="
        alt=""
      />
    </div>
    <div :class="{ CD: true, move: playing }" @click="$emit('ToWord', false)">
      <img
        src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4602256867/5855/63fb/325b/d7e4e3a244701ee85fecb5d4f6b5bd57.png?imageView=&quality=75&thumbnail=200y200"
        alt=""
      />
      <img
        style="
        width: 128px; height: 129px
        position:absolute;
        left: calc(50% - 65px);
        top: 35px;
        z-index: 7;
        
        "
        :src="currentSong | pic"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "WyyMusicPageCD",
  props: {
    currentSong: Object,
    playing: Boolean,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.bar {
  width: 100%;
  height: 20%;
  img {
    width: 60px;
    height: 100px;
    position: absolute;
    left: calc(50% - 10px);
    top: 20px;
    z-index: 9;
    transform-origin: top left;
    transform: rotate(-30deg);
    transition: all 0.5s;
    &.barMove {
      // animation: 1s barMove linear;
      transform: rotate(0deg);
    }
  }
}
.CD {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 80px;
  left: calc(50% - 95px);
  animation: 20s spin linear infinite;
  animation-play-state: paused;
  transform-origin: center;

  border-radius: 50%;
  &.move {
    animation-play-state: running;
  }
  img {
    position: absolute;
    left: calc(50% - 100px);
    top: 0px;
    z-index: 8;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>