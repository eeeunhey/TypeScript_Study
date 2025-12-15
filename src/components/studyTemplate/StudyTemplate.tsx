import "./study-template.css";

type StudyTemplateProps = {
  title: string;
  learned: string;
  reason: string;

};

export function StudyTemplate({
  title,
  learned,
  reason,
}: StudyTemplateProps) {
  return (
    <section className="studyTemplate">
      <h1 className="studyTitle">{title}</h1>

      <div className="studyBlock">
        <h2 className="studySubTitle">배운 내용</h2>
        <p className="studyText">{learned}</p>
      </div>

      <div className="studyBlock">
        <h2 className="studySubTitle">왜 사용하는지</h2>
        <p className="studyText">{reason}</p>
      </div>


    </section>
  );
}
