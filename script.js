const BAY_PHONE = "BAY_PHONE"
const BAY_TABLETTE = "BAY_TABLETTE"

// la fonction pour les actions 
function bayphone() {
    return {
        type: BAY_PHONE
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


// reducer
const reducer = (state = initialState, action) => {
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

// creation du store

const store = Redux.createStore(reducer)
const Count = document.getElementById("counter")
const Countb = document.getElementById("count_table")
const btnbayphone = document.getElementById("bay_phone")
const btnbaytablette = document.getElementById("bay_tablet")

Count.innerHTML = store.getState().phones
Countb.innerHTML = store.getState().tablette


btnbayphone.addEventListener('click', () => {
    store.dispatch(bayphone())
})

btnbaytablette.addEventListener('click', () => {
    store.dispatch(baytablette())
})

store.subscribe(() => {
    Count.innerHTML = store.getState().phones
    Countb.innerHTML = store.getState().tablette
})