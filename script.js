const BAY_PHONE = "BAY_PHONE"
const BAY_TABLETTE = "BAY_TABLETTE"
const BAY_TV = "BAY_TV"

// la fonction pour les actions 
function bayphone() {
    return {
        type: BAY_PHONE
    }
}

function baytv() {
    return {
        type: BAY_TV
    }
}

function baytablette() {
    return {
        type: BAY_TABLETTE
    }
}

// state Initial 
const initialState =
{
    phones: 5,
    tablette: 10,
}

const initialTv = {
    tv: 20
}

// reducer
const PhoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case BAY_PHONE:
            return {
                ...state,
                phones: state.phones - 1
            }
        case BAY_TABLETTE:
            return {
                ...state,
                tablette: state.tablette - 1
            }
        default:
            return state;
    }

}

const TvReducer = (state = initialTv, action) => {
    switch (action.type) {
        case BAY_TV:
            return {
                ...state,
                tv: state.tv - 1
            }
        default:
            return state;
    }
}

// combineReducers
const rootReducers = Redux.combineReducers({
    phone: PhoneReducer,
    tv: TvReducer
})


// creation du store
const store = Redux.createStore(rootReducers)

console.log(store.getState())

const Count = document.getElementById("counter")
const Countb = document.getElementById("count_table")
const Countc = document.getElementById("count_tv")

const btnbayphone = document.getElementById("bay_phone")
const btnbaytablette = document.getElementById("bay_tablet")

const btnbaytv = document.getElementById("bay_tv")

Count.innerHTML = store.getState().phone.phones
Countb.innerHTML = store.getState().phone.tablette
Countc.innerHTML = store.getState().tv.tv

btnbayphone.addEventListener('click', () => {
    store.dispatch(bayphone())
})

btnbaytablette.addEventListener('click', () => {
    store.dispatch(baytablette())
})

btnbaytv.addEventListener('click', () => {
    store.dispatch(baytv())
})

store.subscribe(() => {
    Count.innerHTML = store.getState().phone.phones
    Countb.innerHTML = store.getState().phone.tablette
    Countc.innerHTML = store.getState().tv.tv
})
