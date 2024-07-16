import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Portfolio = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await axios.get(
          "https://abdelrhman-mohamedeen.github.io/Customer/db.json"
        );
        const transactionsResponse = await axios.get(
          "https://abdelrhman-mohamedeen.github.io/Customer/db.json"
        );
        setCustomers(customersResponse.data);
        setTransactions(transactionsResponse.data);
        setLoading(false);

        setTimeout(() => {
          setDelayed(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setDelayed(false);
      }
    };
    fetchData();
  }, []);

  const customerData = customers.map((customer) => {
    const customerTransactions = transactions.filter(
      (t) => t.customer_id === customer.id
    );
    const totalAmount = customerTransactions.reduce(
      (sum, t) => sum + t.amount,
      0
    );
    const transactionCount = customerTransactions.length;
    return {
      name: customer.name,
      totalAmount: totalAmount,
      transactionCount: transactionCount,
    };
  });

  if (loading || delayed) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col justify-center items-center sm:py-12">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-teal-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10  sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-teal-600 mb-4">
                Customer Portfolio Summary
              </h1>
            </div>
            <div className=" ml-0 ">
              <BarChart width={500} height={400} data={customerData}>
                <CartesianGrid strokeDasharray="0 0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalAmount" fill="black" name="Total Amount" />
                <Bar
                  dataKey="transactionCount"
                  fill="teal"
                  name="Transaction Count"
                />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
