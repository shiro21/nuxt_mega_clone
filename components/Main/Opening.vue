<template>
  <div>
    <section id="opening" :title="data.bgImage[0].alt" role="img" :style="{ backgroundImage: 'url(' + data.bgImage[0].image + ')' }">
      <div class="container_box">
        <div class="row_box">
          <div class="opening">
            <h2 class="grand icon ir_pm">Grand Opening</h2>
            <strong class="date icon ir_pm">2019.01 ~ 2019.03</strong>
            <p class="description">LIFE THEATER로 새롭게 시작하는 메가박스를 만나보세요 !</p>

            <div class="opening_items">
              <div class="opening_item" v-for="item of [0,1,2]" :key="item">
                <h3>리뉴얼 오픈</h3>
                <p><em>경기도</em><strong>안양</strong>12월 8일</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import fakeData from '@/assets/js/fakeData';

export default {
  data() {
    return {
      data: fakeData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/components/main/opening.scss';
</style>
