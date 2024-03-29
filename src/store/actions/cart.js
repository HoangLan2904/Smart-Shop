import { CART } from './types'

export const create_cart = (data) => {
    return {
        type: CART.CREATE_CART,
        data: data
    }
}

export const create_cart_success = (data) => {
    return {
        type: CART.CREATE_CART_SUCCESS,
        data: data
    }
}

export const create_cart_fail = (error) => {
    return {
        type: CART.CREATE_CART_FAIL,
        error: error
    }
}

export const create_cart_end = () => {
    return {
        type: CART.CREATE_CART_END
    }
}

export const get_all_cart = (id) => {
    return {
        type: CART.GET_ALL_CART,
        id: id
    }
}

export const get_all_cart_success = (data) => {
    return {
        type: CART.GET_ALL_CART_SUCCESS,
        data: data
    }
}

export const get_all_cart_fail = (error) => {
    return {
        type: CART.GET_ALL_CART_FAIL,
        error: error
    }
}

export const delete_cart = (id) => {
    return {
        type: CART.DELETE_CART,
        id: id
    }
}

export const delete_success = (data) => {
    return {
        type: CART.DELETE_SUCCESS,
        data: data
    }
}

export const delete_fail = (error) => {
    return {
        type: CART.DELETE_FAIL,
        error: error
    }
}

export const update_mount_cart = (data) => {
    return {
        type: CART.UPDATE_MOUNT_CART,
        data: data
    }
}

export const update_mount_success = (data) => {
    return {
        type: CART.UPDATE_MOUNT_CART_SUCCESS
    }
}

export const update_mount_fail = (error) => {
    return {
        type: CART.UPDATE_MOUNT_CART_FAIL
    }
}

