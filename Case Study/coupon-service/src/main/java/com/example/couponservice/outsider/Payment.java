package com.example.couponservice.outsider;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {


    private String paymentId;  // auto generated while doing rest api call
    private String paymentStatus; // for this I have made a method in service
    private String transactionId; // will be auto generated
    private String orderId; // will be taken from order entity
    private double price;   // will be taken from order entity
}
