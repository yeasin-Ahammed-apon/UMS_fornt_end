import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deccrement, increment, incrementByValue, reset } from "../../app/Counter/CounterSlice";
import { fetchPosts } from "../../app/Counter/Todos";

const Counter = () => {
  const { counter1, counter2 } = useSelector((state) => state.counter);
  const {datas,isLoading,error} = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="bg-light">
      counter1 : {counter1}
      <br />
      counter2 : {counter2}
      <br />
      <Button variant="success" onClick={() => dispatch(increment())}>
        increment
      </Button>
      <Button variant="danger" onClick={()=>dispatch(deccrement())}>decrement</Button>
      <Button variant="warning" onClick={()=>dispatch(reset())}>reset</Button>
      <Button variant="success" onClick={() => dispatch(incrementByValue(5))}>
        increment by value 5
      </Button>      
      <Button variant="success" onClick={() => dispatch(fetchPosts())}>
        fetch post
      </Button>      
      <div>
            {isLoading && <h1>loading</h1>}
            {error && <h1>{error}</h1>}
            {datas && datas.map((post)=>{
                return(
                    <h1>
                        {post.id}
                    </h1>
                )
            })}
      </div>
    </div>
  );
};

export default Counter;
