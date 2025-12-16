import React from "react";
import { CodeBlock, StudyTemplate } from "../components";

const AdvancedPage = () => {
  return (
    <div>
      <div>
        <StudyTemplate
          title="2강-객체 & 배열 & 튜플 타입"
          learned={`
            enum 열거형
            어떤 타입의 정확하게 타입을 지정하고 싶다 할 떄 사용
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
        `} code={``} />

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
            `} code={``} />
        <CodeBlock title="문제 3" 
        question={`
        아래 조건에 따라 코드를 작성하세요.
        Info
        Error
        Debug

        로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:

        매개변수:
        message: 로그 메시지 (문자열)
        level: 로그 수준 (enum 값)
        반환값이 없습니다. (void 타입)
        작성한 타입과 enum을 사용해 함수를 구현하세요:

        로그 수준에 따라 다른 메시지를 출력합니다.
        Info: [INFO] 메시지 앞에 [INFO] 출력
        Error: 메시지 앞에 [ERROR] 출력
        Debug: 메시지 앞에 [DEBUG] 출력
        `} code={``} />

        <CodeBlock title="문제 4" 
        question={`
        두 개의 함수(processAny와 processUnknown)를 작성합니다:
        processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관계없이 값을 문자열로 변환하여 반환합니다.
        processUnknown: 매개변수로 unknown 타입을 받습니다. 
        입력값이 문자열이면 대문자로 변환하여 반환하고, 숫자라면 10을 곱해 반환합니다. 다른 타입의 경우 에러를 발생시킵니다.
        테스트 코드를 작성하여 두 함수의 차이를 확인하세요.
        `} code={``} />
      </div>
    </div>
  );
};

export default AdvancedPage;
