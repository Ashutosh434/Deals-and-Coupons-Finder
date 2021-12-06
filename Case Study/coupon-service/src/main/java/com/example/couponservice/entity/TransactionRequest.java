package com.example.couponservice.entity;

import com.example.couponservice.outsider.Payment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionRequest {

    // Created objects of order and transaction
    private Order order;
    private Payment payment;

}
