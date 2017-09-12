# Redux Booklist React App

This web-application was developed using React.js and uses Redux to work with data.

A middleware async dispatcher is used to send actions, see `index.js` for details.

## Higher Order Components

A HOC is a design pattern that define a function that take a component and return a new wrapped component.

Redux make use of HOC, it takes the App component wraps it with the Provider component.

```js
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
document.getElementById('root'));
```

## Three Principles of Redux

1. State is immutable
1. An _action_ is used to cause _state_ to change.
1. A _reducer_ is a pure-function that returns a new state given an action.

## Action

An action creator **must** never mutate the state, fetch data or make an API call. It must be passed data, called a payload, that is used to update the Redux store _state_.

An action creator should be prefixed with 'do', and accept an optional payload parameter.

### src/actions/book-actions.js

```js
export function doSelectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
```

_Note_: not all action creators need a `payload` field, some may only need the `type` field.

## Reducer

A reducer is a function that accepts to parameters:

1. state
1. action

```js
function(state, action) => state;
```

It is highly advisable to assign a default state, since the initial state will be _undefined_ when the application first starts up.

A reducer function **must** return the _state_ object for an unknown action type.

### src/reducers/active-book-reducer.js

```js
const InitalState = { title: 'Pick a book.', author: null, img: null };

export default function ActiveBookReducer(state = InitalState, { type, payload }) {
  switch (type) {
    case BOOK_SELECTED:
      return payload;

    default:
    // Fall through, silence linter error.
  }
  return state;
}
```

Before registering a reducer with the Redux store, it is a good idea to combine them all using `combineReducers` function.

### src/reducers/index.js

```js
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});
```

This is followed by setting up the reducer with Redux store.

### src/index.js

```js
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
document.getElementById('root'));
```

That's it!
