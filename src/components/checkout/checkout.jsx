import React, { useContext, useState} from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../shared/layout';
import ShippingAddress from './custom-checkout/shipping-address';
import './checkout.scss';

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);

  const [shipping, setShipping] = useState(null);
  const addressShow = {
    display: (shipping ? 'none' : 'block')
  }

  return (
    <Layout>
      <div className='checkout'>
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $${total}`}</h4>
        <div style={addressShow}>
          <ShippingAddress setShipping={setShipping} />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
