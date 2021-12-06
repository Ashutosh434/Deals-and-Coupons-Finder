package com.example.couponservice.controller;

import com.example.couponservice.entity.Order;
import com.example.couponservice.entity.TransactionRequest;
import com.example.couponservice.entity.TransactionResponse;
import com.example.couponservice.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/couponOrder")   // Requesting TransactionRequest class and will ask for order object from it
    public TransactionResponse couponOrder(@RequestBody TransactionRequest request){


        return orderService.saveOrder(request);
    }

    @GetMapping(value = "/list")
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

}
