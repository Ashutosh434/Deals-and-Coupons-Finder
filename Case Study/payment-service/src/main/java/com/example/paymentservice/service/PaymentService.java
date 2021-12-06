package com.example.paymentservice.service;

import com.example.paymentservice.entity.Payment;
import com.example.paymentservice.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment doPayment(Payment payment) {

        payment.setPaymentStatus(paymentProcessing());

        payment.setTransactionId(UUID.randomUUID().toString());
        return paymentRepository.save(payment);
    }

    //random method to set payment status
    public String paymentProcessing() {
        // it will be called by third party payment gateway (paytm, phone pay (any))
        return new Random().nextBoolean() ? "success" : "false";
    }

}
