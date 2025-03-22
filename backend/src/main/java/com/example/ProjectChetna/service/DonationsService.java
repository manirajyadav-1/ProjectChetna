package com.example.ProjectChetna;

import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import jakarta.annotation.PostConstruct;
import org.json.JSONObject;
import com.razorpay.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class DonationsService {

    @Autowired
    private DonationsRepository donationsRepository;

    @Value("$razorpay.key.id")
    private String razorpayId;
    @Value("$razorpay.key.secret")
    private String razorpaySecret;

    private RazorpayClient razorpayClient;

    @PostConstruct
    public void init() throws RazorpayException {
        this.razorpayClient = new RazorpayClient(razorpayId,razorpaySecret);
    }

    public Donations createDonation(Donations donation) throws RazorpayException {
        JSONObject options = new JSONObject();
        options.put("amount", donation.getAmount() * 100); // amount in paise
        options.put("currency", "INR");
        options.put("receipt", donation.getEmail());
        Order razorpayDonation = razorpayClient.orders.create(options);
        if(razorpayDonation != null) {
            donation.setRazorpayDonationId(razorpayDonation.get("id"));
            donation.setDonationStatus(razorpayDonation.get("status"));
        }
        return donationsRepository.save(donation);
    }

}
