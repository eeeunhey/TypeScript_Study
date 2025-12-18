
import { CodeBlock, StudyTemplate } from "../components";

const GenericPage = () => {
  return (
    <div>
      <StudyTemplate
        title="10. 제네릭 타입 - 타입도 매개변수처럼  11. 제네릭 타입 응용"
        learned={`
                 제네릭(Generic)
                 타입을 변수처럼 사용할 수 있게 한다

type ArrayType = number/string[] // 뭐가 들어가야 하나
type ArrayType = T[] 제네릭 형태 타입이다 나중에 타입을 지정하면 지정한 타입 값으로 들어간다
const numberArray:ArrayType = [1,2,3] const stringArray:ArrayType=["a","b"] 꺽쇠안에 뭘 쓰냐에 따라 그 타입으로 지정된다
언제쓰냐? API 호출할 때 사용된다
리액트 useState도 제네릭 타입이다

interface Length { length:number }
function getValue(data:T){ console.log(data.length) } 무슨타입이 들어올지는 모르지만 무조건 length는 있어야 한다 무조건 길이가 있는 형태를 넣어줘야한다

제네릭 고급 타입
조건부 타입 type IsStgring= T extends string ? "yes":"no"
T extends 조건 ? 참일때타입 : 거짓일때타입
type result1 = IsStgring no를 보여준다
mapped type 이중에 특정 정보만 가져오고 싶다 옵셔널 지정 시 기존 데이터가 필요할 때 나중에 문제가 발생 옵셔널한 타입을 따로 만든다
type Movie={ title:string; genre:string; rate:number; }
const movie:Movie={ title: "기생충", genre: "액션" } const movie:Movie={ rate: 2}
옵셔널한 타입을 따로 만든다 뒤에 있는 타입형태를 인식
type MovieSubset={ title?:string; genre?:string; rate? :number; }
type Subset={ [K in keyof T]?:T[K] // 해당 키값을 가져온다 readonly [K in keyof T]?:T[K] } 
// const movie:Subset={ title: "기생충", genre: "액션" } const movie:Subset={ rate: 2},[K in keyof T]: 변환(T[K])

다중 제네릭 사용하기
interface Pair<T, U> { first:T, second:U, display():void //일반함수 display:()=>void // 화살표 함수 }
const pari : Pair<String, number>={ first:"eunhye", second:23, display(){ console.log(this.first+"는"+this. second+"살 이다") } } pair.display()

                  `}
        reason={``}
      />

      <CodeBlock
        title="문제 1"
        question={`
            배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.
            1.함수 이름: getFirstElement
            2.입력: 제네릭 배열
            3.출력: 배열의 첫 번째 요소
            `}
        code={`
// 매개변수, 리턴타입 정의 필요 
function getFirstElement<T>(array:T[]): T | undefined {
  // 여기에 구현
  retrun array[0];
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
// 제네릭 타입이라서 배열 안에 있는 그 타입 그대로 반환 
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
// 없으니깐 undefined 출력함
            `}
      />

            <CodeBlock
        title="문제 2"
        question={`
            숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요.
            1.함수 이름: isNumberArray
            2.입력: 제네릭 배열
            3.출력: 배열이 숫자 배열이면 true.  |   그렇지 않으면 false.
            `}
        code={`
// 매개변수, 리턴타입 정의 필요 
function isNumberArray(array: unknown[]): boolean {
  // 여기에 구현
   retrun array.every(item => typeof item === "number")

//    function isNumberArray(array: unknown[]): boolean {
//   return array.every(item => typeof item === "number");
    // every는 배열에 있는 조건이 만족하는 확인 
}
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
            `}
            />

            <CodeBlock
        title="문제 3"
        question={`
            다음 조건을 만족하는 조건부 타입을 작성하시오
            조건부 타입 정의
            1.타입 이름: IsArray<T>
            2.입력 타입 T가 배열 타입이면 true를 반환합니다.
            3.그렇지 않으면 false를 반환합니다.
            `}
        code={`
// 조건부 타입 정의
type IsArray<T> = Textends any[] ? true:false
// 타입 상관없이 그래서 any를 적었습니다 배열일 경우 true 반환
            `}
            />

            <CodeBlock
        title="문제 4"
        question={`
            객체의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요.
            유틸리티 타입 정의:
            타입 이름: WithDefault<T>
            입력: 객체 타입 T
            출력: 모든 속성 값의 타입이 [originalType, defaultType]의 튜플로 변경된 타입.

            테스트:
            WithDefault<T>를 활용하여 객체 타입을 변환하고, 변환된 타입의 객체를 작성하세요.
            `}
        code={`
// Mapped Type 정의
type WithDefault<T> = {
  // 여기에 작성
  [K in keyof T]: [T[K], T[K]];
  // 모든 키목록  
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }

            `}
            />

            <CodeBlock
        title="문제 5"
        question={`
            1. 함수 이름: pluck
            2. 입력:
                객체 배열: 제네릭 타입 배열
                속성 이름: 제네릭 타입
                출력: 속성 값 배열
            `}
        code={`
//객체 배열에서 특정 key에 해당하는 값만 뽑아서 배열로 반환
// 매개변수, 리턴 타입 정의 필요 
function pluck<T, K extends keyof T(array: T[], key: K): T[K][]  {
  // 여기에 구현
  // array 객체 배열 key : 해당 하는 키
  // T 배열 안 객체의 타입   K T안의 key 이름의 타입
  return array.map(item => item[key])
}

// 테스트 코드
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]


            `}
            />
    </div>
  );
};

export default GenericPage;
