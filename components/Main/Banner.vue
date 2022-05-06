<template>
  <div>
    <section id="banner">
      <div class="banner_item">
        <h2 class="ir_su">배너 영역</h2>
        <div class="container_box">
          <div class="row_box">
            <div class="banner_item_left">
              <ul>
                <li class="menu" v-tooltip="{ content: '툴팁 테스트' }"><NuxtLink to="/">
                  <font-awesome-layers class=""> <!-- suffix: true 덕분에 -icon 생략가능(기존: font-awesome-icon-layers) -->
                    <font-awesome-icon icon="fa-solid fa-bars" />
                  </font-awesome-layers>
                  전체메뉴
                </NuxtLink></li>
                <li class="line"><NuxtLink to="/">필름 소사이어티</NuxtLink></li>
                <li><NuxtLink to="/">클래식 소사이어티</NuxtLink></li>
              </ul>
            </div>

            <div class="banner_item_right">
              <ul class="mr_10">
                <li class="line"><NuxtLink to="#">고객센터</NuxtLink></li>
                <li class="line"><NuxtLink to="#">멤버십</NuxtLink></li>
                <li><NuxtLink to="#">VIP</NuxtLink></li>
              </ul>

              <ul>
                <li class="white"><NuxtLink to="#">상영시간표</NuxtLink></li>
                <li class="purple"><NuxtLink to="#">빠른 예매</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="banner_image_wrap">
        <div class="carousel-wrapper">
          <client-only>
            <carousel v-bind="options">
              <slide v-for="(item, idx) in banners" :key="idx" class="img-wrapper">
                <img :src="item.image" :alt="item.alt" />
                <div class="absolute_box">
                  <h2>{{item.title}} <em>{{item.subtitle}}</em></h2>
                  <p>{{item.contents}}</p>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          image: require("~/assets/imgs/main_slider01.jpg"),
          alt: '첫번째 배너 이미지',
          title: '베스와 베라',
          subtitle: 'Beth and Vera',
          contents: '<천국을 보는 눈> 파스칼 로지에 감독'
        },
        {
          image: require("~/assets/imgs/main_slider01.jpg"),
          alt: '두번째 배너 이미지',
          title: '캡틴 마블',
          subtitle: 'Captain Marvel',
          contents: '새로운 히어로, 어벤져스의 희망'
        }
      ],
      options: {
        loop: false,
        perPage: 1,
        paginationEnabled: false,
        // autoplay: 5000
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/components/main/banner.scss';


</style>
