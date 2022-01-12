<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex flex-col flex-1 pl-[6.375rem]">
      <div class="flex-1"></div>
      <div class="flex flex-row items-center leading-none flex-1">
        <img src="@/assets/logo.svg" class="w-12 mr-[1.375rem]" alt="">
        <img src="@/assets/evo.svg" class="w-[8.625rem] mr-3" alt="">
        <div class=" font-medium text-[3.125rem] text-[#F9FAFF]">controls</div>
      </div>
      <div class="flex-1">
        <div
          class=" inline-block w-[25.3rem] text-2xl text-[#A0D3FF] text-opacity-60 leading-8 mt-8">
          The developer and manufacturer of
          <span class="text-[#A0D3FF] text-opacity-100">hardware and software solutions</span>
          for automation.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg1.png');
const bgm = require('../../assets/bg/mobile/bg1.png');

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

<style lang="postcss" scoped>
.page {
  background-position: left bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
