const bgImage = [
  {
    image: require("~/assets/imgs/bg01.jpg"),
    alt: '백그라운드 이미지'
  },
  {
    image: require("~/assets/imgs/new01.jpg"),
    alt: '새로운 이미지'
  }
]

const newItems = [
  {
    image: require("~/assets/imgs/new01.jpg"),
    alt: '새로운 이미지',
    title: '로그 원: 스타워즈 스토리',
    release: '2016년 10월 28일 개봉',
    score: 8.3,
    genre: '액션',
    nation: '미국, 오스트레일리아',
    timer: '142분',
    age: '12세 이상 관람가',
    description: "단숨에 행성 하나를 파괴할 위력을 지닌 데스 스타가 완성되기 전에 설계도를 훔쳐내야 하는 이번 작전의 성공 확률은 고작 2.4%. 생사도 모르는 아버지에 얽힌 비밀을 밝히려는 진을... 비롯해 유능한 정보 요원 '카시안', 두 눈이 멀었지만 탁월한 무술 실력을 지닌 '치루트', 전투 베테랑 '베이즈', 파일럿 '보디', 시니컬한 드로이드 'K-2SO'까지 합류, 거대한 전쟁을 끝낼 '로그 원'이 이끄는 가장 비밀스런 작전이 시작되는데...",
    update: '2019년 1월 25일',
    uptime: [
      '오전 00:00',
      '오전 01:00',
      '오전 02:00',
      '오전 03:00',
      '오전 04:00',
      '오전 05:00',
      '오전 06:00',
      '오전 07:00',
      '오전 08:00',
      '오전 09:00',
      '오전 10:00',
      '오전 11:00',
      '오전 12:00',

      '오후 01:00',
      '오후 02:00',
      '오후 03:00',
      '오후 04:00',
      '오후 05:00',
      '오후 06:00',
      '오후 07:00',
      '오후 08:00',
      '오후 09:00',
      '오후 10:00',
      '오후 11:00',
      '오후 12:00',
    ],
    address: '주소 또는 도로명을 입력해주세요.',
    uptext: '주소 또는 도로명을 입력해주세요.'
  }
]

const helpArray = [
  {
    area: '전체',
    title: '[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
    createdAt: '2019.05.28'
  },
  {
    area: '강남',
    title: '[라이브뷰잉] 플라잉독 10주년 기념 라이브 10주년 기념 방송 라이브 쇼',
    createdAt: '2019.05.28'
  },
  {
    area: '안양',
    title: '[공지] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
    createdAt: '2019.05.28'
  },
  {
    area: '전체',
    title: '[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
    createdAt: '2019.05.28'
  }
]

const helpArray2 = [
  {
    area: '강남',
    title: '[라이브뷰잉] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
    createdAt: '2019.05.28'
  },
  {
    area: '전체',
    title: '[공지] 플라잉독 10주년 기념 라이브 10주년 기념 방송 라이브 쇼',
    createdAt: '2019.05.28'
  },
  {
    area: '안양',
    title: '[공지] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
    createdAt: '2019.05.28'
  },
  {
    area: '전체',
    title: '[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
    createdAt: '2019.05.28'
  }
]

const helpCard = [
  {
    image: require('@/assets/imgs/card01.jpg'),
    srcset: require('@/assets/imgs/card01@2.jpg'),
    alt: '이미지입니다!!',
    creditCompany: 'T멤버십 일반',
    benefit: '영화 2,000원 현장 즉시 할인(1일 5매)'
  },
  {
    image: require('@/assets/imgs/card02.jpg'),
    srcset: require('@/assets/imgs/card02@2.jpg'),
    alt: '이미지입니다!!',
    creditCompany: 'T멤버십 일반',
    benefit: '영화 2,000원 현장 즉시 할인(1일 5매)'
  },
  {
    image: require('@/assets/imgs/card03.jpg'),
    srcset: require('@/assets/imgs/card03@2.jpg'),
    alt: '이미지입니다!!',
    creditCompany: 'T멤버십 일반',
    benefit: '영화 2,000원 현장 즉시 할인(1일 5매)'
  }
]

module.exports = {
  bgImage: bgImage,
  newItems: newItems,
  helpArray: helpArray,
  helpArray2: helpArray2,
  helpCard: helpCard
}
