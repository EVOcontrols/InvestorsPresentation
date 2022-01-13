<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#759CFF] text-opacity-30
            w-[25.5rem] mob:w-[17.1rem] border-b border-[#355188] pt-10">
          Team
        </div>
      </div>
      <div
        class="text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8 font-normal
          mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-auto mob:mt-3">
        <span class="text-[#F9FAFF] font-bold">
          Key employees
        </span>
      </div>
      <div
        class=" flex flex-col flex-1 justify-center mob:justify-start mob:flex-none mob:mb-0">
        <div class="flex flex-row items-center flex-wrap mob:flex-col mob:items-start">
          <div
            v-for="(tile, i) in tiles"
            :key="i"
            class="w-[21.375rem] h-[11.125rem] rounded-2xl bg-[#2298FF26] border-[#00000036]
              border pt-4 flex flex-row shrink-0 overflow-hidden pr-4 relative mob:w-[19.5rem]
              mob:h-[10.2rem] mob:rounded-[0.91rem]"
            :class="{
              'ml-6 mob:ml-0': !!i && i !== 3,
              'mb-6 mob:mb-[1.125rem]': i < 3,
              'mob:mb-[1.125rem]': i >= 3 && i !== tiles.length - 1,
            }">
            <img
              :src="require(`@/assets/people/${tile.pic}`)"
              alt=""
              class=" absolute bottom-0 left-0 mob:transform mob:scale-[0.95] mob:-m-2"
              :class="tile.picStyles">
            <div
              class=" flex-1 pl-[9.2rem] mob:pl-[9rem] mob:-mt-2">
              <div
                class=" text-lg font-bold text-[#6F91B9] mb-1 mob:text-[0.8rem] mob:mb-0">
                {{ tile.position }}
              </div>
              <div
                class="text-2xl font-bold text-[#BFDFFF] leading-[1.5rem] mb-2 mob:text-[1.375rem]">
                {{ tile.name }}
              </div>
              <div class="text-[#6F91B9] leading-[1.125rem] mob:text-[0.91rem]">
                {{ tile.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-lg text-[#6F91B999] pt-2 pb-[4rem] ml-[50rem] mob:hidden">
          ***company structure attached
        </div>
      </div>
      <div class="mob:h-16 mob:w-1"></div>
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
