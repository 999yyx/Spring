<template>
  <div class="pageHead">
    <div class="back">
      <div @click="$emit('change', true)" class="iconfont icon-xiala"></div>
    </div>
    <div class="songMsg">
      <div class="songName">
        {{ currentSong.name }}
      </div>
      <div class="singerName">
        {{ currentSong | singers }}
      </div>
    </div>
    <div class="share iconfont icon-fenxiang"></div>
  </div>
</template>

<script>
export default {
  name: "WyyMusicPagehead",
  props: {
    currentSong: Object,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.pageHead {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconfont {
    font-size: 25px;
    color: white;
  }

  .back {
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  .songMsg {
    color: white;
    text-align: center;
    flex: 1;
    .songName {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 14px;
    }
    .singerName {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 12px;
      color: #5d5d5d;
    }
  }
}
</style>