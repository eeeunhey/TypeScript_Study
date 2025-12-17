import { CodeBlock, StudyTemplate } from "../components";

const UnionTypePage = () => {
  return (
    <div>
      <StudyTemplate
        title="7강 유니온 타입 - 자유에는 책임이 따른다  8강 타입 좁히기 9강 유니온 타입의 함정"
        learned={`
                  7강 유니온 타입 - 자유에는 책임이 따른다
                  유니온 타입은 여러 타입 중 하나면 괜찮다 둘 중 하나면 일 수도 있는데 타입을 여러개 받을 수 있다 확장 개념
                  그래서 유니온 타입은 쓰기 전에 반드시 타입을 좁혀야 한다
                  유니온 타입은 자유롭게 받을 수 있지만, 직접 확인할 책임이 개발자에게 있다

                  8강. 타입 좁히기 
                  if, typeof, in, instanceof 같은 조건문을 쓰면 타입스크립트가 타입을 자동으로 좁혀준다.
                
                  9강. 유니온 타입의 함정
                  공통 속성만 쓸 수 있다
                  value는 A일 수도 있고 B일 수도 있음
                  둘 다에 공통으로 있는 것만 허용함

                  한쪽 타입만의 메서드는 바로 못 쓴다
                  string에만 있는 기능이기 때문에
                  타입 좁히기 없이 사용하면 위험하다고 판단한다.

                  유니온이 많아질수록 코드가 복잡해진다
                  타입은 유연해졌지만 매번 체크해야 할 조건이 늘어남
                  `}
        reason={``}
      />

      <CodeBlock
        title="문제 1"
        question="다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요."
        code={`
// 매개변수, 리턴타입 정의필요 
function processInput(input) {
  // 여기에 작성


}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
console.log(processInput(42)); // 에러 발생
            `}
      />

            <CodeBlock
        title="문제 2"
        question={`
            다음 조건을 만족하는 코드를 작성하세요.
            1. 아래와 같은 두 개의 클래스를 정의합니다:
                Car 클래스: brand(브랜드 이름, 문자열) 속성을 가집니다.
                Bike 클래스: type(바이크 종류, 문자열) 속성을 가집니다.
            2. 입력값이 Car 또는 Bike의 인스턴스일 수 있는 vehicle을 받아 다음 규칙에 따라 처리하는 함수를 작성하세요:
                Car이면 브랜드 이름을 대문자로 반환합니다.
                Bike이면 바이크 종류 앞에 "Bike: "를 추가하여 반환합니다.
            `}
        code={`
// 클래스 정의
// 여기에 작성

function processVehicle(vehicle: /* 여기에 작성 */): string {
  // 여기에 구현
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
console.log(processVehicle("unknown")); // 에러 발생

            `}
      />

        <CodeBlock
        title="문제 3"
        question={`
             in을 활용한 사용자 관리
            1. 시스템에는 두 종류의 사용자가 있습니다:
                Admin 사용자: { type: "admin"; permissions: string[] }
                User 사용자: { type: "user"; email: string }
            2. processUser라는 함수를 작성하세요. 함수는 입력으로 Admin 또는 User 객체를 받아 다음과 같이 처리합니다:
                Admin: 권한 목록(permissions)을 ,로 연결한 문자열을 반환합니다.
                User: 이메일 주소(email)을 반환합니다.
            `}
        code={`
type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  // 여기에 작성
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
console.log(processUser({ type: "guest" })); // 에러 발생
            `}
      />

              <CodeBlock
        title="문제 4"
        question={`
            아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:
            Rectangle 객체: { width: number; height: number }
            Circle 객체: { radius: number }
            
            함수는 다음 규칙에 따라 동작합니다:
                Rectangle이면 넓이를 반환합니다. (가로 × 세로)
                Circle이면 넓이를 반환합니다. (π × 반지름²)
            `}
        code={`
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
}

function calculateArea(shape: Rectangle | Circle): number {
  // 여기에 작성
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

            `}
      />

        <CodeBlock
        title="문제 5"
        question={`
유니온 타입의 문제점과 해결 방법
유니온 타입의 문제점
아래와 같은 두 가지 유니온 타입을 처리하는 함수가 있습니다:

Square: { type: "square"; side: number }
Circle: { type: "circle"; radius: number }
calculateArea라는 함수는 두 타입의 넓이를 계산하려고 하지만, 유니온 타입을 제대로 처리하지 않고 사용할 경우 런타임 에러가 발생할 가능성이 생길 수 있다. 이를 해결 방법을 작성하세요.
해결 방법:

식별 가능한 유니온(type 속성)을 사용하여 타입을 안전하게 좁히는 코드를 작성하세요.
exhaustiveness check를 추가하여, 새로운 타입이 추가되더라도 타입 안정성을 유지하도록 구현하세요.
            `}
        code={`
type Shape = { side: number } | { radius: number };

// 넓이를 계산하는 함수
function calculateArea(shape: Shape): number {
  // 여기에 구현
}

// 테스트 코드
console.log(calculateArea({ side: 5 })); // 기대 출력: 25
console.log(calculateArea({ radius: 7 })); // 기대 출력: 153.93804002589985


            `}/>
    </div>
  );
};

export default UnionTypePage;
