<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">

  </div>
</template>

<script>
const bgd = require('../../assets/desktop/bg1.png');
const bgm = require('../../assets/mobile/bg1.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
  }),
  created() {
    this.bg = this.device === 'desktop' ? bgd : bgm;
  },
  mounted() {

  },
};
</script>

<style scoped>
.page {
  background-position: left bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
