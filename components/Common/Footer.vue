<template>
  <section id="footer">
    <div id="footer_sns">
      <div class="container_box">
        <div class="footer_sns">
          <ul>
            <li class="icon sp_1">
              <a href="#"><span class="ir_pm">트위터</span></a>
            </li>
            <li class="icon sp_2">
              <a href="#"><span class="ir_pm">페이스북</span></a>
            </li>
            <li class="icon sp_3">
              <a href="#"><span class="ir_pm">인스타</span></a>
            </li>
            <li class="icon sp_4">
              <a href="#"><span class="ir_pm">구글플레이</span></a>
            </li>
            <li class="icon sp_5">
              <a href="#"><span class="ir_pm">애플</span></a>
            </li>
          </ul>
          <div class="tel"><a href="javascript:void(0)">ARS <em>1544-0070</em></a></div>
        </div>
      </div>
    </div>
    <div id="footer_information">
      <div class="container_box">
        <div class="row_box">
          <div class="footer_information">
            <h2><img src="@/assets/imgs/logo_footer.png" alt="MEGABOX"></h2>
            <ul>
              <li><NuxtLink to="/">회사소개</NuxtLink></li>
              <li><NuxtLink to="/">채용정보</NuxtLink></li>
              <li><NuxtLink to="/">제휴 / 광고 / 부대사업 문의</NuxtLink></li>
              <li><NuxtLink to="/">이용약관</NuxtLink></li>
              <li><NuxtLink to="/">개인정보처리방침</NuxtLink></li>
              <li><NuxtLink to="/">고객센터</NuxtLink></li>
              <li><NuxtLink to="/">윤리경영</NuxtLink></li>
            </ul>
            <address>
              <p>서울 특별시 강남구 도산대로 156, 2층 메가박스중앙(주) (논현동, 중앙엠엔비사옥)<br />대표자명 김진선 개인정보보호 책임자 경영지원실 실장 박영진<br />사업자등록번호 211-86-59478 통신판매업신고번호 제 833호</p>
              <p>Copyright 2022 by MegaBox JoongAng Inc. All right reserved</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/components/common/footer.scss';

</style>
