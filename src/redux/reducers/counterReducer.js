import { INCRAMENT, DECRAMENT } from "../action/types"

const counterReducer = (state = { count: 0, test: "Test" }, action) => {
    switch (action.type) {
        case INCRAMENT:
            return { ...state, count: state.count + 1 }
        case DECRAMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export default counterReducer