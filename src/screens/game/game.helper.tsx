import { IQuestion } from "enums";
import { Utils } from "helpers";

/**
 * Configure the array question shuffle it
 * @param question is a question
 */
export const configureAnswers = (question: IQuestion) => {
    const incorrenctAnswers = question.incorrect_answers;
    incorrenctAnswers.push(question.correct_answer);
    const shuffledAnswers = Utils.shufflearray(incorrenctAnswers);
    return shuffledAnswers;
}