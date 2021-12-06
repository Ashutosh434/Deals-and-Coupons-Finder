package com.example.couponservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionResponse {

    // for what responses will I be showing to the user
    private Order order;
    private double price;
    private String transactionId;
    private String message;
}
