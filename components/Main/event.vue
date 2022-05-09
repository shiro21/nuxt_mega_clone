<template>
  <div>
    <section id="event">
      <div class="container_box">
        <div class="row_box">
          <div class="event clearfix">
            <h2>새로운 이벤트</h2>
            <div class="event_left">
              <div class="event_left_top">
                <img :src="items[0].image" :srcset="items[0].srcset + ' 2x'" :alt="items[0].alt">
              </div>
              <div class="event_left_bottom_left">
                <img :src="items[1].image" :srcset="items[1].srcset + ' 2x'" :alt="items[1].alt">
              </div>
              <div class="event_left_bottom_right">
                <img :src="items[2].image" :srcset="items[2].srcset + ' 2x'" :alt="items[2].alt">
              </div>
            </div>
            <div class="event_right">
              <div class="event_right_main">
                <img :src="items[3].image" :srcset="items[3].srcset + ' 2x'" :alt="items[3].alt">
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
          image: require('~/assets/imgs/event01.jpg'),
          srcset: require('~/assets/imgs/event01@2.jpg'),
          alt: '1번 이미지'
        },
        {
          image: require('~/assets/imgs/event02.jpg'),
          srcset: require('~/assets/imgs/event02@2.jpg'),
          alt: '2번 이미지'
        },
        {
          image: require('~/assets/imgs/event03.jpg'),
          srcset: require('~/assets/imgs/event03@2.jpg'),
          alt: '3번 이미지'
        },
        {
          image: require('~/assets/imgs/event04.jpg'),
          srcset: require('~/assets/imgs/event04@2.jpg'),
          alt: '4번 이미지'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/components/main/event.scss';

</style>
