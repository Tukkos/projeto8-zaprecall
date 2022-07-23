export default function ResultsBar({counterCard, answersNumber, questionsNumber}) {
    const wrongAnswer = <div className="flashcardClosedWrong"><ion-icon name="close-circle"></ion-icon></div>;
    const almostAnswer = <div className="flashcardClosedAlmost"><ion-icon name="help-circle"></ion-icon></div>;
    const zapAnswer = <div className="flashcardClosedZap"><ion-icon name="checkmark-circle" ></ion-icon></div>;

    return(
        <div className="resultsBar">
            {answersNumber === questionsNumber && counterCard.includes("wrong") && (
                <>
                    <p className="bold">:/ Puts...</p>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </>
            )}

            {answersNumber === questionsNumber && !counterCard.includes("wrong") && (
                <>
                    <p className="bold">:D Parabéns!</p>
                <p>Você não esqueceu de nenhum flash card!</p>
                </>
            )}

            <div className="resultsIonIcon">
                {counterCard.map((answer) => {
                    switch (answer) {
                        case "wrong":
                            return wrongAnswer;
                        case "almost":
                            return almostAnswer;
                        case "zap":
                            return zapAnswer;
                        default:
                            return null;
                    }
                })}
            </div>

            <p>{answersNumber}/{questionsNumber} CONCLUÍDOS</p>
        </div>
    );
}