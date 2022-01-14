<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="flex-1">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#2B4677]
            w-[20rem] mob:w-[13.8rem] border-b border-[#2B4677] pt-10">
          Our mission
        </div>
      </div>
      <div class="flex-1 ml-[3.5rem] flex mob:ml-0 mob:flex-none">
        <div
          class="flex flex-row items-center leading-none flex-1 mob:flex-wrap">
          <img
            src="@/assets/logo.svg"
            class="w-12 mr-[1.375rem] mob:w-8 mob:mr-4"
            alt="">
          <img
            src="@/assets/evo.svg"
            class="w-[8.625rem] mr-3 mob:w-[5.8rem] mob:mr-2.5"
            alt="">
          <div
            class=" font-medium text-[3.125rem] mob:text-[1.68rem] text-[#F9FAFF]">
            controls
          </div>
          <div
            class="ml-[2.6rem] w-[29rem] rounded-full bg-[#F9FAFF] h-[4.75rem] font-bold
              text-[1.875rem] text-[#31558A] text-center leading-[4.75rem] mob:w-[16.2rem]
              mob:h-[2.7rem] mob:leading-[2.7rem] mob:text-base mob:ml-0 mob:mt-[2.25rem]">
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
