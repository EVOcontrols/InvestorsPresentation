<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#759CFF] text-opacity-30
            w-[30rem] mob:w-[13.8rem] border-b border-[#355188] pt-10">
          Traction
        </div>
      </div>
      <div
        class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-12
          mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[13.1rem] mob:mt-3">
        <span class="text-[#F9FAFF] font-bold">Market approach</span>
      </div>
      <div class="flex flex-col flex-1 justify-center mb-[20%]">
        <div
          class="text-2xl text-[#BFDFFF] leading-7 w-[26.25rem] mb-[3.75rem] mob:text-base
            mob:w-[13.1rem] mob:mb-[1.38rem]">
          We are attacking market through 3 main channels:
        </div>
        <template v-if="device === 'desktop'">
          <div
            class="flex flex-row items-center w-[65rem]"
            :class="{ 'mt-6': !!i }"
            v-for="(row, i) in rows"
            :key="i">
            <img :src="require(`@/assets/${row.pic}.svg`)" alt="" class="w-[3.125rem]">
            <div class="flex flex-col text-[1.375rem] font-bold leading-[1.68rem] ml-4">
              <div class="text-[#F9FAFF]">
                {{ row.title }}
              </div>
              <div class="text-[#6F91B9]">
                {{ row.text }}
              </div>
            </div>
            <div class="flex-1 flex flex-row items-center px-[3.375rem]">
              <div class="h-[0.187rem] flex-1 bg-[#2298FF33]"></div>
              <img src="@/assets/arrow.svg" alt="" class="w-3 -ml-2">
            </div>
            <div class="w-[31rem] h-[4.375rem] rounded-2xl bg-[#2298FF26] flex items-center text-xl
              text-[#BFDFFF] leading-6 pl-[1.875rem] pr-[1.68rem]">
              {{ row.caption }}
            </div>
          </div>
        </template>
        <template v-else>
          <div
            class="flex flex-col w-[19.5rem] h-[6.75rem] rounded-2xl bg-[#2298FF26] px-4 py-2"
            :class="{ 'mt-[2.3rem]': !!i }"
            v-for="(row, i) in rows"
            :key="i">
            <div class="flex flex-row border-b border-[#6280BC] pb-2 items-center">
              <img :src="require(`@/assets/${row.pic}.svg`)" alt="" class="w-[2.3rem]">
              <div class="flex flex-col font-bold text-[0.875rem] leading-4 ml-4">
                <div class="text-[#F9FAFF]">
                {{ row.title }}
                </div>
                <div class="text-[#6F91B9]">
                  {{ row.text }}
                </div>
              </div>
            </div>
            <div class="text-xs text-[#BFDFFF] leading-[0.875rem] pt-2">
              {{ row.caption }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg11.png');
const bgm = require('../../assets/bg/mobile/bg11.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    rows: [
      {
        pic: 'pic12',
        title: 'Integrators',
        text: 'onboarding',
        caption: '1 integrator is bringing 2-5 installations a month in average',
      },
      {
        pic: 'pic13',
        title: 'End products',
        text: 'development',
        caption: 'We provide businesses with fully developed end product, where NG is a main core',
      },
      {
        pic: 'pic14',
        title: 'Corporate chains',
        text: 'integrations',
        caption: 'Being integrated in brandbooks we create continious supply for every new business asset',
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
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
table td {
  vertical-align: middle;
}
</style>
