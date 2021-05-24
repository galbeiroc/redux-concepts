# Redux

Redux is a predictable state container for JS apps

* Redux stores the state of your applications
* State of an app is represented by all the individual component of that app
* In Redux the changes to your application's state become predictable
* In Redux, all state transitions are explicit and it is possible to keep track of them
Ex: Todo list app - item (pending) -> item (completed)


## Example Cake Shop

### Entities
 Shop        - Stores cakes on a shelf
 Shopkeeper  - At the front of the store
 Customer    - At the store entrance

### Activities
Customer   - Buy a cake
Shopkeeper - Remove a cake from the shelf
           - Receipt to keep track

### Three Core Concepts contd.

| Cake Shop Scenary     | Redux   | Purpose                             |
|-----------------------|---------|-------------------------------------|
| Shop                  | Store   | Holds state of your application     |
| Intention to BUY_CAKE | Action  | Describe what happened              |
| Shopkeeper            | Reducer | Ties the store and actions together |

A Store that holds state of your application.
A Action that describes the changes in the state of the application.
A Reducer which actually carries out the state transition depending on the actions.

### Three Principles
Cake Shop-
#### First Principle
```js
{
  numberOfCakes: 10
}
```
#### Second Principle
```js
{
  type: BUY_CAKE
}
```
#### Third Principle
```js
function reducer(state, action) {
  switch(action.type) {
    case BUY_CAKE:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      }
  }
}
```
