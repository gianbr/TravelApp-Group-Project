import React, {useEffect, Fragment } from "react";
import './Orders.css';
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions";


function Orders () {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    
    useEffect(
      () => {
      dispatch(getOrders());
      }, [dispatch]);

   
  return (
    <Fragment>
      <div className="content">
        <div>
          <h3 style={{ color: "black" }}>Listado de Ordenes</h3>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>SERVICIO</th>
                <th>USUARIO</th>
                <th>PRECIO</th>
                <th>TOTAL</th>
                <th>ESTATUS</th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.flatMap(plain => (
                <tr key={plain.id}>
                  <td>{plain.plains.flatMap((el) => el.title).join(", ",)}</td>
                  <td >{plain.user}</td>
                  <td>{plain.plains.flatMap((el)=> el.price).join(", ")}</td>
                  <td>${plain.amount}</td>
                  <td>{plain.status}</td>
                  <td style={{ textAlign: "center" , display: "flex" , justifyContent: "space-around"}}>
                  </td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default Orders;