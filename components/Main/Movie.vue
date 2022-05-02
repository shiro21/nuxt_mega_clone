<template>
  <div>
    <section id="movie">
      <h2 class="ir_su">최신 영화 정보</h2>
      <div class="container_box">
        <div class="row_box">
          <div class="movie_title">
            <ul>
              <li class="active"><NuxtLink to="/">박스오피스</NuxtLink></li>
              <li><NuxtLink to="/">최신개봉작</NuxtLink></li>
              <li><NuxtLink to="/">상영예정작</NuxtLink></li>
              <li><NuxtLink to="/">큐레이션</NuxtLink></li>
            </ul>
          </div>

          <div class="movie_chart">
            <div v-for="(item, index) of items" :key="item">
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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: require("~/assets/imgs/poster01.jpg"),
          srcset: require("~/assets/imgs/poster01@2.jpg"),
          alt: "침묵"
        },
        {
          image: require("~/assets/imgs/poster02.jpg"),
          srcset: require("~/assets/imgs/poster02@2.jpg"),
          alt: "제목"
        },
        {
          image: require("~/assets/imgs/poster03.jpg"),
          srcset: require("~/assets/imgs/poster03@2.jpg"),
          alt: "제목"
        },
        {
          image: require("~/assets/imgs/poster04.jpg"),
          srcset: require("~/assets/imgs/poster04@2.jpg"),
          alt: "제목"
        },
        {
          image: require("~/assets/imgs/poster05.jpg"),
          srcset: require("~/assets/imgs/poster05@2.jpg"),
          alt: "제목"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/components/main/movie.scss';

</style>
