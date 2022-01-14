<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="flex-1 flex flex-col pl-[6.3rem] mob:pl-[1.875rem]">
      <div class="">
        <div
          class=" font-bold text-[2.5rem] mob:text-[1.68rem] text-[#2B4677]
            w-[33rem] mob:w-[15.2rem] border-b border-[#2B4677] pt-10">
          Market
        </div>
      </div>
      <div
        class="flex flex-row flex-1 items-center pb-[6rem] mob:flex-col mob:items-start
          mob:pb-0">
        <div
          class="w-[33rem] text-[#F9FAFF] text-[3.75rem] font-bold leading-[4.25rem]
            mob:text-[2.5rem] mob:leading-[2.8rem] mob:w-[18.25rem] mob:mt-3">
          EVO controls plans to capture market shares by 2027
        </div>
        <div class="ml-[4.9rem] mob:ml-0 mob:flex-1 mob:flex mob:items-center">
          <table>
            <tr
              v-for="(text, i) in texts"
              :key="i"
              class="">
                <td
                  class="text-[2.5rem] text-[#BFDFFF] font-bold text-right pr-2.5
                    mob:text-[1.8rem] mob:pr-1.5 mob:text-left">
                  <div class="mob:flex mob:flex-row mob:items-center">
                    {{ text.big }}
                    <div
                      v-if="device === 'mobile'"
                      class="text-[1.875rem] text-[#BFDFFF] font-bold whitespace-nowrap
                        mob:text-[1.3rem] ml-2">
                      {{ text.small }}
                    </div>
                  </div>
                  <div
                    v-if="device === 'mobile'"
                    class="text-[1.375rem] text-[#BFDFFF] font-bold text-opacity-50
                      w-[12.875rem] box-content mob:text-base mob:w-[7.3rem]
                      mob:leading-4"
                    :class="{ 'mb-6': i !== 2 }">
                    {{ text.muted }}
                  </div>
                </td>
                <td
                  v-if="device === 'desktop'"
                  class="text-[1.875rem] text-[#BFDFFF] font-bold whitespace-nowrap
                    mob:text-[1.3rem]">
                  {{ text.small }}
                </td>
                <td
                  v-if="device === 'desktop'"
                  class="text-[1.375rem] text-[#BFDFFF] font-bold text-opacity-50 pl-7
                    w-[12.875rem] box-content leading-6 py-5 mob:text-base mob:w-[7.3rem]
                    mob:leading-4">
                  {{ text.muted }}
                </td>
            </tr>
          </table>
        </div>
        <div class="mob:h-8 mob:w-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
const bgd = require('../../assets/bg/desktop/bg10.png');
const bgm = require('../../assets/bg/mobile/bg10.png');

export default {
  props: ['device'],
  components: {
  },
  data: () => ({
    bg: null,
    texts: [
      {
        big: '0,2%',
        small: '= $244 mln',
        muted: 'Home&Building automation',
      },
      {
        big: '2%',
        small: '= $70 mln',
        muted: 'Indoor farming automation',
      },
      {
        big: '0,3%',
        small: '= $262 mln',
        muted: 'Public infrastructure automation',
      },
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
table td {
  vertical-align: middle;
}
</style>
