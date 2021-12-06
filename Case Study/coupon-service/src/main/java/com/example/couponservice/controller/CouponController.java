package com.example.couponservice.controller;


import com.example.couponservice.entity.Coupon;
import com.example.couponservice.services.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping({"/coupon"})

public class CouponController {

    private final CouponService couponService;

    @Autowired
    public CouponController(CouponService couponService) {
        this.couponService = couponService;
    }

    // for all
    @GetMapping(value = "/list")
    public List<Coupon> getAllCoupons() {
        return couponService.getAllCoupons();
    }

    // to get by product name
//    @GetMapping(value = "/list/{productName}")
//    public List<Coupon> getAllCoupons(@PathVariable String productName) {
//        return couponService.getAllCoupons();
//    }

    // to add new coupons
    @PostMapping(value = "/add")
    public String addCoupon(@RequestBody Coupon coupon) {
        return couponService.addCoupon(coupon);
    }

    // to delete coupon id
    @DeleteMapping(value = "/delete/{couponID}")
    public String deleteCoupon(@PathVariable String couponID) {
        return couponService.deleteCoupon(couponID);
    }

    // update coupon by id
    @PutMapping(value = "/update/{couponID}")
    public Coupon updateCoupon(@RequestBody Coupon coupon, @PathVariable String couponID) {
        return couponService.updateCoupon(coupon, couponID);
    }
    @GetMapping(value = "/")
    public Coupon getCoupon(@RequestParam String productName) {
        return couponService.getCouponByProductName(productName);

    }
}
