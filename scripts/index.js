// 1. 상품가격 입력
// 2. 할인율보기 클릭
// 3. 1번의 가격이 할인율 계산함수로 계산
// 4. 3번의 결과가 li출력

// DOM 변수 3개
const moneyInput = document.querySelector('#money');
const resultBtn = document.querySelector('#result');
const disCountLi = document.querySelectorAll('.discount li');
// 초기화 변수
const resetBtn = document.querySelector('.reset');

console.log(moneyInput,resultBtn,disCountLi);

// moneyInput 변수 초기값 100 대입
// <input value="100"> value 속성 (html속성=js속성)
// 객체.함수();
// 객체.속성;
// ${.toLocaleString('ko-kr')`
moneyInput.value = ''; // 초기값 대입

// 버튼이벤트 (버튼에 동작을 넣어 함수를 실행시키는 목적)
// 객체.addEventListener ('이벤트',실행함수);
resultBtn.addEventListener('click',function(){
    // '이벤트' 했을때 실행하고 싶은 명령
    // alert('값을 입력하고 다시버튼을 누르세요.')
    console.log(disCountFunc(moneyInput.value));
    disCountLi[0].textContent = `입력가 : ${moneyInput.value}원`;
});

// 초기화
resetBtn.addEventListener('click', resetFunc);

function resetFunc() {
    moneyInput.value = '';

    disCountLi[0].textContent = '';
    disCountLi[1].textContent = '';
    disCountLi[2].textContent = '';
    disCountLi[3].textContent = '';
    disCountLi[4].textContent = '';
    disCountLi[5].textContent = '';
    disCountLi[6].textContent = '';
    disCountLi[7].textContent = '';
    disCountLi[8].textContent = '';
}

resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    moneyInput.value = '';
    // 결과 초기화
    disCountLi.forEach(li => {
        li.textContent = '';
    });
});


// 초기값 또는 입력값에 따라 할인율 계산하는 함수
function disCountFunc(price){
    disCountLi[1].textContent = `5%할인율 : ${(price * 0.95).toLocaleString('ko-KR')}원`;
    disCountLi[2].textContent = `10%할인율 : ${price * 0.90}원`;
    disCountLi[3].textContent = `15%할인율 : ${price * 0.85}원`;
    disCountLi[4].textContent = `20%할인율 : ${price * 0.80}원`;
    disCountLi[5].textContent = `25%할인율 : ${price * 0.75}원`;
    disCountLi[6].textContent = `30%할인율 : ${price * 0.70}원`;
    disCountLi[7].textContent = `35%할인율 : ${price * 0.65}원`;
    disCountLi[8].textContent = `40%할인율 : ${price * 0.60}원`;
    return total;
}

console.log()

// function disCountFunc(price){
//     let total = '';
//     total += `5% 할인율 = ${price * 0.95}원\n`;
//     total += `10% 할인율 = ${price * 0.90}원\n`;
//     total += `20% 할인율 = ${price * 0.80}원\n`;
//     total += `30% 할인율 = ${price * 0.70}원\n`;
//     total += `40% 할인율 = ${price * 0.60}원\n`;
//     total += `50% 할인율 = ${price * 0.50}원\n`;
//     return total;
// }