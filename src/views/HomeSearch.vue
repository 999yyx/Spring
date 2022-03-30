<template >
  <div class="search">
    <div class="ipt">
      <i class="search-img"> </i>
      <input
        type="text"
        placeholder="搜索歌曲、歌手、专辑"
        @keydown.enter="Search"
        ref="ipt"
        @input="suggest"
      />
      <div
        class="iptdel"
        style="position: absolute; right: 20px"
        @click="iptdel"
      >
        <svg
          class="icon"
          style="
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2364"
        >
          <path
            d="M558.235532 512.696872 558.235532 512.696872l-23.118534-23.118534L558.235532 512.696872 558.235532 512.696872zM511.999488 64.823378c-246.986207 0-447.189925 200.177112-447.189925 447.163319s200.203718 447.189925 447.189925 447.189925c246.986207 0 447.189925-200.204741 447.189925-447.189925S758.985696 64.823378 511.999488 64.823378L511.999488 64.823378zM743.09989 697.560206l-46.208415 46.237067L512.027118 558.905286 327.13513 743.797273l-46.209438-46.237067 184.891987-184.863335L280.925692 327.83149l46.209438-46.238091 207.982892 207.983915-23.089881-23.090904 184.863335-184.893011 46.208415 46.238091L558.235532 512.696872 743.09989 697.560206 743.09989 697.560206zM743.09989 697.560206"
            p-id="2365"
          ></path>
        </svg>
      </div>
      <div
        class="mask"
        v-show="suggestWordShow"
        @click.stop="suggestWordShow = false"
      >
        <div class="suggest">
          <ul ref="suggestWordShow">
            <li
              v-for="(item, index) in suggestWord"
              :key="item.id"
              @click="getSuggestWord(index)"
            >
              {{ item.keyword }}
            </li>
            <li
              style="
                height: 20px;
                text-align: center;
                color: #ccc;
                font-size: 12px;
                line-height: 20px;
                border-bottom: none;
              "
            >
              没有更多关键词~~
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hotWord" v-if="wordShow">
      <p>热门搜索</p>
      <ul class="word" ref="list">
        <li
          class="searchWord"
          v-for="(item, index) in wordList"
          :key="item.score"
          :item="item"
          @click="getSearchWord(index)"
        >
          {{ item.searchWord }}
        </li>
      </ul>
    </div>
    <div class="history" :class="{ margin: marginState }" v-if="historyShow">
      <ul v-for="(item, index) in historyWord" :key="index">
        <span><img src="../image/history.svg" alt="" /></span>
        <li class="text" ref="his" @click="historySearch(index)">
          {{ item.name }}
        </li>
        <span @click="del(index)"><img src="../image/del.svg" alt="" /></span>
      </ul>
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
    <ul v-if="!loadingShow" :class="{ margin: marginState }">
      <h3 class="title" v-if="pipei">最佳匹配</h3>
      <NewSongItem
        :item="item"
        v-for="item in songList.songs"
        :key="item.id"
        @click.native="$emit('update:currentSong', item, true)"
        :currentSong="currentSong"
        :playing="playing"
      />
    </ul>
  </div>
