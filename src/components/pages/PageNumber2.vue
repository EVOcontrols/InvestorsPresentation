<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem]">
      <div class="flex-1">
        <div
          class=" font-bold text-[2.5rem] text-[#759CFF] text-opacity-30 w-[27.5rem] border-b
            border-[#355188] pt-10">
          The problem
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-[35.6rem] text-[#BFDFFF] text-[3.75rem] leading-[4.25rem]">
          Generally
          <span class="text-[#F9FAFF] font-bold">automation</span>
          is used to
          <span class="text-[#F9FAFF] font-bold">solve problems</span>
          of
        </div>
        <div class="w-[4.2rem]"></div>
        <div class="flex flex-col">
          <div
            v-for="n in 3"
            :key="n"
            :class="{ 'mb-12': n !== 3 }">
            <div class="flex flex-row items-center">
              <div class="w-11 h-11 rounded-full bg-[#2298FF26] font-bold text-xl text-[#A0D3FF]
                flex items-center justify-center mr-6 shrink-0">
                {{ n }}
              </div>
              <div class=" text-2xl font-bold text-[#BFDFFF] whitespace-nowrap">
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
