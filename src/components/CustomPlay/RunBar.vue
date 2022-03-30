<template>
  <div class="bar">
    <div class="thumb" @click="$emit('change', false)">
      <img :src="currentSong | pic" alt="" />
    </div>
    <div class="songMsg">
      <div class="songName">
        {{ currentSong.name }}
        <span>{{ currentSong | anotherName }}</span>
      </div>
      <div class="singerName">
        {{ currentSong | singers }}
        <span>-{{ currentSong | albumName }}</span>
      </div>
    </div>
    <div class="btn">
      <canvas ref="canvas" width="30" height="30"></canvas>
      <div class="play" v-if="!playing" @click="$emit('audio-play')">▶</div>
      <div class="pause" v-else @click="$emit('audio-pause')">| |</div>
    </div>
    <div class="menu" @click="$emit('changeListPlay', true)">
      <div class="iconfont icon-caidan"></div>
    </div>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOut"
    >
      <ListPlay
        v-if="ListPlayShow"
        @changeListPlay="$emit('changeListPlay', $event)"
        @hideListplay="$emit('hideListplay', $event)"
        :ListPlay="ListPlay"
        :currentSong="currentSong"
        :playing="playing"
        @updateListPlay="getSongId"
      />
    </transition>
  </div>
</template>

<script>
import ListPlay from "@/components/ListPlay.vue";
export default {
  name: "WyyMusicPlaybar",
  components: {
    ListPlay,
  },
  props: {
    currentSong: Object,
    playing: Boolean,
    currentTime: Number,
    durationTime: Number,
    playShow: Boolean,
    ListPlayShow: Boolean,
    ListPlay: Array,
  },

  computed: {
    percent() {
      return this.currentTime / this.durationTime;
    },
  },
  watch: {
    percent(n) {
      let context = this.$refs.canvas.getContext("2d");

      context.beginPath();
      context.clearRect(0, 0, 40, 40);
      context.lineWidth = 0.5;
      context.strokeStyle = "black";
      context.arc(15, 15, 14, -90, (Math.PI / 180) * 360 * n - 90);
      context.stroke();
    },
  },
  methods: {
    getSongId(e, p) {
      this.$emit("updateListPlay", e, p);
    },
  },
};
</script>

<style lang="less" scoped>
.bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
  bottom: 0px;
  // padding: 0 10px;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 30%);
  .thumb {
    width: 45px;
    height: 45px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .songMsg {
    flex: 1;
    padding: 10px;
    padding-left: 20px;
    .songName {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .singerName {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 12px;
      color: #ccc;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 20px;
    position: relative;
    canvas {
      position: absolute;
      top: -1px;
      left: -1px;
      z-index: -1;
    }
    .play {
      width: 30px;
      height: 30px;
      // background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .pause {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .menu {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}
.iconfont {
  font-size: 20px;
}
</style>