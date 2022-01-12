<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#759CFF] text-opacity-30
            w-[33.25rem] border-b border-[#355188] pt-10 flex flex-row mob:w-[13.8rem]">
            <img src="@/assets/evo_grey.svg" alt="" class="w-[4.875rem] mob:w-[3.375rem]">
            <span class="ml-2 mt-0.5">
              solution
            </span>
        </div>
      </div>
      <div
        class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8
          mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[15.25rem] mob:mt-3">
        <span class="text-[#F9FAFF] font-bold">Automation system</span>
      </div>
      <div
        class="flex flex-row flex-1 pb-28 items-center mob:flex-col mob:items-start">
        <div
          class="flex flex-col text-[1.375rem] text-[#BFDFFF] leading-[1.68rem]
            mob:text-base mob:leading-5">
          <div class="w-[24.2rem] mb-[4.5rem] mob:w-[17rem] mob:mb-0">
            We provide easy and simple way to
            <span class="text-[#F9FAFF] font-bold">automate all processes</span>
            with our turnkey combination of hardware and software products.
          </div>
          <page-number-6-tiles
            class="mob:my-10"
            :tiles="tiles"
            v-if="device === 'mobile'" />
          <div class="w-[25.25rem] mob:w-[17rem]">
            Our equipment allows to collect data from any sensors, cameras and other
            hardware sources to manage any engineering system automatically with full
            control from anywhere in the world.
          </div>
        </div>
        <page-number-6-tiles :tiles="tiles" v-if="device === 'desktop'" />
      </div>
    </div>
  </div>
</template>

<script>
import PageNumber6Tiles from '../PageNumber6Tiles.vue';

const bgd = require('../../assets/bg/desktop/bg6.png');
const bgm = require('../../assets/bg/mobile/bg6.png');

export default {
  props: ['device'],
  components: {
    PageNumber6Tiles,
  },
  data: () => ({
    bg: null,
    tiles: [
      { title: 'Сontroller', text: 'EVO NGC', w: 'w-[3.625rem] mob:w-[2.25rem]' },
      { title: 'App', text: 'EVO App', w: 'w-[3rem] mob:w-[1.875rem]' },
      { title: 'Cloud', text: 'EVO Cloud', w: 'w-[3.9rem] mob:w-[2.5rem]' },
      { title: 'Neural', text: 'networks', w: 'w-[3.625rem] mob:w-[2.3rem]' },
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
