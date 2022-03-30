<template>
  <div class="customPaly">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated  fadeOut"
    >
      <RunBar
        :playShow="playShow"
        :currentSong="currentSong"
        v-if="currentSong && playShow"
        :playing="playing"
        :durationTime="durationTime"
        :currentTime="currentTime"
        @audio-play="$emit('audio-play')"
        @audio-pause="$emit('audio-pause')"
        @change="$emit('change', $event)"
        @changeListPlay="$emit('changeListPlay', (ListPlayShow = $event))"
        @hideListplay="$emit('hideListplay', (ListPlayShow = $event))"
        :ListPlayShow="ListPlayShow"
        :ListPlay="ListPlay"
        @updateListPlay="updateListPlay"
      />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated bounceOutDown"
    >
      <RunPage
        v-if="currentSong && !playShow"
        :playShow="playShow"
        :currentSong="currentSong"
        :durationTime="durationTime"
        :currentTime="currentTime"
        :playing="playing"
        :PLayMode="PLayMode"
        @change="$emit('change', $event)"
        @changePlay="$emit('changePlay', $event)"
        @pull-change="$emit('pull-change', $event)"
        :ListPlayShow="ListPlayShow"
        @changeListPlay="ListPlayShow = $event"
        @hideListplay="ListPlayShow = $event"
        :ListPlay="ListPlay"
        @updateListPlay="updateListPlayPage"
        @updateListPlayPage="updateListPlayPage"
        @nextsong="$emit('nextsong', $event)"
        @prevsong="$emit('prevsong', $event)"
        @repeatMode="$emit('repeatMode', $event)"
        @changePlayMode="$emit('changePlayMode', $event)"
      />
    </transition>
  </div>
</template>

<script>
import RunBar from "./RunBar.vue";
import RunPage from "./RunPage.vue";
export default {
  components: {
    RunBar,
    RunPage,
  },
  props: {
    currentSong: Object,
    durationTime: Number,
    currentTime: Number,
    playing: Boolean,
    playShow: Boolean,
    ListPlay: Array,
    PLayMode: Number,
  },
  data() {
    return {
      ListPlayShow: false,
    };
  },
  methods: {
    updateListPlay(e, p) {
      this.$emit("updateListPlay", e, p);
    },
    updateListPlayPage(e, p) {
      this.$emit("updateListPlayPage", e, p);
    },
  },
};
</script>

<style lang="less" scoped>
</style>