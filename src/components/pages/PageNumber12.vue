<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#759CFF] text-opacity-30
            w-[42.5rem] mob:w-[16.2rem] border-b border-[#355188] pt-10">
          Traction
        </div>
      </div>
      <div
        class="text-[#BFDFFF] text-[3.75rem] leading-[4.25rem] mb-8 font-normal
          mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[17.4rem] mob:mt-3 mob:text-[#F9FAFF]
          mob:font-bold">
        <span class="text-[#F9FAFF] font-bold">
          Achievements
        </span>
        2018-2021
      </div>
      <div
        class="flex flex-row flex-1 pb-[4rem] items-center mob:flex-col mob:items-start">
        <div
          v-for="(tile, i) in tiles"
          :key="i"
          class="w-[21.375rem] h-[22.125rem] rounded-2xl bg-[#2298FF26] border-[#00000036]
            border pt-5 flex flex-col pl-[1.68rem] pr-[1.875rem] mob:w-[19.5rem] mob:h-[15.4rem]
            mob:pl-6 mob:pt-4"
          :class="{ 'ml-6 mob:ml-0 mob:mt-6': !!i }">
          <div
            class=" text-[1.375rem] font-bold text-[#BFDFFF] border-b border-[#6F91B9] pb-2.5
              mb-3.5 mob:text-base mob:pb-2.5">
            {{ tile.title1 }}
            <span class="text-[#6F91B9]">
              {{ tile.title2 }}
            </span>
          </div>
          <div
            v-for="(text, i2) in tile.texts"
            :key="i2"
            class="text-lg leading-[1.68rem] mob:text-[0.875rem] mob:leading-[1.125rem]"
            :class="{ 'mb-6 mob:mb-3': !i }">
            <div class="text-[#F9FAFF] font-semibold">
              {{ text.title }}
            </div>
            <ul class="list-disc">
              <li
                v-for="(t, i3) in text.texts" :key="i3"
                class="text-[#BFDFFF] ml-8 mob:ml-6">
                {{ t }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg12.png');
const bgm = require('../../assets/bg/mobile/bg12.png');

export default {
  props: ['device'],
  components: {
  },

  data: () => ({
    bg: null,
    tiles: [
      {
        title1: 'Integrators',
        title2: 'onboarding',
        texts: [
          {
            title: 'Showrooms opened:',
            texts: [
              'Minsk, Belarus',
              'Moscow, Russia',
              'Waregem, Belgium',
            ],
          },
          {
            title: 'Training programs developed:',
            texts: [
              'Installation',
              'Programming',
              'Sales',
            ],
          },
        ],
      },
      {
        title1: 'End products',
        title2: 'development',
        texts: [
          {
            title: 'Systems developed:',
            texts: [
              'Indoor farming grower',
              'Thermal screening frame',
              'Postmachine',
              'Preassembled electrical panels',
              'EV AC charger',
            ],
          },
        ],
      },
      {
        title1: 'Corporate',
        title2: 'integrations',
        texts: [
          {
            title: 'Integrations started to:',
            texts: [
              'Marriott hotels brandbook',
              'Manufacturing proceedures of K-FLEX isolation producer',
              'Smart bus stations of Qazaqstan cities',
              'Russian railways smart stations',
            ],
          },
        ],
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
