let list = document.getElementById("list");

document.addEventListener("DOMContentLoaded", () => { //스위프트 클로저 같은 건가보다.
  const date = new Date(); //오늘 날짜에 대한 정보가 저 상수에 담기게 된단다.

  let year = date.getFullYear(); //그중에서 오늘 연도만 추출한 거다.
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let h1 = document.querySelector("h1"); //클래스나 아이디로 받는 게 아니라 가장 먼저 나오는 해당 글자의
  //부분을 선택하는 거다.

  h1.textContent = `${year}-${month}-${day}
  할 일`; //``이건 또 첨 보는 기호네. 이걸 백틱이라고 한단다.
})

let adderBtn = document.getElementById("adderBtn"); //구글링해보면 굳이 이렇게 두 번 나눠서 하더라.
adderBtn.addEventListener("click", () => { //뭐 저 변수로 해서 사용할 데가 생기나봐.
  let inputField = document.getElementById("inputField"); //input을 내가 id로 해놨으면 getElementByID로 해야지
  //ID로 해서 작동을 안 한 거구나 ㄹㅈㄷ네 Id라고 안 해준거구나 와.
  let inputValue = inputField.value; //입력된 값을 받았어!
  let addedForm = document.createElement("div"); //div 요소를 만들어 newTodoForm에 저장
  addedForm.className = "added-form"; //하단에 추가될 할 일 list 형식 재설정
  addedForm.innerHTML = `
    <button class="mark-btn">⭐</button>
    <label id="inputLabel">${inputValue}</label>
    <button class="delete-btn">🗑</button>
    <input type="checkbox" class="checkbox">
  `; // 중요, 할 일, 삭제, 체크박스 버튼 순서로 구성

  //let list = document.getElementsByClassName("list"); //투두리스트를 넣을 하단 영역 불러오기
  //list.appendChild(addedForm); //list에 newTodoForm을 넣기

  list.appendChild(addedForm);
  inputField.value = "";
});

list.addEventListener("click", function (e) { //리스트 영역에서 클릭 이벤트가 발생했을 경우
  if (e.target.classList.contains("mark-btn")) //스크랩 버튼을 클릭 했을 경우
  {
    let label = e.target.nextElementSibling; //부모 요소
    label.classList.toggle("highlight"); //부모 요소 highlight 시키기 (toggle을 이용해 버튼 클릭 여부에 따른 효과 반전시키기)
  }
  else if (e.target.classList.contains("delete-btn")) //삭제 버튼을 클릭 했을 경우
  {
    e.target.parentElement.remove(); //부모 요소 삭제
  }
  else if (e.target.classList.contains("checkbox")) //체크박스 클릭 했을 경우
  {
    let label = e.target.previousElementSibling.previousElementSibling; //왼왼쪽(전전) 요소 (할 일)
    if (e.target.checked) //체크박스가 체크되어 있는 경우
    {
      label.style.textDecoration = "line-through"; //라벨에 취소선 추가
    }
    else
    {
      label.style.textDecoration = "none"; //라벨의 취소선 삭제
    }
  }
});