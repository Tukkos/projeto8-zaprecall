import React from "react";

export default function Zaps({mkey, question, answer}) {
    // const [counterCard, setCounterCard] = React.useState([[]]);
    const [cardChange, setCardChange] = React.useState("");

    // const wrongAnswer = [{
    //     result: "wrong",
    //     class: "flashcardClosedWrong",
    //     icon: "close-circle"
    // }];

    // const almostAnswer = [{
    //     result: "almost",
    //     class: "flashcardClosedAlmost",
    //     icon: "help-circle"
    // }];

    // const zapAnswer = [{
    //     result: "zap",
    //     class: "flashcardClosedZap",
    //     icon: "checkmark-circle"
    // }]

    return (
        <>
            {(() => {
                switch (cardChange) {
                    case "":
                        return (
                            <div className="flashcardClosed">
                                <p>Pergunta {mkey}</p>
                                <ion-icon name="play-outline" onClick={() => {
                                    setCardChange("card2");
                                }} ></ion-icon>
                            </div>
                        );
                    case "card2":
                        return (
                            <div className="flashcardOppen">
                                <p>{question}</p>
                                <ion-icon name="return-down-forward-outline" onClick={() => {
                                    setCardChange("card3");
                                }}></ion-icon>
                            </div>
                        );
                    case "card3":
                        return (
                            <div className="flashcardOppen">
                                <p>{answer}</p>
                                <div className="zapButtons">
                                    <div className="wrong" onClick={() => {
                                        setCardChange("card4Wrong");
                                    }}>Não lembrei!</div>
                                    <div className="almost" onClick={() => {
                                        setCardChange("card4Almost");
                                    }}>Quase não lembrei!</div>  
                                    <div className="zap" onClick={() => {
                                        setCardChange("card4Zap");
                                    }}>Zap!</div> 
                                </div>
                            </div>
                        );
                    case "card4Wrong":
                        return (
                            <div className="flashcardClosed flashcardClosedWrong">
                                <p>Pergunta {mkey}</p>
                                <ion-icon name="close-circle"></ion-icon>
                            </div>
                        );
                    case "card4Almost":
                        return (
                            <div className="flashcardClosed flashcardClosedAlmost">
                                <p>Pergunta {mkey}</p>
                                <ion-icon name="help-circle"></ion-icon>
                            </div>
                        );
                    case "card4Zap":
                        return (
                            <div className="flashcardClosed flashcardClosedZap">
                                <p>Pergunta {mkey}</p>
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        );
                    default:
                        return null;
                }
            })()}
        </>
    );
}