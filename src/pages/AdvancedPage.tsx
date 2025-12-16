
import { CodeBlock, StudyTemplate } from "../components";

const AdvancedPage = () => {
  return (
    <div>
      <div>
        <StudyTemplate
          title="5강-고급타입2 - any, unknown, void, never~"
          learned={`
any
타입스크립트의 타입 검사를 완전히 무시하는 타입이다.
어떤 값이든 허용되지만, 타입 안정성이 사라져 오류를 미리 막지 못한다.

unknown
값의 타입을 알 수 없다는 의미의 타입이다.
사용 전에 반드시 확인이 필요해, any보다 훨씬 안전하게 타입을 관리할 수 있다.

void
아무 값도 반환하지 않는 상태를 의미한다.
주로 “실행만 하고 끝나는 함수”를 표현할 때 사용된다.

never
값이 존재할 수 없는 상태를 의미하는 타입이다.
에러가 발생하거나 함수가 끝나지 않아 정상 종료가 불가능함을 나타낸다.
            `}
          reason=""
        />

        <CodeBlock title="문제 1" 
        question={`
            작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
            작업의 상태는 다음과 같습니다:
            Pending: 대기 중
            InProgress: 진행 중
            Completed: 완료됨
            상태에 따라 다음 메시지를 반환하세요:

            Pending: "작업이 대기 중입니다."
            InProgress: "작업이 진행 중입니다."
            Completed: "작업이 완료되었습니다."
        `} 
        code={`
enum TaskStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}

function getStatusMessage(status: TaskStatus): string {
  switch (status) {
    case TaskStatus.Pending:
      return "작업이 대기 중입니다.";
    case TaskStatus.InProgress:
      return "작업이 진행 중입니다.";
    case TaskStatus.Completed:
      return "작업이 완료되었습니다.";
    default:
      return "알 수 없는 상태입니다.";
  }
}

console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."
        
        `} />

        <CodeBlock title="문제 2" 
        question={
            `아래 조건에 따라 함수를 작성하세요
            작업 상태를 나타내는 enum:
                Pending: 작업 대기 중
                InProgress: 작업 진행 중
                Completed: 작업 완료
                Failed: 작업 실패

                함수의 요구사항:

                함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
                input은 문자열이어야 합니다.
                문자열을 작업 상태에 따라 가공합니다:
                Pending: 문자열을 모두 대문자로 변환.
                InProgress: 문자열을 소문자로 변환.
                Completed: 문자열 앞에 "완료: "를 추가.
                Failed: 에러를 발생시킵니다.
                작업 상태가 Failed면 에러를 발생시켜야 합니다.
                최종 결과로 가공된 문자열 배열을 반환합니다.
                힌트 : typeof를 사용하면 타입을 알 수 있다.
            `} 
            code={`
// 작업 상태를 나타내는 enum 작성
// 여기에 작성
enum TaskStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
  Failed = "Failed",
}

function processTask(status: /* 여기에 작성 */, input: unknown): string {
  // 여기에 구현
  if (typeof input !== "string") {
    throw new Error("입력값은 문자열이어야 합니다.");
  }

  switch (status) {
    case TaskStatus.Pending:
      return input.toUpperCase();
    case TaskStatus.InProgress:
      return input.toLowerCase();
    case TaskStatus.Completed:
      return \`완료: \${input}\`;
    case TaskStatus.Failed:
      throw new Error("작업이 실패했습니다.");
    default:
      throw new Error("알 수 없는 상태입니다.");
  }
}

// 테스트 코드
console.log(processTask(TaskStatus.Pending, "task1")); 
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus.InProgress, "TaskA")); 
// 기대 출력: "taska"

console.log(processTask(TaskStatus.Completed, "Report1")); 
// 기대 출력: "완료: Report1"

console.log(processTask(TaskStatus.Failed, "TaskX")); 
// 에러: 작업이 실패했습니다.

console.log(processTask(TaskStatus.Pending, 42)); 
// 에러: 입력값은 문자열이어야 합니다.

            `} />


        <CodeBlock title="문제 3" 
        question={`
1. 로그 상태를 나타내는 enum을 작성하세요:
Info
Error
Debug

2. 로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:

3. 매개변수:
message: 로그 메시지 (문자열)
level: 로그 수준 (enum 값)
반환값이 없습니다. (void 타입)
작성한 타입과 enum을 사용해 함수를 구현하세요:

로그 수준에 따라 다른 메시지를 출력합니다.
Info: [INFO] 메시지 앞에 [INFO] 출력
Error: 메시지 앞에 [ERROR] 출력
Debug: 메시지 앞에 [DEBUG] 출력

            `} 
            code={`
// 로그 수준을 나타내는 enum 작성
// 여기에 작성
enum LogLevel {
  Info = "Info",
  Error = "Error",
  Debug = "Debug",
}

// 로그 함수 타입을 정의하세요.
// 여기에 작성
type LogFunction = (message: string, level: LogLevel) => void;

// 로그 함수 구현
const logMessage: /* 여기에 작성 */ = (message, level) => {
  // 여기에 구현
const logMessage: LogFunction = (message, level) => {
  switch (level) {
    case LogLevel.Info:
      console.log(\`[INFO] \${message}\`);
      break;
    case LogLevel.Error:
      console.error(\`[ERROR] \${message}\`);
      break;
    case LogLevel.Debug:
      console.debug(\`[DEBUG] \${message}\`);
      break;
    default:
      throw new Error("알 수 없는 로그 수준입니다.");
  }
};
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.", /* enum 값 입력 */);
logMessage("네트워크 연결 실패!", /* enum 값 입력 */);
logMessage("디버깅 모드 활성화", /* enum 값 입력 */);


            `} />




        <CodeBlock title="문제 4" 
        question={`
        두 개의 함수(processAny와 processUnknown)를 작성합니다:
        1. processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관계없이 값을 문자열로 변환하여 반환합니다.
        2.processUnknown: 매개변수로 unknown 타입을 받습니다. 
         입력값이 문자열이면 대문자로 변환하여 반환하고, 숫자라면 10을 곱해 반환합니다. 다른 타입의 경우 에러를 발생시킵니다.
         테스트 코드를 작성하여 두 함수의 차이를 확인하세요.
        `} 
        code={`
  function processAny(input: any): string {
  // 여기에 구현
  
  return input.toString();
}

function processUnknown(input: unknown): string | number {
  // 여기에 구현
    if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    throw new Error("지원되지 않는 타입입니다.");
  }
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
console.log(processUnknown(true)); // 에러 발생
        `} />
      </div>
    </div>
  );
};

export default AdvancedPage;
