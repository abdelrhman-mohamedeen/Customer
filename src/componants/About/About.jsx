import React, { useState, useEffect } from "react";
import axios from "axios";

const About = ({ onSelectCustomer }) => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    amount: "",
    transactionCount: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await axios.get(
          "https://abdelrhman-mohamedeen.github.io/Customer/db.json/customers"
        );
        const transactionsResponse = await axios.get(
          "https://abdelrhman-mohamedeen.github.io/Customer/db.json/transactions"
        );
        setCustomers(customersResponse.data);
        setTransactions(transactionsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredCustomers = customers.filter((customer) => {
    const customerTransactions = transactions.filter(
      (t) => t.customer_id === customer.id
    );
    const totalAmount = customerTransactions.reduce(
      (sum, t) => sum + t.amount,
      0
    );
    const transactionCount = customerTransactions.length;

    return (
      customer.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      (filter.amount === "" || totalAmount === parseFloat(filter.amount)) &&
      (filter.transactionCount === "" ||
        transactionCount === parseInt(filter.transactionCount))
    );
  });

  const handleCustomerClick = (customerId) => {
    const selectedCustomer = customers.find(
      (customer) => customer.id === customerId
    );
    if (selectedCustomer) {
      const customerTransactions = transactions.filter(
        (t) => t.customer_id === selectedCustomer.id
      );
      const totalAmount = customerTransactions.reduce(
        (sum, t) => sum + t.amount,
        0
      );
      const transactionCount = customerTransactions.length;

      window.alert(
        `Customer Name: ${selectedCustomer.name}\nTotal Amount: ${totalAmount}\nTransaction Count: ${transactionCount}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col justify-center items-center sm:py-12">
      <div className="p-5 flex justify-between my-5 mx-auto w-3/4 sm:w-2/4 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Filter by name"
          value={filter.name}
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
          className="text-center px-4 py-2 border-2 border-teal-600 rounded-md outline-none focus:border-teal-800 bg-opacity-50 text-lg text-teal-800 placeholder-teal-600"
        />

        <input
          type="number"
          placeholder="Filter by exact amount"
          value={filter.amount}
          onChange={(e) => setFilter({ ...filter, amount: e.target.value })}
          className="text-center px-4 py-2 border-2 border-teal-600 rounded-md outline-none focus:border-teal-800 bg-opacity-50 text-lg text-teal-800 placeholder-teal-600"
        />

        <input
          type="number"
          placeholder="Filter by transaction count"
          value={filter.transactionCount}
          onChange={(e) =>
            setFilter({ ...filter, transactionCount: e.target.value })
          }
          className="text-center px-4 py-2 border-2 border-teal-600 rounded-md outline-none focus:border-teal-800 bg-opacity-50 text-lg text-teal-800 placeholder-teal-600"
        />
      </div>
      <table className="mt-8 mx-auto w-3/4 sm:w-2/4 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-teal-600 text-white">
            <th className="text-lg py-2 px-4 border-b-2 border-teal-600">
              Name
            </th>
            <th className="text-lg py-2 px-4 border-b-2 border-teal-600 text-center">
              Total Amount
            </th>
            <th className="text-lg py-2 px-4 border-b-2 border-teal-600 text-center">
              Transaction Count
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => {
            const customerTransactions = transactions.filter(
              (t) => t.customer_id === customer.id
            );
            const totalAmount = customerTransactions.reduce(
              (sum, t) => sum + t.amount,
              0
            );
            const transactionCount = customerTransactions.length;

            return (
              <tr
                key={customer.id}
                onClick={() => handleCustomerClick(customer.id)}
                className="bg-white hover:bg-teal-100 transition-colors cursor-pointer"
              >
                <td className="text-lg py-2 px-4 border-b border-teal-600">
                  {customer.name}
                </td>
                <td className="text-lg py-2 px-4 border-b border-teal-600 text-center">
                  {totalAmount}
                </td>
                <td className="text-lg py-2 px-4 border-b border-teal-600 text-center">
                  {transactionCount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default About;
