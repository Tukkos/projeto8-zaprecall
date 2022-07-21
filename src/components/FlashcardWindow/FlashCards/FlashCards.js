export default function FlashCards() {
    return (
        <div className="flashcards">
            <div className="flashcardClosed">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="flashcardOppen">
                <p>O que é JSX?</p>
                <ion-icon name="return-down-forward-outline"></ion-icon>
            </div>
            <div className="flashcardOppen">
                <p>Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.</p>
                <div className="zapButtons">
                    <div className="wrong">Não lembrei!</div>
                    <div className="almost">Quase não lembrei!</div>  
                    <div className="zap">Zap!</div> 
                </div>
            </div>
            <div className="flashcardClosed flashcardClosedZap">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </div>  
    );
}