import "./code-block.css";

type Props = {
  title: string;
  code: string;
  question: string;

};

const CodeBlock = ({ title, code, question }: Props) => {


  return (
    <div className="code">
      <div className="studyBlock">
        <div className="codeHeader">
          <h2 className="studySubTitle">{title}</h2>
          <button
            type="button"
            className="copyBtn"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            복사
          </button>
        </div>
        {question && <div className="question">{question}</div>}

        <pre className="codeBlock">
          <code>{code}</code>
        </pre>


      </div>
    </div>
  );
};

export { CodeBlock };
