<template>
  <div class=" relative bg-[#071C32]">
    <!-- <page-bg :pageNum="pageNum" :device="device" /> -->
    <Splide
      :options="{
        type: 'fade',
        rewind: false,
        arrows: false,
        wheel: true,
        direction: 'ttb',
        height: '100vh',
        width: '100wh',
        classes: {
          page: 'splide__pagination__page pag',
        },
      }"
      @splide:active="changePageNum">
      <SplideSlide
        v-for="num in 15"
        :key="num">
        <component
          :is="`PageNumber${num}`"
          :device="device"
          class="h-[100vh] w-[100vw] relative bg-[#071C32]">
        </component>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import PageBg from '@/components/PageBg.vue';
import PageNumber1 from './components/pages/PageNumber1.vue';
import PageNumber2 from './components/pages/PageNumber2.vue';
import PageNumber3 from './components/pages/PageNumber3.vue';
import PageNumber4 from './components/pages/PageNumber4.vue';
import PageNumber5 from './components/pages/PageNumber5.vue';
import PageNumber6 from './components/pages/PageNumber6.vue';
import PageNumber7 from './components/pages/PageNumber7.vue';
import PageNumber8 from './components/pages/PageNumber8.vue';
import PageNumber9 from './components/pages/PageNumber9.vue';
import PageNumber10 from './components/pages/PageNumber10.vue';
import PageNumber11 from './components/pages/PageNumber11.vue';
import PageNumber12 from './components/pages/PageNumber12.vue';
import PageNumber13 from './components/pages/PageNumber13.vue';
import PageNumber14 from './components/pages/PageNumber14.vue';
import PageNumber15 from './components/pages/PageNumber15.vue';

export default {
  components: {
    Splide,
    SplideSlide,
    PageBg,
    PageNumber1,
    PageNumber2,
    PageNumber3,
    PageNumber4,
    PageNumber5,
    PageNumber6,
    PageNumber7,
    PageNumber8,
    PageNumber9,
    PageNumber10,
    PageNumber11,
    PageNumber12,
    PageNumber13,
    PageNumber14,
    PageNumber15,
  },
  data() {
    return {
      device: window.innerWidth > 640 || window.innerWidth > 640 ? 'desktop' : 'mobile',
      pageNum: 1,
      isScrolling: false,
    };
  },
  computed: {
  },
  beforeCreate() {
    let fontSize = (window.innerWidth / 1280) * 16;
    if (window.innerWidth > 1500) fontSize *= 0.95;
    document.documentElement.style.fontSize = `${fontSize}px`;
  },
  methods: {
    changePageNum(e) {
      this.pageNum = e.index + 1;
    },
  },
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url("@/assets/fonts/Gilroy-Light.otf");
  font-display: block;
  font-weight: normal;
}
@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url("@/assets/fonts/Gilroy-Regular.otf");
  font-display: block;
  font-weight: 500;
}
@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url("@/assets/fonts/Gilroy-Medium.otf");
  font-display: block;
  font-weight: 600;
}
@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url("@/assets/fonts/Gilroy-SemiBold.otf");
  font-display: block;
  font-weight: 700;
}
/* @font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url("@/assets/fonts/Gilroy-Bold.otf");
  font-display: block;
  font-weight: 700;
} */
html {
  /* font-size: v-bind(fontSize); */
  font-family: "Gilroy";
  font-weight: 500;
}
.page {
  @apply flex flex-col;
}
.pag:not(.is-active) {
  /* border-width: 1px;
  border-color: white; */
  background-color: rgba(255, 255, 255, 0.1);
  filter: blur(1px);
}
</style>
