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

/**
 * There is no id for any type category
 * so I create custom id for any type to check
 */
export const ANY_CATEGORY_TYPE_ID = -1;