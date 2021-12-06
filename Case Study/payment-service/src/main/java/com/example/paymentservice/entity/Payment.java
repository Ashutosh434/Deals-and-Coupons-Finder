package com.example.paymentservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "payments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {

    @Id
    private String paymentId;  // auto generated
    private String paymentStatus; // for this I have made a method in service
    private String transactionId; // will be auto generated
    private String orderId; // will be taken from order entity
    private double price;   // will be taken from order entity
}
