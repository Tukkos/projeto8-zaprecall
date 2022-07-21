import FlashcardWindowHead from "./FlashcardWindowHead";
import ResultsBar from "./ResultsBar";

export default function FlashcardWindow() {
    return (
        <div>
            <FlashcardWindowHead />
            
            <div className="flashcards">
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="flashcardClosed">
                    <p>Pergunta 9</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>

            <ResultsBar />
            
        </div>
    )
}