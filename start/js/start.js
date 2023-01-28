const main = document.querySelector('#main');
const qna = document.querySelector('#qna');

function addAnswer(answerText) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  a.appendChild(answer);
  answer.innerHTML = answerText;
}

function goNext(qIdx) {
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;

  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer);
  }
}

function begin() {
  main.style.WebkitAnimation = 'fadeOut 0.8s';
  main.style.animation = 'fadeOut 0.8s';

  setTimeout(() => {
    qna.style.WebkitAnimation = 'fadeIn 0.8s';
    qna.style.animation = 'fadeIn 0.8s';
    setTimeout(() => {
      main.style.display = 'none';
      qna.style.display = 'block';
    }, 380);
    let qIdx = 0;
    goNext(qIdx);
  }, 380);
}
