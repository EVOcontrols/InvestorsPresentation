<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] text-[#759CFF] text-opacity-30 w-[25.5rem] border-b
            border-[#355188] pt-10">
          Team
        </div>
      </div>
      <div class="text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8 font-normal">
        <span class="text-[#F9FAFF] font-bold">
          Key employees
        </span>
      </div>
      <div class=" flex flex-col flex-1 justify-center">
        <div class="flex flex-row items-center flex-wrap">
          <div
            v-for="(tile, i) in tiles"
            :key="i"
            class="w-[21.375rem] h-[11.125rem] rounded-2xl bg-[#2298FF26] border-[#00000036]
              border pt-4 flex flex-row shrink-0 overflow-hidden pr-4 relative"
            :class="{ 'ml-6': !!i && i !== 3, 'mb-6': i < 3 }">
            <img
              :src="require(`@/assets/people/${tile.pic}`)"
              alt=""
              class=" absolute bottom-0 left-0"
              :class="tile.picStyles">
            <div
              class=" flex-1 pl-[9.2rem]">
              <div class=" text-lg font-bold text-[#6F91B9] mb-1">
                {{ tile.position }}
              </div>
              <div class=" text-2xl font-bold text-[#BFDFFF] leading-[1.5rem] mb-2">
                {{ tile.name }}
              </div>
              <div class="text-[#6F91B9] leading-[1.125rem]">
                {{ tile.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-lg text-[#6F91B999] pt-2 pb-[4rem] ml-[50rem]">
          ***company structure attached
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg14.png');
const bgm = require('../../assets/bg/mobile/bg14.png');

export default {
  props: ['device'],
  components: {
  },

  data: () => ({
    bg: null,
    tiles: [
      {
        pic: '1.png',
        picStyles: 'w-[10.5rem]',
        textStyles: 'ml-[9.5rem]',
        position: 'CEO, co-founder',
        name: 'Stas Shumilov',
        text: 'Product designer\nAutomation specialist\nEnterpreneur',
      },
      {
        pic: '2.png',
        picStyles: 'w-[9rem]',
        textStyles: 'ml-[9rem]',
        position: 'CIO, co-founder',
        name: 'Yury Zinkevich',
        text: 'Master of finance\nRisk management expert\nEnterpreneur',
      },
      {
        pic: '3.png',
        picStyles: 'w-[12.5rem]',
        textStyles: 'ml-[9.5rem]',
        position: 'CCO, co-founder',
        name: 'Kate Metto',
        text: 'Nuclear physicist\nEnterpreneur',
      },
      {
        pic: '4.png',
        picStyles: 'w-[12rem]',
        textStyles: 'ml-[9.5rem]',
        position: 'COO',
        name: 'Artsiom Melyanchuk',
        text: '12 years creating complex automation solutions',
      },
      {
        pic: '5.png',
        picStyles: 'w-[9.5rem]',
        textStyles: 'ml-[9.5rem]',
        position: 'CMO, co-founder',
        name: 'Dmitry Liakh',
        text: 'Automation engineer\nEnterpreneur\nExperienced marketing specialist',
      },
      {
        pic: '6.png',
        picStyles: 'w-[10rem]',
        textStyles: 'ml-[rem]',
        position: 'Co-founder',
        name: 'Hans Deprez',
        text: '25 years in aviation and HW development',
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
