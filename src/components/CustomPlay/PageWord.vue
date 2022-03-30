<template>
  <div class="Pageword" @click="$emit('ToCD', true)">
    <ul
      class="list"
      ref="list"
      :style="{ transform: `translateY(-${liHeight}px)` }"
    >
      <li
        v-for="(item, index) in parsedWord"
        :key="index"
        :class="{ active: currentWord.index == index }"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WyyMusicPageword",
  props: {
    currentSong: Object,
    currentTime: Number,
  },

  data() {
    return {
      songWord: "",
      liHeight: 0,
    };
  },
  created() {
    this.axios
      .get("https://apis.netstart.cn/music/lyric?id=" + this.currentSong.id)
      .then((res) => {
        this.songWord = res.data.lrc.lyric;
        this.$nextTick(function () {
          var h = [...this.$refs.list.querySelectorAll("li")]
            .slice(0, this.currentWord.index)
            .reduce(function (total, element) {
              return total + Number(element.offsetHeight);
            }, 0);

          if (h < 397 / 2) {
            this.liHeight = 0;
          } else {
            this.liHeight = h - 397 / 2;
          }
        });
      });
  },

  computed: {
    parsedWord() {
      return this.Word(this.songWord);
    },
    currentWord() {
      return this.findWord(this.parsedWord, this.currentTime);
    },
  },
  methods: {
    Word(value) {
      return value
        .split("\n")
        .filter((i) => i)
        .map((i) => {
          var texts = i.match(/^\[(\d{2}:\d{2}\.\d{2,3})\](.*)/);
          var times = texts[1].split(":");
          return {
            time: times[0] * 60 + times[1] * 1,
            text: texts[2],
          };
        });
    },
    findWord(parsedWord, currentTime) {
      var lts = parsedWord.filter((i) => i.time < currentTime);

      return {
        index: lts.length - 1,
        word: lts[lts.length - 1],
      };
    },
  },

  watch: {
    "currentWord.index"(n) {
      var h = [...this.$refs.list.querySelectorAll("li")]
        .slice(0, n)
        .reduce(function (total, element) {
          return total + Number(element.offsetHeight);
        }, 0);

      if (h < 397 / 2) {
        this.liHeight = 0;
      } else {
        this.liHeight = h - 397 / 2;
      }
    },
    currentSong() {
      this.axios
        .get("https://apis.netstart.cn/music/lyric?id=" + this.currentSong.id)
        .then((res) => {
          this.songWord = res.data.lrc.lyric;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.Pageword {
  flex: 1;
  // background-color: pink;
  overflow: hidden;
  text-align: center;
  padding: 20px 0;
  ul {
    transition: all 0.5s linear;
    li {
      font-size: 14px;
      padding: 5px 0px;
      color: #c4c4c4;
      &.active {
        font-size: 20px;
        color: white;
      }
    }
  }
}
</style>