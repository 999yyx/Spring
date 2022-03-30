<template>
  <div
    class="newSongLi"
    :class="{
      active: currentSong && currentSong.id === item.id,
      playing: playing,
    }"
  >
    <li>
      <div class="order" v-if="order || index + 1">
        {{ order ? order : index + 1 }}
      </div>
      <div class="uname">
        <p class="songName">
          {{ item.name }}
          <span>{{ item | anotherName }}</span>
        </p>
        <p class="singerName">
          <span class="sq"></span>
          {{ item | singers }}-{{ item | albumName }}
        </p>
      </div>
    </li>
    <div class="play">
      <div class="playState">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    order: Number,
    currentSong: Object,
    playing: Boolean,
    index: Number,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.newSongLi {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  li {
    width: 90%;
    height: 50px;
    font-weight: 500;
    line-height: 25px;
    list-style: none;
    display: flex;
    .order {
      width: 40px;
      line-height: 50px;
      color: #999;
      text-align: center;
      font-size: 17px;
    }

    .uname {
      padding: 5px 0;
      width: 80%;
      .songName {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .singerName {
        color: #a5a5a5;
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        .sq {
          content: "";
          display: inline-block;
          background: url("../image/index_icon_2x.png") no-repeat;
          width: 15px;
          height: 10px;
          background-size: 164px 101px;
        }
      }
    }
  }
  .play {
    width: 10%;
    background: url("../image/index_icon_2x.png") no-repeat -17px 13px;
    background-size: 166px 97px;
    display: flex;
    justify-content: center;
    align-items: center;
    .playState {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-around;
      display: none;
    }
  }
  &.active {
    .play {
      background: url("");
      .playState {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-evenly;

        span {
          width: 5%;
          height: 100%;
          display: inline-block;
          background-color: red;
          animation: playStateMove 1s linear infinite alternate;
          transform-origin: bottom;
          animation-play-state: paused;
          &:nth-child(1) {
            animation-delay: 0.1s;
          }
          &:nth-child(2) {
            animation-delay: 0.6s;
          }
          &:nth-child(3) {
            animation-delay: 0.3s;
          }
          &:nth-child(4) {
            animation-delay: 0.8s;
          }
        }
      }
    }
    &.playing {
      .play {
        .playState {
          span {
            animation-play-state: running;
          }
        }
      }
    }
  }
  .del {
    width: 15px;
    display: flex;
    margin: 0 10px;
    img {
    }
  }
}
#app > div.hot > div.songList > div:nth-child(-n + 3) > li > div.order {
  color: red;
}
@keyframes playStateMove {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>