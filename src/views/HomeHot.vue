<template>
  <div class="hot">
    <div class="img-box">
      <div class="pic"></div>
      <div class="time">更新日期:{{ updateTime }}</div>
    </div>
    <div class="loading" v-show="loadingShow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: #fff; display: block"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(180 50 50)">
          <rect x="15" y="15" width="10" height="40" fill="#ccc">
            <animate
              attributeName="height"
              values="50;70;30;50"
              keyTimes="0;0.33;0.66;1"
              dur="2.564102564102564s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-1.0256410256410258s"
            ></animate>
          </rect>
          <rect x="35" y="15" width="10" height="40" fill="#ccc">
            <animate
              attributeName="height"
              values="50;70;30;50"
              keyTimes="0;0.33;0.66;1"
              dur="2.564102564102564s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-0.5128205128205129s"
            ></animate>
          </rect>
          <rect x="55" y="15" width="10" height="40" fill="#ccc">
            <animate
              attributeName="height"
              values="50;70;30;50"
              keyTimes="0;0.33;0.66;1"
              dur="2.564102564102564s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-1.5384615384615383s"
            ></animate>
          </rect>
          <rect x="75" y="15" width="10" height="40" fill="#ccc">
            <animate
              attributeName="height"
              values="50;70;30;50"
              keyTimes="0;0.33;0.66;1"
              dur="2.564102564102564s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
              begin="-2.564102564102564s"
            ></animate>
          </rect>
        </g>
      </svg>
    </div>
    <div class="songList" :class="{ margin: marginState }">
      <NewSongItem
        :item="item"
        :index="index"
        v-for="(item, index) in item"
        :key="item.id"
        @click.native="$emit('update:currentSong', item, true)"
        :currentSong="currentSong"
        :playing="playing"
      />
      <div v-if="more" class="loading" style="width: 100%; height: 20px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: #fff; display: block"
          width="35px"
          height="35px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="84" cy="50" r="10" fill="#d5d5d5">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.3205128205128205s"
              calcMode="spline"
              keyTimes="0;1"
              values="10;0"
              keySplines="0 0.5 0.5 1"
              begin="0s"
            ></animate>
            <animate
              attributeName="fill"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="discrete"
              keyTimes="0;0.25;0.5;0.75;1"
              values="#d5d5d5;#d5d5d5;#d5d5d5;#d5d5d5;#d5d5d5"
              begin="0s"
            ></animate>
          </circle>
          <circle cx="16" cy="50" r="10" fill="#d5d5d5">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
            ></animate>
          </circle>
          <circle cx="50" cy="50" r="10" fill="#d5d5d5">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.3205128205128205s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.3205128205128205s"
            ></animate>
          </circle>
          <circle cx="84" cy="50" r="10" fill="#d5d5d5">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.641025641025641s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.641025641025641s"
            ></animate>
          </circle>
          <circle cx="16" cy="50" r="10" fill="#d5d5d5">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.9615384615384615s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.9615384615384615s"
            ></animate>
          </circle>
        </svg>
      </div>
      <div v-else class="more" @click="getmore">获取更多</div>
    </div>
    <div class="toTOp" v-if="topshow" @click="totop">
      <svg
        class="icon"
        style="
          width: 1.5em;
          height: 1.5em;
          vertical-align: middle;
          fill: #ccc;
          overflow: hidden;
        "
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1621"
      >
        <path
          d="M825.568 555.328l-287.392-289.28C531.808 259.648 523.488 256.576 515.2 256.64 514.08 256.544 513.12 256 512 256c-4.672 0-9.024 1.088-13.024 2.88-4.032 1.536-7.872 3.872-11.136 7.136l-259.328 258.88c-12.512 12.48-12.544 32.736-0.032 45.248 6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.624-9.344L480 364.288 480 928c0 17.696 14.336 32 32 32s32-14.304 32-32L544 362.72l236.192 237.728c6.24 6.272 14.496 9.44 22.688 9.44s16.32-3.104 22.56-9.312C838.016 588.128 838.048 567.84 825.568 555.328zM864 192 160 192C142.336 192 128 177.664 128 160s14.336-32 32-32l704 0c17.696 0 32 14.336 32 32S881.696 192 864 192z"
          p-id="1622"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
import NewSongItem from "../components/NewSongItem";
export default {
  props: {
    currentSong: Object,
    playing: Boolean,
    marginState: Boolean,
  },
  components: {
    NewSongItem,
  },
  data() {
    return {
      updateTime:
        new Date().getMonth() + 1 + "月" + new Date().getDate() + "日",
      item: [],
      songCount: 20,
      loadingShow: false,
      more: false,
      topshow: false,
    };
  },
  watch: {
    currentSong() {
      if (this.item.indexOf(this.currentSong) != -1) {
        this.$emit("get-list-pLay", this.item);
      }
    },
  },
  created() {
    document.documentElement.scrollTop = 0;
    let screenHeight = document.documentElement.scrollHeight;
    window.addEventListener("scroll", () => {
      let scrolltop = document.documentElement.scrollTop;
      if (scrolltop < screenHeight / 2) {
        this.topshow = false;
      } else {
        this.topshow = true;
      }
    });

    this.loadingShow = true;
    this.axios
      .get("https://apis.netstart.cn/music/playlist/detail?id=3778678")
      .then((res) => {
        let a = [];
        for (let i = 0; i < this.songCount; i++) {
          a.push(res.data.playlist.tracks[i]);
        }
        this.item = a;
        this.loadingShow = false;
      });

    window.addEventListener("scroll", () => {
      if (
        Math.ceil(document.documentElement.scrollTop) ==
        document.documentElement.offsetHeight -
          document.documentElement.clientHeight
      ) {
        this.getmore();
      }
    });
  },
  methods: {
    getmore() {
      this.more = true;
      this.songCount += 10;
      setTimeout(() => {
        this.axios
          .get("https://apis.netstart.cn/music/playlist/detail?id=3778678")
          .then((res) => {
            if (this.songCount > res.data.privileges.length) {
              this.more = false;
              return;
            } else {
              let a = [];
              for (let i = 0; i < this.songCount; i++) {
                a.push(res.data.playlist.tracks[i]);
              }
              this.item = a;
              this.more = false;
            }
          });
      }, 500);
    },
    totop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
<style lang="less" scoped>
.hot {
  .toTOp {
    width: 25px;
    height: 25px;
    position: fixed;
    bottom: 75px;
    right: 55px;
  }
  .img-box {
    width: 100%;
    height: 133px;
    // background-color: green;
    padding-top: 15px;
    padding-left: 20px;
    background: url("../image/hotbackground.jpg") no-repeat 50% 50%;
    background-size: 100% 100%;
    .pic {
      background: url("../image/index_icon_2x.png") no-repeat -10px -27px;
      width: 160px;
      height: 71px;
      background-size: 167px 97px;
    }
    .time {
      padding-top: 10px;
      padding-left: 15px;
      font-size: 14px;
      color: white;
    }
  }

  .margin {
    margin-bottom: 70px;
  }
  .more {
    text-align: center;
    line-height: 30px;
    letter-spacing: 10px;
    color: #ccc;
    margin-top: 5px;
  }
}
</style>