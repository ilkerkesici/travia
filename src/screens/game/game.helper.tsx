import { colors, images, strings as locale } from "assets";
import { EStatus, IQuestion } from "enums";
import { Utils } from "helpers";

/**
 * Configure the array question shuffle it
 * @param question is a question
 */
export const configureAnswers = (question: IQuestion): string[] => {
    const incorrenctAnswers = question.incorrect_answers;
    const all = incorrenctAnswers.concat([question.correct_answer]);
    const shuffledAnswers = Utils.shufflearray(all);
    return shuffledAnswers;
}

/**
 * determine the status modal image the given parameter
 */
export const determineStatusmodalData= (status: EStatus) => {
    const strings = locale.game;
    switch (status) {
        case EStatus.Wrong:
            return {
                image: images.wrong,
                title: strings.wrong,
                desc: strings.wrongDesc,
                button: strings.mainMenu,
                backgroundColor: colors.danger,
                textColors: colors.white,
                buttonColor: colors.dangerDark
            };
        case EStatus.Success:
            return {
                image: images.tick,
                title: strings.correct,
                desc: strings.correnctDesc,
                button: strings.next,
                backgroundColor: colors.success,
                textColors: colors.white,
                buttonColor: colors.successDark
            };
        case EStatus.Timeout:
            return {
                image: images.timeup,
                title: strings.timeout,
                desc: strings.timeoutDesc,
                button: strings.mainMenu,
                backgroundColor: colors.lightGray,
                textColors: colors.black,
                buttonColor: 'gray'
            }
        default:
            return {
                image: images.tick,
                title: strings.correct,
                desc: strings.correnctDesc,
                button: strings.next,
                backgroundColor: colors.success,
                textColors: colors.white,
                buttonColor: colors.successDark
            }
    }
}
