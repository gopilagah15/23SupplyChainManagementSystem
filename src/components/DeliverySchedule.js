// components/DeliverySchedule.js
import React, { useEffect } from 'react';

const DeliverySchedule = ({ orders }) => {
  useEffect(() => {
    const today = new Date();
    orders.forEach(order => {
      const deliveryDate = new Date(order.deliveryDate);
      const daysLeft = Math.ceil((deliveryDate - today) / (1000 * 60 * 60 * 24));
      if (daysLeft <= 3) {
        alert(`Reminder: Delivery for ${order.item} is due in ${daysLeft} days!`);
      }
    });
  }, [orders]);

  return (
    <div>
      <h2>Delivery Schedule</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order.item} - Delivery Date: {order.deliveryDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeliverySchedule;
