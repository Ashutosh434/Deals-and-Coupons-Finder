package com.example.couponservice.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Coupon")
public class Coupon {

    @Id
    private String id;
    private String couponCode;
    private String desc;

    public Coupon() {
    }

    public Coupon(String id, String couponCode, String desc) {
        super();
        this.id = id;
        this.couponCode = couponCode;
        this.desc = desc;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
