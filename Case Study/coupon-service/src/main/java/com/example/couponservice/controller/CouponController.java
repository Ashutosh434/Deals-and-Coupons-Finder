package com.example.couponservice.controller;

import com.example.couponservice.entity.Coupon;
import com.example.couponservice.repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/coupon")
public class CouponController {

    @Autowired
    private CouponRepository couponRepository;

    @GetMapping(value = "/list")
    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }

    @PostMapping(value = "/add")
    public String addCoupon(@RequestBody Coupon coupon){
        couponRepository.save(coupon);
        return "New coupon Added";
    }
    @DeleteMapping(value = "/delete/{couponID}")
    public String deleteCoupon(@PathVariable String couponID){
        couponRepository.deleteById(couponID);
        return "coupon deleted";
    }
    @PutMapping(value = "/update/{couponID}")
    public Coupon updateCoupon(@RequestBody Coupon coupon, @PathVariable String couponID){
        return couponRepository.save(coupon);
    }

}
