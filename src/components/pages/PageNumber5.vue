<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] text-[#759CFF] text-opacity-30 w-[33.6rem] border-b
            border-[#355188] pt-10 flex flex-row">
            <img src="@/assets/evo_grey.svg" alt="" class="w-[4.875rem]">
            <span class="ml-2 mt-0.5">
              solution
            </span>
        </div>
      </div>
      <div class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8">
        <span class="text-[#F9FAFF] font-bold">Making automation accessible</span>
      </div>
      <div class="flex flex-col flex-1 justify-center pb-28">
        <div class="text-[1.375rem] text-[#BFDFFF] leading-[1.68rem] mb-[1.875rem]">
          EVO controls solutions compared to<br>
          existing options are:
        </div>
        <div class="flex flex-row">
          <div
            class="flex flex-row items-center w-[21.3rem] h-[6.25rem] bg-[#F9FAFF] rounded-full"
            :class="{ 'mr-[1.625rem]': i !== 2 }"
            v-for="(tile, i) in tiles"
            :key="i">
            <div
              class="flex items-center justify-center w-[5.3rem] h-[5.3rem] rounded-full
                bg-[#0F2540] ml-2">
              <img src="@/assets/pic3.svg" alt="" class="w-[3.125rem]" v-if="!i">
              <img src="@/assets/pic4.svg" alt="" class="w-[3.125rem]" v-else-if="i === 1">
              <img src="@/assets/pic5.svg" alt="" class="w-[3.125rem]" v-else>
            </div>
            <div class="text-[3.125rem] font-bold text-[#31558A]" :class="tile.ml">
              {{ tile.x }}
            </div>
            <div
              class="ml-3 text-[1.375rem] text-[#31558A] leading-[1.375rem]"
              :class="tile.w">
              {{ tile.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg5.png');
const bgm = require('../../assets/bg/mobile/bg5.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    tiles: [
      {
        x: '2-5x',
        text: 'better price',
        ml: 'ml-[1.3rem]',
        w: 'w-[5.4rem]',
      },
      {
        x: '5x',
        text: 'faster to learn',
        ml: 'ml-[1.75rem]',
        w: 'w-[4.875rem]',
      },
      {
        x: '3x',
        text: 'easier to install',
        ml: 'ml-[1.625rem]',
        w: 'w-[5.4rem]',
      },
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
