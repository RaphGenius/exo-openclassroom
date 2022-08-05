import { useParams, Link } from "react-router-dom";
export default function Survey() {
  //state
  const { questionNumber } = useParams();
  let actualPage = parseInt(questionNumber);
  const nextPage = actualPage + 1;
  const previousPage = actualPage === 1 ? 1 : actualPage - 1;
  //Comportement

  //Render
  return (
    <div className="survey">
      <h1>Questionnaire!</h1>
      <h2>Question n°{questionNumber}</h2>
      {actualPage === 10 ? (
        <Link to={`/results`}>Résultats</Link>
      ) : (
        <Link to={`/survey/${nextPage}`}>Question suivante</Link>
      )}
      {actualPage !== 1 ? (
        <Link to={`/survey/${previousPage}`}>Question précédente</Link>
      ) : null}
    </div>
  );
}
