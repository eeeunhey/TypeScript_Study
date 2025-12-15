import { Link } from "react-router-dom";
import { CURRICULUM } from "../../constants/curriculum.constants";
import "./main.css";

const MainPage = () => {
  return (
    <main className="page">
      <section className="taskSection">
        <div className="taskHeader">
          <h3 className="taskTitle">TypeScript 학습</h3>
          <p className="taskSub">일주일 커리큘럼 · 과제 + 강의 요약</p>
        </div>

        <div className="taskList">
          {CURRICULUM.map((study) => (
            <Link to={study.path} className="taskButton">
              <div className="taskDate">{study.date}</div>
              <div className="taskMain">{study.task}</div>
              <div className="taskLecture">{study.lecture}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainPage;
