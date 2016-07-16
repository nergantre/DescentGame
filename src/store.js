import { createStore } from 'redux'
import { fromJS } from 'immutable'

const lorem = "Loredsadsm ipsum dsadsdolor sit amet, consectetur adipiscing elit. Duis ex lectus, ultricies id ipsum commodo, placerat commodo orci. In justo mi, accumsan non fringilla ac, suscipit nec tellus. Fusce lobortis elit sem, eu egestas nulla sodales id. Aliquam ut maximus est. Sed nibh odio, iaculis et eros lacinia, aliquam porta eros. Curabitur imperdiet enim eget pharetra posuere. Nunc maximus ex eu tellus consequat finibus. Vestibulum sodales tincidunt est, eu porttitor nunc condimentum in"

const initialStoreTree = fromJS(
    {
        text: lorem,
        flags: {

        },
        store: {
            navigationOptions: [
                {
                    label: "Personnel",
                    target: "staff"
                },
                {
                    label: "Manage Rooms",
                    target: "rooms"
                },
                {
                    label: "Build",
                    target: "build"
                },
                {
                    label: "Report",
                    target: "report"
                }
            ]
        }
    }
);

const reducer = function(state=initialStoreTree, action) {
    switch(action.type) {
        case "test": {
            console.log(action.payload)
            break;
        }
        default:
            console.log("unsupported action: ", action)
    }
    return state
}

export default createStore(reducer, window.devToolsExtension && window.devToolsExtension())