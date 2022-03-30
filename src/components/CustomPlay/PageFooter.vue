<template>
  <div class="PageFooter">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated  fadeOut"
    >
      <div class="playMode" v-show="playModeShow">{{ playMode }}</div>
    </transition>

    <div class="media">
      <div v-if="favbool">
        <i class="iconfont icon-aixin" @click.stop="fav"></i>
      </div>
      <div v-if="!favbool">
        <i style="color: red" class="iconfont icon-aixin" @click.stop="fav"></i>
      </div>
      <div><i class="iconfont icon-xiazai"></i></div>
      <div><i class="iconfont icon-changge"></i></div>
      <div><i class="iconfont icon-pinglun"></i></div>
      <div><i class="iconfont icon-gengduo-shuxiang"></i></div>
    </div>
    <div class="schedule">
      <div class="currentTime">{{ currentTime | time }}</div>
      <input
        type="range"
        v-model="value"
        min="0"
        :max="durationTime"
        @input="pull = true"
        @change="(pull = false), $emit('pull-change', value)"
      />
      <div class="out">
        <div class="in" :style="{ width: `${(value / durationTime) * 100}%` }">
          <div class="dot"></div>
        </div>
      </div>
      <div class="durationTime">{{ durationTime | time }}</div>
    </div>
    <div class="mediaBtn">
      <div>
        <div v-if="PLayMode == 1" @click="single">
          <svg
            class="icon"
            style="
              width: 1.7em;
              height: 1.7em;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
            "
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5134"
          >
            <path
              d="M192 789.333333a21.24 21.24 0 0 1-12.8-4.28 344.513333 344.513333 0 0 1-99.333333-118A341.246667 341.246667 0 0 1 384 170.666667h256q6.36 0 12.733333 0.233333l-49.153333-49.146667a21.333333 21.333333 0 0 1 30.173333-30.173333l85.333334 85.333333a21.333333 21.333333 0 0 1 0 30.173334l-85.333334 85.333333a21.333333 21.333333 0 0 1-30.173333-30.173333l48.666667-48.666667Q646.126667 213.333333 640 213.333333H384c-164.666667 0-298.666667 134-298.666667 298.666667 0 94.833333 43.546667 181.933333 119.48 238.966667A21.333333 21.333333 0 0 1 192 789.333333z m228.433333 143.06a21.333333 21.333333 0 0 0 0-30.173333l-49.153333-49.146667q6.366667 0.233333 12.733333 0.233334H640a341.46 341.46 0 0 0 304.146667-496.42 344.513333 344.513333 0 0 0-99.333334-118 21.333333 21.333333 0 1 0-25.626666 34.113333C895.12 330.066667 938.666667 417.166667 938.666667 512c0 164.666667-134 298.666667-298.666667 298.666667H384q-6.12 0-12.246667-0.246667l48.666667-48.666667a21.333333 21.333333 0 0 0-30.173333-30.173333l-85.333334 85.333333a21.333333 21.333333 0 0 0 0 30.173334l85.333334 85.333333a21.333333 21.333333 0 0 0 30.173333 0zM554.666667 618.666667V405.333333a21.333333 21.333333 0 0 0-21.333334-21.333333h-42.666666a21.333333 21.333333 0 0 0 0 42.666667h21.333333v192a21.333333 21.333333 0 0 0 42.666667 0z"
              fill="white"
              p-id="5135"
            ></path>
          </svg>
        </div>
        <div v-if="PLayMode == 2" @click="order">
          <svg
            class="icon"
            style="
              width: 1.7em;
              height: 1.7em;
              vertical-align: middle;
              fill: white;
              overflow: hidden;
            "
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2978"
          >
            <path
              d="M941 414.6H83c-11 0-20-9-20-20s9-20 20-20h858c11 0 20 9 20 20s-8.9 20-20 20zM937.2 405.4c-5.1 0-10.2-2-14.1-5.9L780.7 257.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l142.4 142.4c7.8 7.8 7.8 20.5 0 28.3-4 3.9-9.1 5.9-14.2 5.9zM941 649.4H83c-11 0-20-9-20-20s9-20 20-20h858c11 0 20 9 20 20s-8.9 20-20 20zM794.8 801c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3L923 624.5c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L808.9 795.1c-3.9 3.9-9 5.9-14.1 5.9z"
              p-id="2979"
            ></path>
          </svg>
        </div>
        <div v-if="PLayMode == 3" @click="random">
          <svg
            class="icon"
            style="
              width: 1.7em;
              height: 1.7em;
              vertical-align: middle;
              fill: white;
              overflow: hidden;
            "
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4254"
          >
            <path
              d="M682.48 297.633333L332.666667 752.386667A149.333333 149.333333 0 0 1 214.306667 810.666667H64a21.333333 21.333333 0 0 1 0-42.666667h150.306667a107.333333 107.333333 0 0 0 84.546666-41.633333L648.666667 271.613333A149.333333 149.333333 0 0 1 767.026667 213.333333h141.473333l-48.92-48.913333a21.333333 21.333333 0 0 1 30.173333-30.173333l85.333334 85.333333a21.333333 21.333333 0 0 1 0 30.173333l-85.333334 85.333334a21.333333 21.333333 0 0 1-30.173333-30.173334l48.92-48.913333h-141.473333a107.333333 107.333333 0 0 0-84.546667 41.633333zM64 256h150.306667a107.333333 107.333333 0 0 1 84.546666 41.633333l109.26 142.04a21.333333 21.333333 0 0 0 33.82-26L332.666667 271.613333A149.333333 149.333333 0 0 0 214.306667 213.333333H64a21.333333 21.333333 0 0 0 0 42.666667z m825.753333 432.913333a21.333333 21.333333 0 0 0-30.173333 30.173334l48.92 48.913333h-141.473333a107.333333 107.333333 0 0 1-84.546667-41.633333L573.22 584.326667a21.333333 21.333333 0 0 0-33.82 26L648.666667 752.386667a149.333333 149.333333 0 0 0 118.36 58.28h141.473333l-48.92 48.913333a21.333333 21.333333 0 0 0 30.173333 30.173333l85.333334-85.333333a21.333333 21.333333 0 0 0 0-30.173333z"
              fill="white"
              p-id="4255"
            ></path>
          </svg>
        </div>
      </div>
      <div @click="prve">
        <i class="iconfont icon-shangyiqu101"> </i>
      </div>
      <div v-if="!playing">
        <i class="iconfont icon-bofang" @click="$emit('changePlay', true)"></i>
      </div>
      <div v-else>
        <i
          class="iconfont icon-zanting"
          @click="$emit('changePlay', false)"
        ></i>
      </div>
      <div @click="next">
        <i class="iconfont icon-xiayiqu101"></i>
      </div>
      <div @click="$emit('changeListPlay', true)">
        <i class="iconfont icon-caidan"></i>
      </div>
      <ListPlay
        v-if="ListPlayShow"
        @hideListplay="$emit('hideListplay', $event)"
        :ListPlay="ListPlay"
        :currentSong="currentSong"
        :playing="playing"
        @updateListPlay="updataListPLay"
      />
    </div>
  </div>
