<template>
  <li
    class="song-card"
    @click="$router.push({ path: '/songlist', query: { id: item.id } })"
  >
    <div class="content">
      <img
        :src="`${item.picUrl}?imageView=1&type=webp&thumbnail=247x0`"
        alt=""
      />
      <span>{{ item.playCount | calcCount }}</span>
    </div>
    <h5>{{ item.name }}</h5>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  filters: {
    calcCount: function (value) {
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style lang="less" scoped>
.song-card {
  width: 30%;
  flex-grow: 1;
  margin-bottom: 10px;
  &:nth-child(3n + 2) {
    margin: 0px 5px;
  }
  .content {
    position: relative;

    span {
      position: absolute;
      top: 5px;
      right: 5px;
      color: white;
      font-size: 10px;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      &::before {
        width: 10px;
        height: 10px;
        content: "";
        display: inline-block;
        background: url("../image/headphone.svg");
        position: absolute;
        top: 4px;
        left: -12px;
      }
    }
  }
  h5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
    padding: 0px 5px;
  }
}
</style>