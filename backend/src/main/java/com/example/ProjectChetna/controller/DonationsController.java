package com.example.ProjectChetna;

import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class DonationsController {

    @Autowired
    private DonationsService donationsService;

    @GetMapping("/donations")
    public String donationPage(){
        return "Donation Page";
    }

    @PostMapping(value = "/createDonation", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Donations> createOrder(@RequestBody Donations donations) throws RazorpayException {
        Donations razorpayDonation = donationsService.createDonation(donations);
        return new ResponseEntity<>(razorpayDonation, HttpStatus.CREATED);
    }

}
