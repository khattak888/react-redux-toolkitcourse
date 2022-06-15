import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { decrement,increment , incrementByAmount} from "./counterSlice";

const Counter = () => {
 const count = useSelector((state)=> state.counter.count);
 const themeTextColor = useSelector((state)=>state.theme.color)
 const dispatch = useDispatch();
  return (
    <div>
      <button
        className="button"
        aria-aria-label="Increment value"
        onClick={() => {
         dispatch(increment())
         
        }}
      >
        +
      </button>
      <span className="value" style={{color:themeTextColor}}>Count: {count}</span>
      <button
        className="button"
        aria-aria-label="Decrement value"
        onClick={() => {
            dispatch(decrement())
          
        }}
      >
        -
      </button>

      <button
        className="button"
        
        onClick={() => {
            dispatch(incrementByAmount(10))
          
        }}
      >
        increment by 10
      </button>
    </div>
  );
};

export default Counter;
