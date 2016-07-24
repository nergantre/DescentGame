/**
 * Created on 7/16/2016.
 */

export const NAVIGATE_TO_VIEW_ACTION_TYPE = "NAVIGATE_TO"

export const actionNavigateToView = (target) => {
    return Object.assign({type:NAVIGATE_TO_VIEW_ACTION_TYPE}, target)
}