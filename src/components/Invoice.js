// components/Invoice.js
import React, { useState } from 'react';

const Invoice = ({ orders, addInvoice }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleInvoice = () => {
    if (selectedOrder) {
      const invoice = {
        supplier: selectedOrder.supplier,
        item: selectedOrder.item,
        quantity: selectedOrder.quantity,
        amount: selectedOrder.quantity * 10, // example unit price
      };
      addInvoice(invoice);
      alert(`Invoice generated for ${selectedOrder.item}`);
    }
  };

  return (
    <div>
      <h2>Generate Invoice</h2>
      <select onChange={(e) => setSelectedOrder(orders[e.target.value])}>
        <option value="">Select Order</option>
        {orders.map((order, index) => (
          <option key={index} value={index}>
            {order.item} from {order.supplier}
          </option>
        ))}
      </select>
      <button onClick={handleInvoice} disabled={!selectedOrder}>Generate Invoice</button>
    </div>
  );
};

export default Invoice;
