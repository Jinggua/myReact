import { CHANGE_INPUT_VAlUE, ADD_ITEM, ITEM_DELETE } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VAlUE,
    value: value
})

export const getAddItemAction = () => ({
    type: ADD_ITEM
}) 

export const getItemDelete = (index) => ({
    type: ITEM_DELETE,
})