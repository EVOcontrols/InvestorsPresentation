<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex flex-col flex-1 pl-[6.375rem] mob:pl-8">
      <div class="flex-1"></div>
      <div class="flex flex-row items-center leading-none flex-1 mob:flex-none">
        <img
          src="@/assets/logo.svg"
          class="w-12 mr-[1.375rem] mob:w-8 mob:mr-4"
          alt="">
        <img src="@/assets/evo.svg" class="w-[8.625rem] mr-3 mob:w-[5.8rem]" alt="">
        <div class=" font-medium text-[3.125rem] mob:text-[1.75rem] text-[#F9FAFF]">
          controls
        </div>
      </div>
      <div class="flex-1">
        <div
          class=" inline-block w-[25.3rem] mob:w-[15.6rem] text-2xl mob:text-base text-[#A0D3FF]
            text-opacity-60 leading-8 mob:leading-[1.375rem] mt-8 mob:mt-[2.7rem]">
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
