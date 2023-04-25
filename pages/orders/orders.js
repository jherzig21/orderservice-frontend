


import styles from "../../styles/orders.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    // const [loading, setLoading] = useState(false);
    //
    // useEffect(() => {
    //     setLoading(true);
    //     data.orders()
    //         .then((data) => {
    //             setOrders(data);
    //             setLoading(false);
    //             console.log(data);
    //         })
    //         .catch((e) => console.log(e));
    // }, []);
    //
    // if (loading) {
    //     return <Spinner />;
    // } else
        return (
            <>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Shipping Address</th>
                            <th>Items</th>
                            <th>Payment</th>
                            <th>Billing Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((o, i) => (
                            <tr key={i}>
                                <td data-label="ShippingAddress">{o.address}</td>
                                <td data-label="items">{o.items}</td>
                                <td data-label="payment">{o.payment}</td>
                                <td data-label="billingAddress">{o.payment.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
};

export default Orders;