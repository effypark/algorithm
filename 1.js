// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.


function solution (s) {
  const arr = s.split(" ");
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);
  return [min, max].join(" ");
}

console.log(solution("1 2 3 5"));


` Function.prototype.apply()
 - 함수가 실행될 때 내부 콘텍스트의 this 는 객체 자신 또는 window 객체를 가리킨다
 - 이때 this 가 가리키는 대상을 바꾸는 방법 중 하나
 - apply() 는 인자로 배열 (또는 유사 배열 객체)로 제공되는 arguments 로 함수를 호출한다

 - null 을 첫번째 인자로 사용하면 컨텍스트는 window 객체가 된다
 - 위와 같이 사용하면 두번째 인자의 배열의 값을 순서대로 호출한 메서드의 인자로 보내 실행한다

`