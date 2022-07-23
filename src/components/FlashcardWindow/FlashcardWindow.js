import FlashcardWindowHead from "./FlashcardWindowHead";
import FlashCards from "./FlashCards/FlashCards";
import ResultsBar from "./ResultsBar";
import React from "react";

export default function FlashcardWindow() {
        // const result = [
    //     {
    //         result: "default",
    //         class: "",
    //         iconName: "play-outline"
    //     },
    //     {
    //         result: "wrong",
    //         class: "flashcardClosedWrong",
    //         icon: "close-circle"
    //     },
    //     {
    //         result: "almost",
    //         class: "flashcardClosedAlmost",
    //         icon: "help-circle"
    //     },
    //     {
    //         result: "zap",
    //         class: "flashcardClosedZap",
    //         icon: "checkmark-circle"
    //     }
    // ]

    // const [counter, setCounter] = React.useState([]);

    return (
        <>
            <FlashcardWindowHead />
            
            <FlashCards />

            <ResultsBar />
            
        </>
    )
}