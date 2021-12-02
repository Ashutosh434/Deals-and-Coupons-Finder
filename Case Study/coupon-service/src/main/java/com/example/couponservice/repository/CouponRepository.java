package com.example.couponservice.repository;

import com.example.couponservice.entity.Coupon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CouponRepository extends MongoRepository <Coupon, String>{

}
