<template>
  <div>
    <section id="banner">
      <div class="banner_item">
        <h2 class="ir_su">배너 영역</h2>
        <div class="container_box">
          <div class="row_box">
            <div class="banner_item_left">
              <ul>
                <li class="menu"><NuxtLink to="/">전체메뉴</NuxtLink></li>
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
        <div><img :src="banners[0].image" :alt="banners[0].alt"></div>
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
          alt: '첫번째 배너 이미지'
        },
        {
          image: require("~/assets/imgs/main_slider01.jpg"),
          alt: '두번째 배너 이미지'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/components/main/banner.scss';

</style>
