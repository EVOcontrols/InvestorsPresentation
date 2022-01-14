<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="flex-1">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#2B4677]
            w-[27.5rem] mob:w-[13.8rem] border-b border-[#2B4677] pt-10">
          The problem
        </div>
      </div>
      <div class="flex flex-row mob:flex-col">
        <div
          class="w-[35.6rem] text-[#BFDFFF] text-[3.75rem] mob:text-[2.5rem] leading-[4.25rem]
            mob:leading-[2.8rem] mob:w-[18.25rem]">
          Generally
          <span class="text-[#F9FAFF] font-bold">automation</span>
          is used to
          <span class="text-[#F9FAFF] font-bold">solve problems</span>
          of
        </div>
        <div class="w-[4.2rem] mob:h-12"></div>
        <div class="flex flex-col">
          <div
            v-for="n in 3"
            :key="n"
            :class="{ 'mb-12 mob:mb-4': n !== 3 }">
            <div class="flex flex-row items-center">
              <div class="w-11 h-11 rounded-full bg-[#2298FF26] font-bold text-xl text-[#A0D3FF]
                flex items-center justify-center mr-6 mob:mr-[1.125rem] shrink-0 mob:w-8 mob:h-8">
                {{ n }}
              </div>
              <div class=" text-2xl mob:text-base font-bold text-[#BFDFFF] whitespace-nowrap">
                {{ texts[n - 1] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg2.png');
const bgm = require('../../assets/bg/mobile/bg2.png');

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
