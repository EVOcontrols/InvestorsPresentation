<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#2B4677]
            w-[33.5rem] border-b border-[#2B4677] pt-10 mob:w-[15.4rem]">
          Market
          <span class=" text-base text-[#2B4677] mob:text-xs">
            ***reference book attached
          </span>
        </div>
      </div>
      <div
        class="flex flex-row flex-1 items-center mob:flex-1 mob:flex-col mob:items-start">
        <div
          class="w-[35.6rem] text-[#F9FAFF] text-[3.75rem] font-bold leading-[4.25rem]
            mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[15.8rem] mob:mt-3">
          NG system is already distributed in next markets:
        </div>
        <div class="flex flex-col ml-[9rem] mob:ml-0 mob:flex-1 mob:justify-center">
          <div
            v-for="n in 3"
            :key="n"
            :class="{ 'mb-12 mob:mb-4': n !== 3 }">
            <div class="flex flex-row items-center">
              <div class="w-11 h-11 rounded-full bg-[#2298FF26] font-bold text-xl text-[#A0D3FF]
                flex items-center justify-center mr-6 mob:w-8 mob:h-8 mob:mr-5">
                {{ n }}
              </div>
              <div
                class=" text-[1.375rem] font-bold text-[#BFDFFF] w-[12.875rem] leading-6
                  mob:text-base mob:leading-4 mob:w-[9.6rem]">
                {{ texts[n - 1] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row justify-between pr-[9.4rem] pb-[4.625rem] mob:flex-wrap mob:pr-8
          mob:justify-start mob:pt-8">
        <div
          v-for="n in 9"
          :key="n"
          class="h-[4.25rem] px-3.5 rounded-2xl bg-[#2298FF26] flex items-center justify-center
            mob:h-[2.375rem] mob:px-2 mob:shrink-0 mob:rounded-lg"
          :class="{ 'mob:mr-3': n !== 5 && n !== 9, 'mob:mb-4': n < 6 }">
          <img
            :src="require(`@/assets/brands/${n}.svg`)"
            alt=""
            :style="{ width: `${widths[n - 1] * (device === 'desktop' ? 1 : 0.55)}rem` }">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg8.png');
const bgm = require('../../assets/bg/mobile/bg8.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    texts: [
      'Home&Building automation',
      'Indoor farming automation',
      'Public infrastructure automation',
    ],
    widths: [3.43, 5.375, 3.125, 2.75, 3.56, 5, 2.75, 3.06, 7.625],
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
