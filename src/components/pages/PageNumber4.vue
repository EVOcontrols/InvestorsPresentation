<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem]">
      <div class="flex-1">
        <div
          class=" font-bold text-[2.5rem] text-[#759CFF] text-opacity-30 w-[20rem] border-b
            border-[#355188] pt-10">
          Our mission
        </div>
      </div>
      <div class="flex-1 ml-[3.5rem] flex">
        <div class="flex flex-row items-center leading-none flex-1">
          <img src="@/assets/logo.svg" class="w-12 mr-[1.375rem]" alt="">
          <img src="@/assets/evo.svg" class="w-[8.625rem] mr-3" alt="">
          <div class=" font-medium text-[3.125rem] text-[#F9FAFF]">controls</div>
          <div
            class="ml-[2.6rem] w-[29rem] rounded-full bg-[#F9FAFF] h-[4.75rem] font-bold
              text-[1.875rem] text-[#31558A] text-center leading-[4.75rem]">
            Affordable automation
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg4.png');
const bgm = require('../../assets/bg/mobile/bg4.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    texts: [
      'Human errors',
      'High energy costs',
      'High labour costs',
    ],
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
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
