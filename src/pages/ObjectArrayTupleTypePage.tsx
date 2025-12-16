import { CodeBlock, StudyTemplate } from "../components";

const ObjectArrayTupleTypePage = () => {
  return (
    <div>
      <StudyTemplate
        title="2강-객체 & 배열 & 튜플 타입"
        learned={`
객체 타입 
객체 타입은 객체 안에 들어갈 속성과 타입을 나열해서 정의한다
let 변수명: { 속성명: 타입; 속성명: 타입 };


선택적 속성 
필수 값이 아닐 경우,
속성 이름 뒤에 물음표(?)를 붙여서 선택적 속성으로 표현한다
데이터 형식이 일정하지 않을 때 사용한다.
속성명?: 타입


readonly (읽기 전용 속성)
readonly 속성명: 타입
객체의 특정 값이 한 번 정해지면 바뀌면 안 될 때 readonly를 사용한다

배열 타입
기본 배열 타입 선언
let 변수명: 타입[] = [값들];
제네릭 방식 선언
let 변수명: Array<타입> = [값들];

객체 배열
객체 타입 뒤에 []를 붙여서 객체를 배열 형태로 정의할 수 있다
let 변수명: { 속성명: 타입; 속성명: 타입 }[] = [{}, {}];

튜플 타입 
튜플은 배열이지만 길이와 각 위치의 타입이 고정된다
let tuple: [string, number];
이렇게 지정하면 첫 번째 값은 무조건 string 두 번째 값은 무조건 number만 받을 수 있다.

튜플 + 유니온 타입 
여러 타입 중 하나를 허용하고 싶을 때 유니온 타입(|)을 사용한다
let tuple: [string | number, number];
첫 번째 값은 string 또는 number 번째 값은 number만 받을 수 있다

            `}
        reason=""
      />
        <CodeBlock
          title="문제1"
          question="아래 객체를 보고 user의 타입을 작성하세요"
          code={`
let user: {name: string; age?: number; isAdmin: boolean } = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age: 40,
  isAdmin: false,
}
            `}
        />

        <CodeBlock
          title="문제2"
          question="읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다."
          code={`
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.
const numbers: readonly number[] = [1, 2, 3];

// 아래 코드는 오류가 발생해야 합니다.
// numbers.push(4);
// numbers[0] = 42;
            `}
        />

        <CodeBlock
          title="문제3"
          question={`
1. 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
2. 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.`}
          code={`
const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(
  products: [string, number, boolean][]
): [string, number][] {
// 상품이름을 반환하기 위해 string, 가격만 반환하기 위해 number
// 강제 하기 위해 튜플을 쓰자  
  return products.map(([name, price]) => [name, price]);
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(
  products: [string, number, boolean][]
): [string, number, boolean][] {
  // 재고가 true 인것만 반환하니깐
  // 이미 어차피 필터니깐 name, price 없어도 될 거 같아 제거
  // 재고 있는거만 확인 하니깐 boolean 만 확인해서 그 조건 해당하는것만 반환하자
  return products.filter(([,,isAvailable]) => isAvailable);
}

// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]

            `}
        />

        <CodeBlock
          title="문제4"
          question="사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요"
          code={`
//매개변수, 리턴 타입 정의 필요
function updateUser(
  user: { name: string; age?: number }
): { name: string; age: number } {
  // 나이가 제공되지 않으면 18로 설정
  return { ...user, age: user.age ?? 18 };
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }

console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
`}
        />

        <CodeBlock
          title="문제5"
          question="아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요."
          code={`
// proudcts 타입정의  필요 
const products: {name: string; price: number; category?: string}[] = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category: string): string[] {
  // 여기에 구현
    return products.reduce((result: string[], product) => {
    if (product.category === category) {
       result.push(product.name);
    }
    return result;
  },[]);
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
            `}
        />
    </div>
  );
};

export default ObjectArrayTupleTypePage;

