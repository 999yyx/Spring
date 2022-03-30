<template>
  <div class="list">
    <div class="mask" @click="$emit('hideListplay', false)"></div>
    <div class="listPlay">
      <NewSongItem
        v-for="item in ListPlay"
        :key="item.id"
        :item="item"
        :currentSong="currentSong"
        :playing="playing"
        @click.native.stop="$emit('updateListPlay', item, true)"
      />
    </div>
  </div>
</template>

<script>
import NewSongItem from "@/components/NewSongItem.vue";
export default {
  props: {
    ListPlay: Array,
    playing: Boolean,
    currentSong: Object,
  },
  components: {
    NewSongItem,
  },
};
</script>

<style lang="less" scoped>
.list {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 1, 1, 0.8);
    top: 0px;
  }
  .listPlay {
    position: fixed;
    width: 95%;
    height: 400px;
    background-color: white;
    bottom: 0px;
    border-radius: 15px;
    margin: 10px;
    overflow: scroll;
    padding: 10px;
  }
}
</style>