package com.example.couponservice.services;

import com.example.couponservice.entity.Coupon;
import com.example.couponservice.repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CouponService {

    @Autowired
    private CouponRepository couponRepository;


    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }




    public String addCoupon( Coupon coupon) {
        couponRepository.save(coupon);
        return "New coupon Added";
    }


    public String deleteCoupon( String couponID) {
        couponRepository.deleteById(couponID);
        return "coupon deleted";
    }

    public Coupon updateCoupon( Coupon coupon,String couponID) {
        return couponRepository.save(coupon);
    }

    public Coupon getCouponByProductName(String productName) {
        return couponRepository.findByProductName(productName);
    }

}
