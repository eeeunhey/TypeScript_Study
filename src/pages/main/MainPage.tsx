import { Link } from "react-router-dom";
import { CURRICULUM } from "../../constants/curriculum.constants";
import "./main-page.css";

const MainPage = () => {
  let dateIndex = -1; // 날짜 그룹 번호(색을 위한 번호)

  return (
    <main className="page">
      <section className="taskSection">
        <div className="taskHeader">
          <h3 className="taskTitle">TypeScript 학습</h3>
          <p className="taskSub">일주일 커리큘럼 · 과제 + 강의 요약</p>
        </div>

        <div className="taskList">
          {CURRICULUM.map((study, index) => {
            const isFirstOfDate =
              index === 0 || CURRICULUM[index - 1].date !== study.date;

            if (isFirstOfDate) dateIndex++;

            return (
              <Link key={study.path} to={study.path} className="taskButton">

                <div className={`taskDate date-${dateIndex % 3}`}>
                  {study.date}
                </div>

                <div className="taskMain">{study.task}</div>
                <div className="taskLecture">{study.lecture}</div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default MainPage;
