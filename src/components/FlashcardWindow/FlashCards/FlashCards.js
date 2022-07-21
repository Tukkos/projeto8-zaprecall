import React from "react";

export default function FlashCards() {

    const CARD1 = 
        <div className="flashcardClosed">
            <p>Pergunta 1</p>
            <ion-icon name="play-outline" onClick={() => setState(CARD2)} ></ion-icon>
        </div>;

    const CARD2 = 
        <div className="flashcardOppen">
            <p>O que é JSX?</p>
            <ion-icon name="return-down-forward-outline" onClick={() => setState(CARD3)}></ion-icon>
        </div>;

    const CARD3 = 
        <div className="flashcardOppen">
            <p>Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.</p>
            <div className="zapButtons">
                <div className="wrong" onClick={() => setState(CARD4Wrong)}>Não lembrei!</div>
                <div className="almost" onClick={() => setState(CARD4Almost)}>Quase não lembrei!</div>  
                <div className="zap" onClick={() => setState(CARD4Zap)}>Zap!</div> 
            </div>
        </div>;

    const CARD4Zap = 
        <div className="flashcardClosed flashcardClosedZap">
            <p>Pergunta 1</p>
            <ion-icon name="checkmark-circle"></ion-icon>
        </div>;

    const CARD4Almost = 
        <div className="flashcardClosed flashcardClosedAlmost">
            <p>Pergunta 1</p>
            <ion-icon name="help-circle"></ion-icon>
        </div>;

    const CARD4Wrong = 
        <div className="flashcardClosed flashcardClosedWrong">
            <p>Pergunta 1</p>
            <ion-icon name="close-circle"></ion-icon>
        </div>;

    const [state, setState] = React.useState(CARD1);

    return (
        <div className="flashcards">
            {state}
        </div>  
    );
}