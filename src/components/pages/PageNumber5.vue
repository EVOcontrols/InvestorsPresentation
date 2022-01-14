<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#2B4677]
            w-[33.6rem] border-b border-[#2B4677] pt-10 flex flex-row mob:w-[13.875rem]">
            <img
              src="@/assets/evo_grey.svg"
              alt=""
              class="w-[4.875rem] mob:w-[3.375rem]">
            <span class="ml-2 mt-0.5">
              solution
            </span>
        </div>
      </div>
      <div
        class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8 mob:text-[2.5rem]
          mob:leading-[2.8rem] mob:w-[15.25rem] mob:mt-3">
        <span class="text-[#F9FAFF] font-bold">Making automation accessible</span>
      </div>
      <div class="flex flex-col flex-1 justify-center pb-28">
        <div
          class="text-[1.375rem] text-[#BFDFFF] leading-[1.68rem] mb-[1.875rem] mob:text-base
            mob:leading-5">
          EVO controls solutions compared to<br>
          existing options are:
        </div>
        <div class="flex flex-row mob:flex-col">
          <div
            class="flex flex-row items-center w-[21.3rem] h-[6.25rem] bg-[#F9FAFF] rounded-full
              mob:w-[11rem] mob:h-[3.25rem]"
            :class="{ 'mr-[1.625rem] mob:mb-3': i !== 2 }"
            v-for="(tile, i) in tiles"
            :key="i">
            <div
              class="flex items-center justify-center w-[5.3rem] h-[5.3rem] rounded-full
                bg-[#0F2540] ml-2 mob:w-[2.75rem] mob:h-[2.75rem] mob:ml-[0.31rem]
                shrink-0">
              <img
                src="@/assets/pic3.svg"
                alt=""
                class="w-[3.125rem] mob:w-[1.625rem]"
                v-if="!i">
              <img
                src="@/assets/pic4.svg"
                alt=""
                class="w-[3.125rem] mob:w-[1.625rem]"
                v-else-if="i === 1">
              <img
                src="@/assets/pic5.svg"
                alt=""
                class="w-[3.125rem] mob:w-[1.625rem]"
                v-else>
            </div>
            <div
              class="text-[3.125rem] font-bold text-[#31558A] mob:text-[1.56rem] whitespace-nowrap"
              :class="tile.ml">
              {{ tile.x }}
            </div>
            <div
              class="ml-3 text-[1.375rem] text-[#31558A] leading-[1.375rem] mob:text-xs
                mob:leading-[0.875rem] mob:ml-[0.5rem]"
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
        ml: 'ml-[1.3rem] mob:ml-[0.68rem]',
        w: 'w-[5.4rem] mob:w-[2.75rem]',
      },
      {
        x: '5x',
        text: 'faster to learn',
        ml: 'ml-[1.75rem] mob:ml-[0.875rem]',
        w: 'w-[4.875rem] mob:w-[2.75rem]',
      },
      {
        x: '3x',
        text: 'easier to install',
        ml: 'ml-[1.625rem] mob:ml-[0.875rem]',
        w: 'w-[5.4rem] mob:w-[3rem]',
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
