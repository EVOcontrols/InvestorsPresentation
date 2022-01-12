<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem] mob:overflow-hidden">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#759CFF] text-opacity-30
            w-[18.25rem] border-b border-[#355188] pt-10 flex flex-row mob:w-[13.8rem]">
            <img src="@/assets/evo_grey.svg" alt="" class="w-[4.875rem] mob:w-[3.375rem]">
            <span class="ml-2 mt-0.5">
              solution
            </span>
        </div>
      </div>
      <div
        class="text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-16
          mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[15.25rem] mob:mt-3">
        <span class="text-[#F9FAFF] font-bold">NG system</span>
      </div>
      <div
        class="flex flex-row flex-1 pb-28 items-center mob:flex-col mob:items-start
          mob:justify-center">
        <div
          class="flex flex-col text-[1.375rem] text-[#BFDFFF] leading-[1.68rem] mob:order-2
            mob:text-base mob:leading-5 mob:mt-6">
          <div class="w-[18.25rem] mob:w-[13rem]">
            EVO NG is the unique
            <span class="text-[#F9FAFF] font-bold">universal system</span>
            , that can be used for absolutely different markets.
            <div>&nbsp;</div>
            This means our integrators are not linked to only one market and
            can support different business areas.
          </div>
        </div>
        <div class="ml-[4.3rem] relative mob:order-1 mob:ml-0">
          <img src="@/assets/pic10.png" alt="" class="w-[36.8rem] mob:w-[19rem]">
          <img
            src="@/assets/pic11.png"
            alt=""
            class=" absolute bottom-[-2.3rem] right-[-3.8rem] w-[15.3rem] mob:w-[13.5rem]
              mob:bottom-0 mob:top-0 mob:my-auto mob:right-[-8.875rem]">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg7.png');
const bgm = require('../../assets/bg/mobile/bg7.png');

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
