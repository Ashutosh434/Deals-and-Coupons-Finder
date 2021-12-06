package com.example.couponservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Coupon")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Coupon {

    @Id
    private String couponId;
    private String couponCode;
    private String desc;
    private String productType;
    private String productName;
}



