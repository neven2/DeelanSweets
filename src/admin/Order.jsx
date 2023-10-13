import React, { useState, useEffect } from "react";
import useGetData from "../custom-hooks/useGetData";
import { collection, addDoc, getDocs,doc,deleteDoc } from "firebase/firestore";
import {db} from "../firebase.config";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
function Orders() {

 const { data: orders, loading } = useGetData("orders");

 const deleteOrders = async id => {
    await deleteDoc(doc(db, "orders", id));
    toast.success("Deleted!");
  };


  
  return (
   <>
    <Container className='p-2'>
    {orders.map((order) => {
        return (
          <>
         
          <table className="table mt-3 order text-center">
            <thead>
              <tr className="py-3">
                <th>Name</th>
                 <th>Phone</th>
                <th>Address</th>
                <th>City</th>
                <th>Additonal info</th>
               
              </tr>
            </thead>
            <tbody>
              {order.addressInfo.map((item) => {
                return (
                  <tr className="py-3">
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.phone}
                    </td>
                    <td>{item.address}</td>
                    <td>{item.city} </td>
                    <td>{item.additionalInfo} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          

          <table className="table mt-3 order text-center">
            <thead>
              <tr className="py-3">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.cartItems.map((item) => {
                return (
                  <tr className="py-3">
                    <td>
                      <img src={item.productImg} height="80" width="80" />
                    </td>

                    <td>{item.productName}</td>
                    <td>{item.price} IQD</td>
                    <td>{item.qty} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="buy__btn"  onClick={() => {
                            deleteOrders(order.id);
                          }}> Delete Orders</button>
          </>
        )
      })}
    </Container>
    </>
  );
}

export default Orders;
