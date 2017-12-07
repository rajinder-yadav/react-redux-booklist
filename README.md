# Redux Booklist React App

[<h3>Demo website</h3>](https://rajinder-yadav.github.io/react-redux-booklist/)

This web-application was developed using React.js and uses Redux to work with data.

A middleware async dispatcher is used to send actions, see `src/index.js` for details.

The code shows how to use `redux-promise` as a middleware to deal with asyn request.

```js
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
```

The Service class `BookService` uses _Firebase_ to fetch data from a NoSQL database asynchronously.

This project demonstrates usage of:

* React
* Redux
* Firebase
* Middleware setup
* redux-promise
* Service class

## Higher Order Components

A HOC is a design pattern that define a function that takes a component and returns a new wrapped component.

This Redux application makes use of HOC, it takes the App component and wraps it within the Provider component. This makes the Redux `store` available to all components.

```js
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
document.getElementById('root'));
```

## Three Principles of Redux

1. State is immutable
1. An _action_ is used to cause _state_ to update.
1. A _reducer_ is a pure-function that returns a new state given an action.

## Action

An _Action_ creator is responsible for providing data that will be consumed by the reducer to create a new _State_ object.

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

A _Reducer_ is a _pure_ function that accepts two parameters:

1. State
1. Action

```js
function(state, action) => state;
```

It is highly advisable to assign a default state, since the initial state will be _undefined_ when the application first starts up.

For unknown action type, the reducer function **must** return the _state_ object.

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

The `combineReducers` function is what untimately defines the shape of the application state in the Redux store.

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
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
document.getElementById('root'));
```

Finally in order for a React component to be able to fetch the state from the Redux store, it need to be turned into a _container_. This is done using the `connect` function provided by the `react-redux` library.

The `connect` call binds a helper function, in the case below `mapStateToProps` and passes in the state object that is return by the reducer function that was defined earlier in `combineReducer`.

The state object is then made available to the component as a property on the `props` variable.

```js
import { connect } from 'react-redux';

function mapStateToProps(store) {
  return {
    books: store.books,
    activeBook: store.activeBook
  };
}

export default connect(mapStateToProps, ...)(BooksList);
```

If the container also needs to dispatch an action to the Redux store, we make use of `bindActionCreators` provided by the `redux` library. This gets bound to the component and made available as a property on the `props` variable.

The dispather sends the action and the payload to **all** the reducer in Redux, which deals with the action accordingly or simply ignores it.

```js
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BooksActionCreators, dispatch);
}

export default connect(..., mapDispatchToProps)(BooksList);
```

That's it for advanced asynchronous Redux!
