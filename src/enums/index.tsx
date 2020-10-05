/**
 * Difficulty Types
 */
export enum EDifficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
    Any = 'any'
}

/**
 * List item interface
 */
export interface IListItem {
    key: string,
    value: string
}

export interface IQuestion {
    question: string,
    type: string,
    difficulty: string,
    category: string,
    correct_answer: string,
    incorrect_answers: string[],
}

export interface IRenderItem {
    item: IListItem,
    index: number
}

/**
 * There is no id for any type category
 * so I create custom id for any type to check
 */
export const ANY_CATEGORY_TYPE_ID = -1;

/**
 * Game question status type
 */
export enum EStatus {
    Wrong = 'wrong',
    Success = 'success',
    Timeout = 'timeout',
    Finish = 'finish'
}