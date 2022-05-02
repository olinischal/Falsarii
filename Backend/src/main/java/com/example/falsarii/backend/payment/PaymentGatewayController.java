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

        return stripeClient.chargeNewCard(token, amount).toJson();
    }
}
