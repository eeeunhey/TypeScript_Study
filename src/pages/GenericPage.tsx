
import { CodeBlock, StudyTemplate } from "../components";

const GenericPage = () => {
  return (
    <div>
      <StudyTemplate
        title="710. 제네릭 타입 - 타입도 매개변수처럼  11. 제네릭 타입 응용"
        learned={`
                 
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
    </div>
  );
};

export default GenericPage;
