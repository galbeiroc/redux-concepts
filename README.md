# Redux

Redux is a predictable state container for JS apps

* Redux stores the state of your applications
* State of an app is represented by all the individual component of that app
* In Redux the changes to your application's state become predictable
* In Redux, all state transitions are explicit and it is possible to keep track of them
Ex: Todo list app - item (pending) -> item (completed)

### Three Principles

#### First Principle
* "The state of your whole application is stored in object tree within a single store"

Maintain our application state in a single object which would be managed by the Redux store

#### Second Principle
* "The only way to change the state is to emit an action, an object describing what happened"

To update the state of your app, you need to let Redux about that an action
Not allowed to directly update the state object

#### Third Principle
* To Specify how the state tree is transformed by actions, you wire pure reducers"

Reducer - ___(previousState, action) => newState___

## Action
The only way your application can interact with store
Carry some information from your app to the redux store
Plain JS object
Have a 'type' property that indicates the type of action being performed
The 'type' property is typically defined as string constant

## Reducer
Specify how the app's state changes in response to actions sent to the store

Function that accepts state and action as arguments, and return the next state of the application.

___(previousState, action) => newState___

