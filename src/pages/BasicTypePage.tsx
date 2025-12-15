import { StudyTemplate, CodeBlock } from "../components";

const BasicTypePage = () => {
  return (
    <div>
      <div>
        <StudyTemplate
          title="원시타입-모든 타입의 기본"
          learned={`
string	문자열
number	숫자 (정수 + 실수 )
boolean	참 / 거짓
null	값이 의도적으로 없음
undefined	값이 아직 없음
symbol	고유하고 변경 불가능한 값
bigint	아주 큰 정수
            
js에서 ts 언어를 이해하지 못하기 때문에 실행 시
tsc main.ts 로 동작해야 한다
`}
          reason={`
TypeScript는 데이터의 타입을 미리 명확히 정의해서,
데이터를 주고받는 과정에서 타입 불일치로 생길 수 있는 오류를 사전에 예방하기 위해서 사용 하는데
위와 같이 원시 타입이 존재한다 
            `}
        />
        <CodeBlock
          title="문제1"
          question="다음 변수들의 타입을 지정해주세요"
          code={`
let userName: string; // 예: 이름
let userAge: number; // 예: 나이
let isAdmin: boolean ; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;
            `
          }

        />
        <CodeBlock
          title="문제2"
          question="아래 변수들에 적절한 타입과 초기값을 지정하세요."
          code={`
// 변수 선언과 초기값 지정

let productName: string = "iphone"; // 상품 이름
let productPrice: number = 1800000; // 상품 가격
let isAvailable: boolean = true; // 상품 재고 여부

console.log(\`상품명: \${productName}, 가격: \${productPrice}, 재고 여부: \${isAvailable}\`);
`}

        />
        <CodeBlock
          title="문제3"
          question="두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.."
          code={`
function addNubers (a:number , b:number): number => {
    return a+b;
}

console.log(addNumbers(5,3));
            `}

        />

        <CodeBlock
          title="문제4"
          question={`주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다" 를 반환합니다`}
          code={`
function stringifyValue(value: string | null | nudefined): string {
  // 여기에 구현
    if( value === null || value === undefined) {
            return "값이 없습니다.";
    }
    return value;
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
            `}
        />

        <CodeBlock
          title="문제5"
          question={`아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.`}
          code={`
function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성";
  } else if (a == b) {
    return "느슨한 동등성";
  } else {
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); 
// 느슨한 동등성 
// 엄격한 동등성에 들어가서 타입이 달라서 false 가 되서 아래 조건으로 내려간다
// 타입이 달라도 == 자동으로 타입 변환을 해준다 true가 되니깐 느슨한 동등성을 출력한다

console.log(compareValues(null, undefined)); // 느슨한 동등성
// 엄격한 동등성에 들어가서 타입이 달라서 false 가 되서 아래 조건으로 내려간다
// null / undefined 둘 다 없다 이런 의미니깐 같다라고 그냥 취급하자 그래서 true를 반환한다
// 느슨한 동등성 출력 

console.log(compareValues(false, 0)); // 느슨한 동등성
// boolean === number 타입이 달라서 아래 조건으로 내려간다
// 자동 타입변환으로 인해 true 반환한다
// 느슨한 동등성 출력 

console.log(compareValues(NaN, NaN)); 
//  NaN은 비교 불가능한 값 이라고 한다 그래서 어떤 값을 가져와도 같지 않다
// 자기 자신 포함해서도 값이 같지 않다
// 알수없는 상태 끼리 비교하니깐 비교 조차가 안되서 그냥 동등않음을 반환함

console.log(compareValues(42, 42)); // 엄격한 동등성
// number === number 같은 타입끼리 같은 수 비교하니깐 true 값을 반환
// 엄격한 동등성 출력

            `}

        />

        <CodeBlock
          title="문제6"
          question={`주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.`}
          code={`

function isPrimitive(value: unknown): boolean {
  return value === null || (value !== Object(value));
}
  // value가 null 이면 바로 뒤 조건 안보고 true 반환
  // value가 null이 아니면 뒷 조건과 비교 해서 반환
  // 조건이 달라야 true 고 같으면 false 반환해라
  //  5 !== Object(5)  // true 
  // 숫자야 !== 나 객체야 다르면 true 반환해라 true 
  // value {} !==  Object() 객체와 객체를 비교하니깐 같음 다르지 않으니깐 false를 반환 


// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false

            `}
        />
      </div>
    </div>
  );
};

export default BasicTypePage;
