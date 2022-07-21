import FlashcardWindowHead from "./FlashcardWindowHead";
import FlashCards from "./FlashCards/FlashCards";
import ResultsBar from "./ResultsBar";

const result = [
    {
        result: "default",
        class: "",
        iconName: "play-outline"
    },
    {
        result: "wrong",
        class: "flashcardClosedWrong",
        icon: "close-circle"
    },
    {
        result: "almost",
        class: "flashcardClosedAlmost",
        icon: "help-circle"
    },
    {
        result: "zap",
        class: "flashcardClosedZap",
        icon: "checkmark-circle"
    }
]

const zaps = [
    {
        id: 1,
        question: "O que é JSX?",
        answer:"Uma extensão de linguagem do JavaScript.",
    },
    {
        id: 2,
        question: "O React é __",
        answer:"Uma biblioteca JavaScript para construção de interfaces.",
    },
    {
        id: 3,
        question: "Componentes devem iniciar com __ ",
        answer:"Letra maiúscula.",
    },
    {
        id: 4,
        question: "Podemos colocar __ dentro do JSX",
        answer:"Expressões.",
    },
    {
        id: 5,
        question: "O ReactDOM nos ajuda __",
        answer:"Interagindo com a DOM para colocar componentes React na mesma.",
    },
    {
        id: 6,
        question: "Usamos o npm para __ ",
        answer:"Gerenciar os pacotes necessários e suas dependências.",
    },
    {
        id: 7,
        question: "Usamos props para __",
        answer:"Passar diferentes informações para componentes.",
    },
    {
        id: 8,
        question: "Usamos estado (state) para __",
        answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
    },
]

export default function FlashcardWindow() {


    return (
        <div>
            <FlashcardWindowHead />
            
            <FlashCards />

            <ResultsBar />
            
        </div>
    )
}