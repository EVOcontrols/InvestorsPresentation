<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#759CFF] text-opacity-30
            w-[19rem] mob:w-[13.8rem] border-b border-[#355188] pt-10">
          Revenue
        </div>
      </div>
      <div
        class="text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8 font-normal
          mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[15.25rem] mob:mt-3 mob:mb-24">
        <span class="text-[#F9FAFF] font-bold">
          Projections
        </span>
      </div>
      <div
        class="mb-28 flex-1 flex flex-col justify-center"
        v-if="device === 'desktop'">
        <div class=" relative h-[12rem]">
          <img
            src="@/assets/pic15.svg"
            alt=""
            class="w-[60.4rem] absolute top-0 left-0">
          <div class="flex flex-row">
            <div
              v-for="(step, i) in steps.first"
              :key="i"
              class="w-[12rem] relative text-[0.93rem] font-bold leading-[1.125rem] pt-7
                text-[#BFDFFF]">
              {{ step.title }}
              <div class="text-[#BFDFFF] text-opacity-50 whitespace-pre">
                {{ step.text }}
              </div>
              <div
                class=" absolute -top-1 -left-1.5 w-3 h-3 inline-block rounded-full grad1">
              </div>
              <div
                class=" absolute -top-1 -left-1.5 w-3 h-3 inline-block rounded-full bg-[#96CEFE80]">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row ml-5">
          <div
            v-for="(step, i) in steps.second"
            :key="i"
            class="w-[10.7rem] relative text-[0.93rem] font-bold leading-[1.125rem] pt-7
              text-[#BFDFFF]">
            {{ step.title }}
            <div class="text-[#BFDFFF] text-opacity-50 whitespace-pre">
              {{ step.text }}
            </div>
            <div
              class=" absolute -top-1 -left-1.5 w-3 h-3 inline-block rounded-full grad2">
            </div>
            <div
              class=" absolute -top-1 -left-1.5 w-3 h-3 inline-block rounded-full bg-[#96CEFE]">
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class=" flex flex-col relative">
        <!-- <img
          src="@/assets/pic16.svg"
          alt=""
          class="absolute -top-2 left-[1.79rem] bottom-4"> -->
        <div
          class=" absolute top-2 bottom-0 left-[1.82rem] w-0.5 line">
        </div>
        <div class="flex flex-col pl-12">
          <div
            v-for="(step, i) in steps.first"
            :key="i"
            class="h-[5.6rem] relative text-[0.93rem] font-bold leading-[1.125rem]
              text-[#BFDFFF]">
            {{ step.title }}
            <div class="text-[#BFDFFF] text-opacity-50 whitespace-pre">
              {{ step.text }}
            </div>
            <div
              class=" absolute top-1 -left-6 w-3 h-3 inline-block rounded-full grad1">
            </div>
            <div
              class=" absolute top-1 -left-6 w-3 h-3 inline-block rounded-full bg-[#96CEFE80]">
            </div>
          </div>
        </div>
        <div class="flex flex-col pl-12 pt-6">
          <div
            v-for="(step, i) in steps.second"
            :key="i"
            class="h-[5.2rem] relative text-[0.93rem] font-bold leading-[1.125rem]
              text-[#BFDFFF]"
            :class="{ '!h-auto': i === steps.second.length - 1 }">
            {{ step.title }}
            <div class="text-[#BFDFFF] text-opacity-50 whitespace-pre">
              {{ step.text }}
            </div>
            <div
              class=" absolute top-1 -left-6 w-3 h-3 inline-block rounded-full grad2">
            </div>
            <div
              class=" absolute top-1 -left-6 w-3 h-3 inline-block rounded-full bg-[#96CEFE]">
            </div>
          </div>
        </div>
      </div>
      <div class="h-16" v-if="device === 'mobile'"></div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg13.png');
const bgm = require('../../assets/bg/mobile/bg13.png');

export default {
  props: ['device'],
  components: {
  },

  data: () => ({
    bg: null,
    steps: {
      first: [
        // eslint-disable-next-line quotes
        { title: '2018: 130 000 EUR', text: 'Installations: 20\nPartners: 2' },
        { title: '2019: 265 000 EUR', text: 'Installations: 100\nPartners: 5' },
        { title: '2020: 515 000 EUR', text: 'Installations: 250\nPartners: 12' },
        { title: '2021 (1,2,3Q):  545 000 EUR', text: 'Installations: 590\nPartners: 31' },
      ],
      second: [
        { title: '2022: 2.3 mln EUR', text: 'Installations: 1500\nPartners: 50' },
        { title: '2023: 12.5 mln EUR', text: 'Installations: 5k\nPartners: 120' },
        { title: '2024: 34.9 mln EUR', text: 'Installations: 15k\nPartners: 200' },
        { title: '2025: 89 mln EUR', text: 'Installations: 40k\nPartners: 450' },
        { title: '2026: 253 mln EUR', text: 'Installations: 100k\nPartners: 1k' },
        { title: '2027: 508 mln EUR', text: 'Installations: 400k\nPartners: 4k' },
      ],
    },
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
.grad1 {
  background: radial-gradient(
    50% 50% at 50% 50%, rgba(25, 156, 241, 0.5) 0%, rgba(28, 159, 242, 0.5) 100%
  );
  filter: blur(16px);
}
.grad2 {
  background: radial-gradient(50% 50% at 50% 50%, #199CF1 0%, #1C9FF2 100%);
  filter: blur(16px);
}
.line {
  background: linear-gradient(235deg, rgba(191,223,255,0) 0%, rgba(191,223,255,1) 100%);
}
</style>
