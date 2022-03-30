<template >
  <div>
    <li>{{ list }}</li>
  </div>
</template>

<script>
export default {
  props: {
    list: Object,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
div {
  li {
    list-style: none;
  }
}
</style>