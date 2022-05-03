package com.example.falsarii.backend.payment;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


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
    	
    	Charge chargeDetail = stripeClient.chargeNewCard(token, amount);
    	
    	System.out.println("This is payment amount: " + chargeDetail.getAmount()/100);
    	System.out.println("This is billing address given at the time of payment: " + chargeDetail.getBillingDetails().getAddress());
    	
    	System.out.println("These are important ones Prajwal");
    	System.out.println("This is the Payment ID: "+ chargeDetail.getId());
    	System.out.println("This is receipt URL: " + chargeDetail.getReceiptUrl() );
    	
        return chargeDetail.getReceiptUrl();
    }
}
