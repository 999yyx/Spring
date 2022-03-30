<template>
  <div class="homeRec">
    <div class="recommend">
      <section>
        <RecommendTitle>推荐音乐</RecommendTitle>
      </section>

      <section>
        <ul class="songs-card">
          <SongsCard v-for="item in songsList" :key="item.id" :item="item" />
        </ul>
      </section>
    </div>

    <div class="newSong">
      <section>
        <RecommendTitle>最新音乐</RecommendTitle>
      </section>
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
      <ul :class="{ avtive: marginState }">
        <NewSongItem
          @click.native="$emit('update:currentSong', item, true)"
          v-for="item in newSongs"
          :key="item.id"
          :item="item"
          :currentSong="currentSong"
          :playing="playing"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import RecommendTitle from "../components/RecommendTitle.vue";
import SongsCard from "../components/SongsCard.vue";
import NewSongItem from "../components/NewSongItem.vue";
export default {
  props: {
    currentSong: [Object, null],
    playing: Boolean,
    marginState: Boolean,
  },
  components: {
    RecommendTitle,
    SongsCard,
    NewSongItem,
  },
  data() {
    return {
      songsList: [],
      newSongs: [],
      loadingShow: false,
    };
  },
  watch: {
    currentSong() {
      if (this.newSongs.indexOf(this.currentSong) != -1) {
        this.$emit("get-list-pLay", this.newSongs);
      }
    },
  },

  created() {
    this.loadingShow = true;
    this.axios
      .get("https://apis.netstart.cn/music/personalized?limit=6")
      .then((res) => {
        this.songsList = res.data.result;
      });

    this.axios
      .get("https://apis.netstart.cn/music/personalized/newsong")
      .then((res) => {
        this.newSongs = res.data.result;
        this.loadingShow = false;
      });
  },
};
</script>
<style lang="less" scoped>
.homeRec {
  .recommend {
    .songs-card {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .newSong {
    ul {
      padding: 0px 15px;
    }
    .avtive {
      margin-bottom: 60px;
    }
  }
}
</style>