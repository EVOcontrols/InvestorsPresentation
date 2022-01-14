<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="flex-1">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#2B4677]
            w-[31.6rem] mob:w-[17rem] border-b border-[#2B4677] pt-10">
          Investments proposal
        </div>
      </div>
      <div class="flex-1 flex">
        <div
          class="flex flex-row items-center leading-none mob:flex-col mob:items-start">
          <div
            class="text-[#F9FAFF] text-[3.75rem] font-bold leading-[4.25rem]
              w-[32.6rem] mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[17.8rem] mob:mt-6">
            We are looking<br>
            for early stage<br>
            investments
            <span class="mob:hidden">round</span>
          </div>
          <div
            class="ml-[10.8rem] w-[19.5rem] rounded-full bg-[#F9FAFF] h-[5.5rem] font-bold
              text-[3.125rem] text-[#31558A] text-center leading-[5.5rem] mob:w-[13.5rem]
              mob:h-[3.8rem] mob:leading-[3.8rem] mob:text-[1.875rem] mob:ml-[3.1rem]
              mob:mt-[4.9rem]">
            $3 mln
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg15.png');
const bgm = require('../../assets/bg/mobile/bg15.png');

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
