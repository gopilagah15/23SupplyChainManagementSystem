// App.js
import React, { useState } from 'react';
import PurchaseOrderForm from './components/PurchaseOrderForm';
import DeliverySchedule from './components/DeliverySchedule';
import Invoice from './components/Invoice';
import SupplyChainReport from './components/SupplyChainReport';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [invoices, setInvoices] = useState([]);
  
  const addOrder = (order) => {
    setOrders([...orders, order]);
  };
  
  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  return (
    <div>
      <h1>Supply Chain Management System</h1>
      <PurchaseOrderForm addOrder={addOrder} />
      <DeliverySchedule orders={orders} />
      <Invoice orders={orders} addInvoice={addInvoice} />
      <SupplyChainReport orders={orders} invoices={invoices} />
    </div>
  );
};

export default App;
