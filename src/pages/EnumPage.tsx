import { CodeBlock, StudyTemplate } from "../components";

const EnumPage = () => {
  return (
    <div>
      <StudyTemplate
        title="ENUM 정의 "
        learned={`
            enum 열거형
            어떤 타입의 정확하게 타입을 지정하고 싶다 할 떄 사용
            `}
        reason=""
      />

      <CodeBlock
        title="문제 1"
        question={``} 
        code={``}
        />
    </div>
  );
};

export default EnumPage;
