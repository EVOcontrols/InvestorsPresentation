<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] text-[#759CFF] text-opacity-30 w-[33.25rem] border-b
            border-[#355188] pt-10 flex flex-row">
            <img src="@/assets/evo_grey.svg" alt="" class="w-[4.875rem]">
            <span class="ml-2 mt-0.5">
              solution
            </span>
        </div>
      </div>
      <div class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8">
        <span class="text-[#F9FAFF] font-bold">Automation system</span>
      </div>
      <div class="flex flex-row flex-1 pb-28 items-center">
        <div class="flex flex-col text-[1.375rem] text-[#BFDFFF] leading-[1.68rem]">
          <div class="w-[24.2rem] mb-[4.5rem]">
            We provide easy and simple way to
            <span class="text-[#F9FAFF] font-bold">automate all processes</span>
            with our turnkey combination of hardware and software products.
          </div>
          <div class="w-[25.25rem]">
            Our equipment allows to collect data from any sensors, cameras and other
            hardware sources to manage any engineering system automatically with full
            control from anywhere in the world.
          </div>
        </div>
        <div class="inline-grid grid-cols-2 gap-x-8 gap-y-[1.875rem] ml-[9rem]">
          <div
            v-for="(tile, i) in tiles"
            :key="i"
            class="w-[14.1rem] h-[8.9rem] rounded-2xl bg-[#2298FF26] flex flex-row items-center
              pl-6">
            <img src="@/assets/pic6.svg" alt="" :class="tile.w" v-if="!i">
            <img src="@/assets/pic7.svg" alt="" :class="tile.w" v-else-if="i === 1">
            <img src="@/assets/pic8.svg" alt="" :class="tile.w" v-else-if="i === 2">
            <img src="@/assets/pic9.svg" alt="" :class="tile.w" v-else>
            <div class="ml-[1.75rem] text-lg font-bold leading-[1.375rem]">
              <div class="text-[#BFDFFF]">{{ tile.title }}</div>
              <div class="text-[#BFDFFF80]">{{ tile.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg6.png');
const bgm = require('../../assets/bg/mobile/bg6.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    tiles: [
      { title: 'Сontroller', text: 'EVO NGC', w: 'w-[3.625rem]' },
      { title: 'App', text: 'EVO App', w: 'w-[3rem]' },
      { title: 'Cloud', text: 'EVO Cloud', w: 'w-[3.9rem]' },
      { title: 'Neural', text: 'networks', w: 'w-[3.625rem]' },
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
