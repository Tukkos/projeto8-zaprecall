import FlashcardWindowHead from "./FlashcardWindowHead";
import ResultsBar from "./ResultsBar";
import Zaps from "./Zaps";
import React from "react";

const zaps = [
    {
        key: 1,
        question: "O que é JSX?",
        answer:"Uma extensão de linguagem do JavaScript.",
    },
    {
        key: 2,
        question: "O React é __",
        answer:"Uma biblioteca JavaScript para construção de interfaces.",
    },
    {
        key: 3,
        question: "Componentes devem iniciar com __ ",
        answer:"Letra maiúscula.",
    },
    {
        key: 4,
        question: "Podemos colocar __ dentro do JSX",
        answer:"Expressões.",
    },
    {
        key: 5,
        question: "O ReactDOM nos ajuda __",
        answer:"Interagindo com a DOM para colocar componentes React na mesma.",
    },
    {
        key: 6,
        question: "Usamos o npm para __ ",
        answer:"Gerenciar os pacotes necessários e suas dependências.",
    },
    {
        key: 7,
        question: "Usamos props para __",
        answer:"Passar diferentes informações para componentes.",
    },
    {
        key: 8,
        question: "Usamos estado (state) para __",
        answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
    },
]

export default function FlashcardWindow() {
    const [counterCard, setCounterCard] = React.useState([]);
    console.log(counterCard);

    function mix() {
        return 0.5 - Math.random();
    }

    zaps.sort(mix);

    return (
        <>
            <FlashcardWindowHead />
            
            <div className="flashcards">
                {zaps.map((zap, index) => (
                    <Zaps
                        mkey={index + 1}
                        question={zap.question}
                        answer={zap.answer}
                        counterCard={counterCard}
                        setCounterCard={setCounterCard}
                    />
                ))}
            </div> 

            <ResultsBar 
                counterCard={counterCard}
                answersNumber={counterCard.length}
                questionsNumber={zaps.length}
            />
            
        </>
    )
}