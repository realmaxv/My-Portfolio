import QuizCard from "../components/QuizCard";
import quizzes from "../lib/quiz";
type Quiz = {
  topic: string;
  slug: string;
  logo: string;
  questions: {
    title: string;
    options: string[];
    correctOption: string;
  }[];
};

function Quiz() {
  return (
    <div className="pt-20">
      <section className="p-20 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 h-screen">
        <div className="grid grid-cols-2 gap-6">
          {quizzes.de.map((quest: Quiz, index) => (
            <QuizCard
              option={quest.questions[index].options[index + 1]}
              handleAnswerClick={() => {}}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Quiz;
