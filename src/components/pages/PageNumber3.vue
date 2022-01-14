<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#2B4677]
            w-[37rem] mob:w-[15.6rem] border-b border-[#2B4677] pt-10">
          The problem
        </div>
      </div>
      <div
        class="w-[41rem] text-[#BFDFFF] text-[3.75rem] leading-[3.75rem] mb-8
          mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[16.1rem] mob:mt-2">
        Automation is
        <span class="text-[#F9FAFF] font-bold">still too expensive</span>
      </div>
      <div
        class="flex flex-row justify-around ml-[-6.3rem] items-center flex-1 mb-[20%]
          mob:flex-col mob:ml-0 mob:items-start mob:justify-center">
        <div
          class="text-[1.375rem] text-[#BFDFFF] inline-block w-[28.25rem] leading-[1.68rem]
            mob:text-base mob:leading-5 mob:w-[16.9rem]">
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
        <div class="flex flex-col mob:mt-10">
          <div
            class="w-[28.5rem] py-6 rounded-2xl bg-[#2298FF26] mob:w-[17.5rem] mob:py-4"
            :class="{ 'mb-[1.375rem]': !i }"
            v-for="(tile, i) in tiles"
            :key="tile.pic">
            <div class="flex flex-row items-center">
              <img
                src="@/assets/pic1.svg"
                alt=""
                class="w-[3.75rem] ml-8 mob:w-8 mob:ml-6"
                v-if="!i">
              <img
                src="@/assets/pic2.svg"
                alt=""
                class="w-[3.75rem] ml-8 mob:w-8 mob:ml-6"
                v-else>
              <div class="ml-4">
                <div
                  class=" font-bold text-xl text-[#F9FAFF] leading-6 mob:text-xs
                    mob:leading-[0.875rem]"
                  v-html="tile.title">
                </div>
                <div
                  class="font-bold text-lg text-[#BFDFFF80] leading-[1.375rem] mob:text-xs
                    mob:leading-[0.875rem]"
                  v-html="tile.text">
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
      { title: 'Extremelly high integration cost', text: 'Due to lack of specialists, high<br>investments to start as integrator' },
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