</template>
<script>
import NewSongItem from "../components/NewSongItem.vue";
export default {
  components: {
    NewSongItem,
  },
  props: {
    currentSong: Object,
    playing: Boolean,
    marginState: Boolean,
  },
  data() {
    return {
      wordList: [],
      value: "",
      songList: [],
      wordShow: true,
      suggestWordShow: false,
      historyShow: true,
      suggestWord: [],
      historyWord: [],
      loadingShow: false,
      pipei: false,
    };
  },
  watch: {
    value(n) {
      this.loadingShow = true;
      if (n.trim() == "") {
        return;
      } else {
        this.axios
          .get(`https://apis.netstart.cn/music/cloudsearch?keywords=${n}`)
          .then((res) => {
            this.songList = res.data.result;
            this.loadingShow = false;
          });
      }
    },
    currentSong(n) {
      if (this.songList.songs.indexOf(this.currentSong) != -1) {
        this.$emit("get-list-pLay", this.songList.songs);
      }
    },
  },
  created() {
    let history = JSON.parse(localStorage.getItem("songs")) || [];
    localStorage.setItem("songs", JSON.stringify(history));
    this.historyWord = history;
    this.axios
      .get("https://apis.netstart.cn/music/search/hot/detail?limit=6")
      .then((res) => {
        this.wordList = res.data.data;
      });
  },
  mounted() {
    this.$refs.ipt.focus();
  },
  methods: {
    Search() {
      if (this.$refs.ipt.value.trim() == "") {
        alert("输入为空！");
      } else {
        this.value = this.$refs.ipt.value;
        this.wordShow = false;
        this.suggestWordShow = false;
        this.historyShow = false;
        this.pipei = true;
        let history = JSON.parse(localStorage.getItem("songs")) || [];
        history.unshift({ name: this.$refs.ipt.value });
        localStorage.setItem("songs", JSON.stringify(history));
        this.historyWord = history;
      }
    },
    getSearchWord(index) {
      this.value = this.$refs.list.children[index].innerText;
      let history = JSON.parse(localStorage.getItem("songs")) || [];
      history.unshift({ name: this.$refs.list.children[index].innerText });
      localStorage.setItem("songs", JSON.stringify(history));
      this.historyWord = history;
      this.suggestWordShow = false;
      this.historyShow = false;
      this.wordShow = false;
      this.pipei = true;
      this.$refs.ipt.value = this.$refs.list.children[index].innerText;
    },
    getSuggestWord(index) {
      this.value = this.$refs.suggestWordShow.children[index].innerText;
      this.suggestWordShow = false;
      this.wordShow = false;
      this.historyShow = false;
      this.pipei = true;
      let history = JSON.parse(localStorage.getItem("songs")) || [];
      history.unshift({ name: this.$refs.ipt.value });
      localStorage.setItem("songs", JSON.stringify(history));
      this.historyWord = history;
      this.$refs.ipt.value =
        this.$refs.suggestWordShow.children[index].innerText;
    },

    suggest() {
      this.suggestWordShow = true;
      if (this.$refs.ipt.value == "") {
        this.songList = [];
        this.suggestWordShow = false;
        this.wordShow = true;
        this.historyShow = true;
        this.pipei = false;
      } else {
        this.axios
          .get(
            `https://apis.netstart.cn/music/search/suggest?type=mobile&keywords=${this.$refs.ipt.value}}`
          )
          .then((res) => {
            this.suggestWord = res.data.result.allMatch;
          });
      }
    },
    historySearch(index) {
      this.value = this.$refs.his[index].innerText;
      this.suggestWordShow = false;
      this.wordShow = false;
      this.historyShow = false;
      this.pipei = true;
      this.$refs.ipt.value = this.$refs.his[index].innerText;
    },
    del(index) {
      let a = this.historyWord.filter((item) => {
        if (item != this.historyWord[index]) {
          return item;
        }
      });
      let history = JSON.parse(localStorage.getItem("songs")) || [];
      this.historyWord = a;
      history = a;
      localStorage.setItem("songs", JSON.stringify(history));
    },
    iptdel() {
      this.$refs.ipt.value = "";
      this.songList = [];
      this.suggestWordShow = false;
      this.wordShow = true;
      this.historyShow = true;
      this.pipei = false;
    },
  },
};
</script>
<style lang="less" scoped>
.search {
  .margin {
    margin-bottom: 70px;
  }
  .ipt {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    .search-img {
      width: 13px;
      height: 13px;
      background-image: url("../image/search.svg");
      position: absolute;
      left: 20px;
    }
    input {
      text-indent: 2em;
      width: 95%;
      height: 30px;
      border-radius: 15px;
      border: none;
      outline: none;
      background-color: #e7e7e7;
    }
    .mask {
      position: absolute;
      width: 100%;
      height: 100vh;
      background-color: rgba(8, 1, 1, 0.8);
      top: 55px;
      display: flex;
      justify-content: center;
      .suggest {
        width: 95%;
        background-color: white;
        position: absolute;
        top: 0px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
          }
        }
      }
    }
  }
  .history {
    ul {
      display: flex;
      justify-content: space-evenly;
      padding-top: 0px;

      .text {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 15px;
          margin-right: 10px;
        }
      }
    }
  }
  .hotWord {
    p {
      font-size: 14px;
      margin: 10px 10px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      padding-bottom: 0px;

      li {
        border: 1px solid #ccc;
        border-radius: 15px;
        display: inline-block;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 32px;
        color: #333;
      }
    }
  }
  ul {
    padding: 0 10px;
    .title {
      font-size: 12px;
      line-height: 16px;
      color: #666;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      height: 30px;
      line-height: 30px;
    }
  }
  .loading {
    margin-top: 10%;
  }
}
</style>