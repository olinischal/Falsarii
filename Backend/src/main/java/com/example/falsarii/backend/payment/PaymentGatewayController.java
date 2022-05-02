package com.example.falsarii.backend.payment;



import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.stripe.Stripe;
import com.stripe.model.Charge;





@RestController
@CrossOrigin("*")
@RequestMapping("/payment")
public class PaymentGatewayController {
	
	
	 
    private StripeClient stripeClient;
    @Autowired
    PaymentGatewayController(StripeClient stripeClient) {
        this.stripeClient = stripeClient;
    }
   

    @PostMapping("/charge")
    public String chargeCard(@RequestHeader(value="token") String token, @RequestHeader(value="amount") Double amount) throws Exception {
<<<<<<< HEAD

        return stripeClient.chargeNewCard(token, amount).toJson();
=======
    	
    	Charge chargeDetail = stripeClient.chargeNewCard(token, amount);
    	
    	System.out.println("This is payment amount: " + chargeDetail.getAmount()/100);
    	System.out.println("This is billing address given at the time of payment: " + chargeDetail.getBillingDetails().getAddress());
    	
    	System.out.println("These are important ones Prajwal");
    	System.out.println("This is the Payment ID: "+ chargeDetail.getId());
    	System.out.println("This is receipt URL: " + chargeDetail.getReceiptUrl() );
    	
        return chargeDetail.getReceiptUrl();
>>>>>>> c206993c6c615cd48f56e1525aeea48265850d81
    }
}
