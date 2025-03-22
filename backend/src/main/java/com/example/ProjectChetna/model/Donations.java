package com.example.ProjectChetna;

import jakarta.persistence.*;

@Entity
@Table(name = "Donation")
public class Donations {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer donationId;
    private String name;
    private String email;
    private Integer amount;
    private String razorpayDonationId;
    private String donationStatus;


    public Integer getDonationId() {
        return donationId;
    }

    public void setDonationId(Integer donationId) {
        this.donationId = donationId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getRazorpayDonationId() {
        return razorpayDonationId;
    }

    public void setRazorpayDonationId(String razorpayDonationId) {
        this.razorpayDonationId = razorpayDonationId;
    }

    public String getDonationStatus() {
        return donationStatus;
    }

    public void setDonationStatus(String donationStatus) {
        this.donationStatus = donationStatus;
    }
}
