// components/PurchaseOrderForm.js
import React, { useState } from 'react';

const PurchaseOrderForm = ({ addOrder }) => {
  const [order, setOrder] = useState({ supplier: '', item: '', quantity: 0, deliveryDate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(order);
    setOrder({ supplier: '', item: '', quantity: 0, deliveryDate: '' });
  };

  return (
    <div>
      <h2>Purchase Order Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="supplier" value={order.supplier} onChange={handleChange} placeholder="Supplier" required />
        <input name="item" value={order.item} onChange={handleChange} placeholder="Item" required />
        <input name="quantity" type="number" value={order.quantity} onChange={handleChange} placeholder="Quantity" required />
        <input name="deliveryDate" type="date" value={order.deliveryDate} onChange={handleChange} required />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default PurchaseOrderForm;
