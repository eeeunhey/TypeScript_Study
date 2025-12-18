import { CodeBlock, StudyTemplate } from "../components";

const LiteralPage = () => {
  return (
    <div>
      <StudyTemplate
        title=" 리터럴 타입 - 문자 그대로 "
        learned={`
            리터럴 타입 — 값을 타입으로 쓴다
            값 하나를 타입으로 만든 것
            let b: "left";   //  left 만 가능 left가 타입이 되어버렸다!

            템플릿 리터럴 타입 — 문자 조합도 타입으로
            문자열을 조립해서 타입으로 만든다

            type Direction = "left" | "right";
            type Margin = \`margin-\${Direction}\`;    
            출력 type Margin = "margin-left" | "margin-right";

            Omit 
            기존 타입에서 필요 없는 속성만 제거
            User에 필드 추가돼도 자동 반영
             중복 작성 안 해도 됨

            Pick — 기존 타입에서 필요한 것만 선택
            Partial — 있어도 되고 없어도 된다 모든 필드를 선택사항(?)으로 만든다
            `}
        reason={``}
      />

      <CodeBlock
        title="문제1"
        question={`
            1. 리터럴 타입 정의:
                버튼 스타일: "primary", "secondary", "danger".
                문자열 중에서 허용된 값만 받게 만드는 타입
            2. 함수 작성:
                함수 이름: getButtonClass.
                입력: 버튼 스타일(리터럴 타입).
                출력: 스타일에 따라 CSS 클래스를 반환.
                
            `}
        code={`
type ButtonStyle = "primary" | "secondary" | "danger";
function getButtonClass(style: ButtonStyle): string {
  // 여기에 구현
  return \`btn-\${style}\`;
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생

            `}
      />

      <CodeBlock
        title="문제2"
        question={`
            서버에서 데이터를 요청할 때 발생하는 상태를 처리하는 함수를 작성하세요.
            1. 리터럴 타입 정의:
                요청 상태: "loading", "success", "error".
            2. 함수 작성:
                함수 이름: handleRequestState.
                입력: 요청 상태(리터럴 타입).
                출력: 상태에 따라 메시지를 반환.
            `}
        code={`

type RequestState = "loading" | "success" | "error";
function handleRequestState(state: RequestState): string {
  // 여기에 구현
    switch (state) {
    case "loading":
      return "Loading, please wait...";
    case "success":
      return "Request successful!";
    case "error":
      return "There was an error processing your request.";
  }
}

// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생

            `}
      />
    </div>
  );
};

export default LiteralPage;
