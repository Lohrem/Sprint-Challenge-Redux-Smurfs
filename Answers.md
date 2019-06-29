1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a      new object while extending the properties of another object?
    .map(), .concat(), and the spread operator are all used because of immuatbility

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the      store known as a 'single source of truth' in a redux application?
    [actions] - functions that create action
    [reducers] - functions that take the current state and an action, and return the new next state
    [store] - holds the whole state of the application
    The store is known as that because it holds everything in one convenient place
1.  What is the difference between Application state and Component state? When would be a good time to use one       over the other?
    App state would be when a store is being used and the whole state is in one place, used for bigger apps.
    Component state is when the state is being held in that component that it is in, used is small apps.
1.  What is middleware?
    It acts as a bridge between the actions and the reducers, interacts with actions before they are dispatched to the reducers.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    [redux-thunk] is used for communicating async with API's to retrieve or save data.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    { connect }
