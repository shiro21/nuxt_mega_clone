<template>
  <div v-swiper:mySwiper="swiperOption" class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(item, index) of items2" :key="'b' + index" class="swiper-slide">
        <div>
          <div class="card_wrap">
            <figure>
              <img :src="item.image" :srcset="item.srcset + ' 2x'" :alt="item.alt" />
            </figure>
            <div class="card_rank"><strong>{{index + 1}}</strong></div>
            <div class="card_mx">
              <span class="icon sp_m ir_pm">MX</span>
              <span class="icon sp_b ir_pm">Boutique</span>
            </div>
          </div>
          <div class="card_information">
            <h3><span class="icon sp_all ir_pm">전체관람가</span> <strong>{{item.alt}}</strong></h3>
            <div class="card_information_btn">
              <NuxtLink to="/">상세정보</NuxtLink>
              <NuxtLink to="/">예매하기</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items2: [
        {
          image: require("~/assets/imgs/poster05.jpg"),
          srcset: require("~/assets/imgs/poster05@2.jpg"),
          alt: "침묵"
        },
        {
          image: require("~/assets/imgs/poster06.jpg"),
          srcset: require("~/assets/imgs/poster06@2.jpg"),
          alt: "신세계"
        },
        {
          image: require("~/assets/imgs/poster07.jpg"),
          srcset: require("~/assets/imgs/poster07@2.jpg"),
          alt: "마스터"
        },
        {
          image: require("~/assets/imgs/poster08.jpg"),
          srcset: require("~/assets/imgs/poster08@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster08.jpg"),
          srcset: require("~/assets/imgs/poster08@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster08.jpg"),
          srcset: require("~/assets/imgs/poster08@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster08.jpg"),
          srcset: require("~/assets/imgs/poster08@2.jpg"),
          alt: "마약왕"
        }
      ],
      slides: '',
      swiperOption: {
        // breakpoints 사용하지 않을때
        // slidesPerView: 4,
        // spaceBetween: 16,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        mousewheel: {
          invert: true
        },

        // 반응형
        breakpoints: {
          320: {
            slidesPerView: 1.4
          },
          600: {
            slidesPerView: 1.4,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 16
          }
        }
      }
    }
  }
}
</script>
