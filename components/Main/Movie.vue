<template>
  <div>
    <section id="movie">
      <h2 class="ir_su">최신 영화 정보</h2>
      <div class="container_box">
        <div class="row_box">
          <div class="movie_title">
            <ul>
              <li @click="chartChange(1)" :class="{ active: isActive1}"><NuxtLink to="/">박스오피스</NuxtLink></li>
              <li @click="chartChange(2)" :class="{ active: isActive2}"><NuxtLink to="/">최신개봉작</NuxtLink></li>
              <li @click="chartChange(3)" :class="{ active: isActive3}"><NuxtLink to="/">상영예정작</NuxtLink></li>
              <li @click="chartChange(4)" :class="{ active: isActive4}"><NuxtLink to="/">큐레이션</NuxtLink></li>
            </ul>
          </div>

          <div class="movie_chart">

            <div v-swiper:mySwiper="swiperOption" class="swiper-container" :class="{ dp_n: !isActive1}">
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
            </div>
            <!-- Movie 1 // -->

            <div class="carousel-wrapper" :class="{ dp_n: !isActive2}">
              <client-only>
                <carousel v-bind="options">
                  <slide v-for="(item, index) of items" :key="'a' + index" class="img-wrapper pr_16">
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
                  </slide>
                </carousel>
              </client-only>
            </div>
            <!-- Movie 2 // -->


            <!-- Movie 3 // -->

            <div :class="{ dp_n: !isActive4}" v-for="(item, index) of items4" :key="'d' + index">
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
            <!-- Movie 4 // -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      items: [
        {
          image: require("~/assets/imgs/poster01.jpg"),
          srcset: require("~/assets/imgs/poster01@2.jpg"),
          alt: "침묵"
        },
        {
          image: require("~/assets/imgs/poster02.jpg"),
          srcset: require("~/assets/imgs/poster02@2.jpg"),
          alt: "신세계"
        },
        {
          image: require("~/assets/imgs/poster03.jpg"),
          srcset: require("~/assets/imgs/poster03@2.jpg"),
          alt: "마스터"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "마약왕"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "마약왕"
        }
      ],
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
      items3: [
        {
          image: require("~/assets/imgs/poster01.jpg"),
          srcset: require("~/assets/imgs/poster01@2.jpg"),
          alt: "침묵"
        },
        {
          image: require("~/assets/imgs/poster02.jpg"),
          srcset: require("~/assets/imgs/poster02@2.jpg"),
          alt: "신세계"
        },
        {
          image: require("~/assets/imgs/poster03.jpg"),
          srcset: require("~/assets/imgs/poster03@2.jpg"),
          alt: "마스터"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "마약왕"
        }
      ],
      items4: [
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
        }
      ],
      options: {
        loop: false,
        perPage: 4,
        paginationEnabled: false,
        // autoplay: 5000
      },

      slides: '',
      swiperOption: {
        loop: false,

        // 반응형
        breakpoints: {
          320: {
            slidesPerView: 1.4
          },
          600: {
            slidesPerView: 2,
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
  },
  methods: {
    chartChange(num) {
      if(num === 1) {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
      } else if(num === 2) {
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
        this.isActive4 = false;
      } else if(num === 3) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
        this.isActive4 = false;
      } else if(num === 4) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = true;
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/components/main/movie.scss';

</style>
