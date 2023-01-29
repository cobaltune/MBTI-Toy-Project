function sendLink() {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '십이간지 연애 유형',
      description: '십이간지로 보는 연애 유형',
      imageUrl: '../img/share.png',
      link: {
        mobileWebUrl: 'https://twelve-test.netlify.app',
        webUrl: 'https://twelve-test.netlify.app',
      },
    },
    buttons: [
      {
        title: '자세히 보기', //첫 번째 버튼
        link: {
          mobileWebUrl: 'https://twelve-test.netlify.app', //버튼 클릭 시 이동 링크
          webUrl: 'https://twelve-test.netlify.app',
        },
      },
    ],
  });
}
