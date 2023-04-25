import styles from "../../styles/orders.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'
import {useState, useEffect} from 'react';

const Order = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const products = [
        {
            name: "Rose",
            price: 5,
            quantity: 0,
        },
        {
            name: "Sunflower",
            price: 3,
            quantity: 0,
        },
        {
            name: "Orchid",
            price: 4,
            quantity: 0,
        },

    ];

    let save = async (values) => {

        console.log(values);
        const response = await data.saveOrder(values);
        console.log(response);
        if(response != null){
            reset();

        }
    }
    return(
        <>
            <div className={styles.container}>
            <h1 className={styles.form_title}>Add a new Order</h1>
            <form action="#" onSubmit={handleSubmit(save)}>

                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingAddress">Shipping Address</label>
                            <input type="text" id="shippingAddress" name="shippingAddress" {...register('shippingAddress', { required: true })} placeholder="Enter Shipping Address" />
                        </div>
                    </div>

                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="items">Items</label>
                            <select id="items" name="items" {...register('items', { required: true })}>
                                <option value="">Select Items</option>
                                {products.map((product) => (
                                    <option key={product.id} value={`${product.name}, ${product.price}`}>
                                        {product.name} (${product.price})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>



                    {products.map((product, index) => (
                        <div className={styles.main_user_info} key={index}>
                            <div className={styles.user_input_box}>
                                <label htmlFor={`quantity-${index}`}>Quantity ({product.name})</label>
                                <input
                                    type="number"
                                    id={`quantity-${index}`}
                                    name={`quantity-${index}`}
                                    {...register(`items[${index}].quantity`, { required: true })}
                                    placeholder="Enter Quantity"
                                />
                            </div>
                        </div>
                    ))}


                <div className={styles.main_user_info}>
                    <div className={styles.user_input_box}>
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <input type="text" id="paymentMethod" name="paymentMethod" {...register('paymentMethod', { required: true })} placeholder="Enter Payment Method" />
                    </div>
                </div>




                <div className={styles.main_user_info}>
                    <div className={styles.user_input_box}>
                        <label htmlFor="billingAddress">Billing Address</label>
                        <input type="text" id="billingAddress" name="billingAddress" {...register('billingAddress', { required: true })} placeholder="Enter Billing Address" />
                    </div>
                </div>

                <div className={styles.main_user_info}>
                    <div className={styles.user_input_box}>
                        <label htmlFor="total">Total</label>
                        <input type="number"
                               id="total"
                               step="0.01"
                               name="total"
                               {...register('total',
                                   {required: true,
                                       message: 'please enter a total' })}
                               placeholder="Enter Total"/>

                    </div>

                <div className={styles.form_submit_btn}>
                    <input type="submit" value="save" ></input>
                </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Order;