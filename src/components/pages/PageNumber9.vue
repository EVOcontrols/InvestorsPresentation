<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] text-[#759CFF] text-opacity-30 w-[24.5rem] border-b
            border-[#355188] pt-10">
          Market
        </div>
      </div>
      <div class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8">
        <span class="text-[#F9FAFF] font-bold">Capitalization</span>
      </div>
      <div class="flex flex-row flex-1 pb-[8rem] items-center">
        <div
          v-for="(tile, i) in tiles"
          :key="i"
          class="w-[21.375rem] h-[21.75rem] rounded-[1.375rem] bg-[#2298FF26] border-[#00000036]
            border pt-6 flex flex-col"
          :class="{ 'ml-6': !!i }">
          <div class="w-[16rem] font-bold text-xl text-[#F9FAFF] pl-[1.68rem]">
            {{ tile.title }}
          </div>
          <div class="flex-1 flex flex-row items-center justify-center pb-4">
            <div
              class="rounded-full bg-[#8EB7F4] flex flex-col items-center justify-center"
              :class="tile.smallWidth">
              <div class="text-[0.81rem] font-bold text-[#395A81] leading-none">
                {{ tile.smallText1 }}
              </div>
              <div class="text-[0.56rem] font-bold text-[#395A81] leading-none pl-2">
                {{ tile.smallText2 }}
              </div>
            </div>
            <div
              class="rounded-full bg-[#185FCA] flex flex-col items-center justify-center -ml-2"
              :class="tile.bigWidth">
              <div class="text-[1.375rem] font-bold text-[#F0F7FF] leading-none">
                {{ tile.bigText1 }}
              </div>
              <div class="text-[0.75rem] font-bold text-[#CAE3FF] leading-1 pl-2">
                {{ tile.bigText2 }}
              </div>
            </div>
          </div>
          <div class="text-sm text-[#608ABB] text-center pb-6">
            {{ tile.caption }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg9.png');
const bgm = require('../../assets/bg/mobile/bg9.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    tiles: [
      {
        title: 'Home&building automation',
        smallText1: '$73,5b',
        smallText2: 'in 2021',
        bigText1: '$122b',
        bigText2: 'by 2027',
        smallWidth: 'w-[4.43rem] h-[4.43rem]',
        bigWidth: 'w-[8.75rem] h-[8.75rem]',
        caption: '* CAGR of 8.80%',
      },
      {
        title: 'Indoor farming automation',
        smallText1: '$2,5b',
        smallText2: 'in 2019',
        bigText1: '$3,5b',
        bigText2: 'by 2027',
        smallWidth: 'w-[3.8rem] h-[3.8rem]',
        bigWidth: 'w-[5.8rem] h-[5.8rem]',
        caption: '* CAGR of 14.50%',
      },
      {
        title: 'Public infrastructure automation',
        smallText1: '$26b',
        smallText2: 'in 2020',
        bigText1: '$87,5b',
        bigText2: 'by 2027',
        smallWidth: 'w-[4.375rem] h-[4.375rem]',
        bigWidth: 'w-[11rem] h-[11rem]',
        caption: '* CAGR of 22.50%',
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
