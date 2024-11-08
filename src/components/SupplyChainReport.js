// components/SupplyChainReport.js
import React from 'react';

const SupplyChainReport = ({ orders, invoices }) => {
  const totalOrders = orders.length;
  const totalInvoices = invoices.length;

  const totalOrderQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
  const totalInvoiceAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div>
      <h2>Supply Chain Efficiency Report</h2>
      <p>Total Orders: {totalOrders}</p>
      <p>Total Invoices: {totalInvoices}</p>
      <p>Total Order Quantity: {totalOrderQuantity}</p>
      <p>Total Invoice Amount: ${totalInvoiceAmount.toFixed(2)}</p>
    </div>
  );
};

export default SupplyChainReport;