</template>

<script>
import ListPlay from "@/components/ListPlay.vue";
export default {
  name: "WyyMusicPageFooter",
  components: {
    ListPlay,
  },
  props: {
    playing: Boolean,
    durationTime: Number,
    currentTime: Number,
    ListPlayShow: Boolean,
    ListPlay: Array,
    currentSong: Object,
    PLayMode: Number,
  },
  filters: {
    time(n) {
      function changeTime(times) {
        if (times < 10) {
          return "0" + times;
        } else {
          return times;
        }
      }
      return changeTime(parseInt(n / 60)) + ":" + changeTime(parseInt(n % 60));
    },
  },

  data() {
    return {
      value: this.currentTime,
      pull: false,
      playModeShow: false,
      playMode: "随机播放",
      favbool: true,
    };
  },
  created() {
    let musicfav = JSON.parse(localStorage.getItem("musicfav")) || [];
    if (musicfav.length > 0) {
      musicfav.forEach((item) => {
        if (item.id == this.currentSong.id) {
          this.favbool = item.bool;
        }
      });
    } else {
      this.favbool = true;
    }
  },

  watch: {
    currentTime(n) {
      if (!this.pull) {
        this.value = n;
      }
    },
    currentSong(n) {
      let b = false;
      let musicfav = JSON.parse(localStorage.getItem("musicfav")) || [];
      if (musicfav.length > 0) {
        musicfav.forEach((item) => {
          if (item.id == n.id) {
            this.favbool = item.bool;
            b = true;
            return;
          }
        });
        if (!b) {
          this.favbool = true;
        }
      } else {
        this.favbool = true;
      }
    },
  },
  methods: {
    fav() {
      this.favbool = !this.favbool;
      let obj = {
        bool: this.favbool,
        id: this.currentSong.id,
      };

      let musicfav = JSON.parse(localStorage.getItem("musicfav")) || [];
      if (!this.favbool) {
        musicfav.push(obj);
        localStorage.setItem("musicfav", JSON.stringify(musicfav));
      } else {
        musicfav = musicfav.filter((item) => {
          if (item.id != this.currentSong.id) {
            return item;
          }
        });
        localStorage.setItem("musicfav", JSON.stringify(musicfav));
      }
    },
    updataListPLay(e, p) {
      this.$emit("updataListPLay", e, p);
    },
    //上一曲
    next() {
      let a = this.ListPlay.indexOf(this.currentSong);
      if (this.PLayMode == 2) {
        // console.log("顺序播放");
        this.$emit("nextsong", this.ListPlay[a + 1]);
      } else if (this.PLayMode == 3) {
        // console.log("随机播放");
        let newList = this.ListPlay.filter((item, index) => {
          if (a != index) {
            return item;
          }
        });
        this.$emit(
          "nextsong",
          newList[parseInt(Math.random() * newList.length)]
        );
      } else {
        this.$emit("nextsong", this.ListPlay[a + 1]);
      }
    },
    //下一曲
    prve() {
      let a = this.ListPlay.indexOf(this.currentSong);
      if (this.PLayMode == 2) {
        // console.log("顺序播放");
        this.$emit("prevsong", this.ListPlay[a - 1]);
      } else if (this.PLayMode == 3) {
        // console.log("随机播放");
        let newList = this.ListPlay.filter((item, index) => {
          if (a != index) {
            return item;
          }
        });
        this.$emit(
          "prevsong",
          newList[parseInt(Math.random() * newList.length)]
        );
      } else {
        this.$emit("prevsong", this.ListPlay[a - 1]);
      }
    },
    //顺序
    order() {
      this.playMode = "随机播放";
      this.playModeShow = true;
      this.$emit("changePlayMode", 3);
      setTimeout(() => {
        this.playModeShow = false;
      }, 1000);
    },
    single() {
      this.playMode = "顺序播放";
      this.playModeShow = true;
      this.$emit("changePlayMode", 2);
      setTimeout(() => {
        this.playModeShow = false;
      }, 1000);
    },
    random() {
      this.playMode = "单曲循环";
      this.playModeShow = true;
      this.$emit("changePlayMode", 1);
      setTimeout(() => {
        this.playModeShow = false;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.PageFooter {
  .playMode {
    color: #ccc;
    position: fixed;
    top: 410px;
    left: calc(50% - 40px);
    // border: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0.384);
    border-radius: 15px;
    padding: 10px;
  }
  .media {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50px;
    .iconfont {
      font-size: 25px;
      color: white;
    }
    div {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }
  .schedule {
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input {
      width: 80%;
      position: absolute;
      top: 16px;
      z-index: 9;
      opacity: 0;
    }
    .out {
      width: 82%;
      height: 5px;
      background-color: rgb(141, 141, 141);
      border-radius: 15px;
      .in {
        width: 10%;
        height: 100%;
        background-color: white;
        position: relative;
        border-radius: 15px;
        .dot {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255);
          border-radius: 50%;
          position: absolute;
          top: -2.5px;
          right: -4.5px;
        }
      }
    }
    .currentTime {
      color: white;
      font-size: 12px;
      margin-right: 10px;
    }
    .durationTime {
      color: white;
      font-size: 12px;
      margin-left: 10px;
    }
  }
  .mediaBtn {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    align-items: center;

    .iconfont {
      font-size: 30px;
      color: white;
    }
  }
}
</style>