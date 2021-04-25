import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IkAQ7Depc8bisOOC9ys2NEPDoKps9KpuYmUoCVwpc55yOLSX2KUiuAavaYSuJNjj86hmxFzQzZM83YyClnuIHJg00sAf8TTwK'
    
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <>
          <StripeCheckout  
            label= 'Pay Now'
            name= 'CRWN Clothing Ltd.'
            billindAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
          />  
        </>
    )
}

export default StripeCheckoutButton
