import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deccrement,
  increment,
  incrementByValue,
  reset,
} from "../../app/Counter/CounterSlice";
import { fetchPosts } from "../../app/Counter/Todos";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
const Counter = () => {
  const { counter1, counter2 } = useSelector((state) => state.counter);
  const { datas, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const columns = [
    {
      name: <h3>Id</h3>,
      selector: (row) => row.id,
      sortable:true
    },
    {
      name: <h3>title</h3>,
      selector: (row) => row.title,
      sortable:true
    },
    {
      name: <h3>Actions</h3>,
      cell: (row) => {
        return (
          <div className="text-center">
            <Button className="me-1" variant="dark">Edit</Button>
            <Button className="me-1" variant="danger">Delete</Button>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="bg-light mt-1 pt-1">
      {/* <div>
      counter1 : {counter1} <br />
      counter2 : {counter2}<br />
      <Button variant="success" onClick={() => dispatch(increment())}>
        increment
      </Button>
      <Button variant="danger" onClick={()=>dispatch(deccrement())}>decrement</Button>
      <Button variant="warning" onClick={()=>dispatch(reset())}>reset</Button>
      <Button variant="success" onClick={() => dispatch(incrementByValue(5))}>increment by value 5</Button>      
      <Button variant="success" onClick={() => dispatch(fetchPosts())}>fetch post</Button>      
      </div> */}
      <div>
        <DataTable
          title={
            <h1 className="p-1 rounded-1">
              Teacher table
            </h1>
          }
          columns={columns}
          data={datas}
          fixedHeaderScrollHeight="250px"
          pagination
          selectableRows
          highlightOnHover
          actions={<Button className="me-1 btn btn-success">Export</Button>}          
        />
      </div>
      {/* <div>
            {isLoading && <h1>loading</h1>}
            {error && <h1>{error}</h1>}
            {datas && datas.map((post)=>{
                return<h1>{post.id}</h1>                
            })}
      </div> */}
    </div>
  );
};
export default Counter;
