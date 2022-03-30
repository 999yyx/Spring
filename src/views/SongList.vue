<template>
  <div class="songList" v-if="songList">
    <div class="back" @click="$router.back()">
      <div>
        <svg
          t="1646306543006"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2121"
          width="20"
          height="20"
          fill="white"
        >
          <path
            d="M700.371228 394.525472 174.028569 394.525472l255.952416-227.506551c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.506619-42.367947-2.492774L76.425623 400.975371c-6.960529 5.496178-11.434423 14.003945-11.434423 23.561625 0 0.013303 0.001023 0.026606 0.001023 0.039909 0 0.01228-0.001023 0.025583-0.001023 0.037862 0 0.473791 0.01535 0.946558 0.037862 1.418302 0.001023 0.016373 0.001023 0.032746 0.001023 0.049119 0.39295 8.030907 3.992941 15.595186 10.034541 20.962427l315.040163 280.028764c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947l-256.128425-227.665163 526.518668 0c109.219517 0 198.075241 88.855724 198.075241 198.075241s-88.855724 198.075241-198.075241 198.075241L354.324888 850.696955c-16.57449 0-30.011524 13.437034-30.011524 30.011524s13.437034 30.011524 30.011524 30.011524l346.046341 0c142.31631 0 258.098289-115.783003 258.098289-258.098289S842.686515 394.525472 700.371228 394.525472z"
            p-id="2122"
          ></path>
        </svg>
      </div>
    </div>
    <header>
      <div
        class="mask"
        :style="{
          backgroundImage: `url(
         ${songList.coverImgUrl}?imageView=1&type=webp&thumbnail=247x0
        )`,
        }"
      ></div>
      <div class="left">
        <div class="icon">歌单</div>
        <img
          :src="`${songList.coverImgUrl}?imageView=1&type=webp&thumbnail=247x0`"
        />
      </div>
      <div class="right">
        <p>{{ songList.name }}</p>
        <div class="creator">
          <img :src="songList.creator.avatarUrl" alt="" />
          <span class="userIcon"></span>
          <span>{{ songList.creator.nickname }}</span>
        </div>
      </div>
    </header>
    <p class="title">歌曲列表</p>

    <ul class="list" :class="{ margin: marginState }">
      <NewSongItem
        :currentSong="currentSong"
        :playing="playing"
        @click.native="$emit('update:currentSong', item, true)"
        v-for="(item, index) in songList.tracks"
        :key="item.id"
        :item="item"
        :order="index + 1"
      />
    </ul>
  </div>
</template>

<script>
import NewSongItem from "../components/NewSongItem.vue";
export default {
  components: { NewSongItem },
  name: "WyyMusicSonglist",
  props: {
    playing: Boolean,
    currentSong: Object,
    marginState: Boolean,
  },
  data() {
    return {
      songList: null,
      loadingShow: false,
    };
  },
  created() {
    this.getSongList(this.$route.query.id);
  },
  watch: {
    currentSong() {
      if (this.songList.tracks.indexOf(this.currentSong) != -1) {
        this.$emit("get-list-pLay", this.songList.tracks);
      }
    },
  },

  beforeRouteUpdate(to, from, next) {
    this.getPlayListDetail(to.query.id);
    next();
  },
  methods: {
    getSongList(id) {
      this.axios
        .get("https://apis.netstart.cn/music/playlist/detail", {
          params: { id },
        })
        .then((res) => {
          this.songList = res.data.playlist;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.songList {
  .back {
    background-color: #d43c33;
    width: 100%;
    height: 30px;
    padding-top: 5px;

    div {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
  }
  header {
    display: flex;
    padding: 30px 20px;
    position: relative;
    overflow: hidden;
    .mask {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      filter: blur(50px) brightness(0.6);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .left {
      width: 126px;
      height: 126px;
      position: relative;
      .icon {
        height: 17px;
        background-color: rgba(217, 48, 48, 0.8);
        position: absolute;
        top: 10px;
        left: 0px;
        font-size: 9px;
        line-height: 17px;
        color: white;
        text-align: center;
        padding: 0 8px;
        border-top-right-radius: 17px;
        border-bottom-right-radius: 17px;
      }
      img {
        vertical-align: middle;
      }
    }
    .right {
      width: 200px;
      margin-left: 20px;
      p {
        color: white;
      }
      .creator {
        display: flex;
        margin-top: 10px;
        align-items: center;
        position: relative;
        .userIcon {
          width: 12px;
          height: 12px;
          background-image: url("../image/usericn_2x.png");
          background-repeat: no-repeat;
          background-size: 75px auto;
          position: absolute;
          top: 18px;
          left: 10px;
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        span {
          color: #ccc;
          margin-left: 5px;
        }
      }
    }
  }
  .title {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
    padding-left: 10px;
  }

  .margin {
    margin-bottom: 60px;
  }
}
</style>