<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] text-[#759CFF] text-opacity-30 w-[37rem] border-b
            border-[#355188] pt-10">
          The problem
        </div>
      </div>
      <div class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[3.75rem] mb-8">
        Automation is still
        <span class="text-[#F9FAFF] font-bold">too expensive</span>
      </div>
      <div class="flex flex-row justify-around ml-[-6.3rem] items-center flex-1 mb-[20%]">
        <div class="text-[1.375rem] text-[#BFDFFF] inline-block w-[28.25rem] leading-[1.68rem]">
          Still at beginning of 2022 only
          <span class="text-[#F9FAFF] font-bold">5%</span>
          of buildings and insfrastructural assets
          <span class="text-[#F9FAFF] font-bold">in North America, 3% in Europe</span>
          and
          <span class="text-[#F9FAFF] font-bold">1% in Russia</span>
          and
          <span class="text-[#F9FAFF] font-bold">Customs Union</span>
          , are automated due to:
        </div>
        <div class="flex flex-col">
          <div
            class="w-[28.5rem] py-6 rounded-2xl bg-[#2298FF26]"
            :class="{ 'mb-[1.375rem]': !i }"
            v-for="(tile, i) in tiles"
            :key="tile.pic">
            <div class="flex flex-row items-center">
              <img src="@/assets/pic1.svg" alt="" class="w-[3.75rem] ml-8" v-if="!i">
              <img src="@/assets/pic2.svg" alt="" class="w-[3.75rem] ml-8" v-else>
              <div class="ml-4">
                <div class=" font-bold text-xl text-[#F9FAFF] leading-6" v-html="tile.title">
                </div>
                <div
                  class="font-bold text-lg text-[#BFDFFF80] leading-[1.375rem]" v-html="tile.text">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg3.png');
const bgm = require('../../assets/bg/mobile/bg3.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    tiles: [
      { title: 'High equipment price', text: 'Due to monopoly of several<br>world known manufecturers' },
      { title: 'Extremelly high integration cost', text: 'Due to lack of specialists, high investments to start as integrator' },
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
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
