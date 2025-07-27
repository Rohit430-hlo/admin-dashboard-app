import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { ordersData } from '../data/ordersData';

const OrdersPage = () => {
  const { date } = useParams();
  const filteredOrders = ordersData.filter((order) =>
    dayjs(order.date).isSame(dayjs(date), 'day')
  );

  const dispatchedCount = filteredOrders.filter((o) => o.status === 'Dispatched').length;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Orders on {dayjs(date).format('DD MMMM YYYY')}
      </h2>

      <ul className="list-disc ml-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <li key={order.id}>
              {order.item} -{' '}
              <span
                className={
                  order.status === 'Dispatched' ? 'text-green-600 font-semibold' : 'text-yellow-600'
                }
              >
                {order.status}
              </span>
            </li>
          ))
        ) : (
          <p>No orders found for this date.</p>
        )}
      </ul>

      <p className="mt-4 font-semibold">Dispatched Orders: {dispatchedCount}</p>

      <Link to="/calendar">
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Back to Calendar
        </button>
      </Link>
    </div>
  );
};

export default OrdersPage;
