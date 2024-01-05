#### 1. Slice Definition: Use createSlice to define a Redux slice with a counter and reducer logic.
```
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});
```
----
#### 2. Export Actions and Reducer: Extract the actions and reducer from the created slice.
```
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```
---
#### 3. Usage in Component: In a React component, use these actions with useDispatch to interact with the Redux store.
```
import { useDispatch, useSelector } from 'react-redux';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  // Dispatch actions as needed
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};
```
---
#### 4. Combine Reducers: Configure the Redux store by combining reducers using configureStore.
```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```
---
#### 5. Provider Setup: Wrap your application with the Redux Provider to make the store accessible to components.
```
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <CounterComponent />
  </Provider>,
  document.getElementById('root')
);
```
