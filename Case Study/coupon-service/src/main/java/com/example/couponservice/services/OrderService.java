package com.example.couponservice.services;

import com.example.couponservice.entity.Order;
import com.example.couponservice.entity.TransactionRequest;
import com.example.couponservice.entity.TransactionResponse;
import com.example.couponservice.outsider.Payment;
import com.example.couponservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private RestTemplate restTemplate;

    public TransactionResponse saveOrder(TransactionRequest request) {

        // for getting response on payment success
        String response="";


        // "order will make a request to the "Order" class  and "payment" will make a request to "Payment" class
        Order order = request.getOrder();
        Payment payment = request.getPayment();

        // getting orderId from order and setting it into orderId in payments
        payment.setOrderId(order.getId());

        // getting price of order from order class and set it inside payments
        payment.setPrice(order.getPrice());

        // will have to call restTemplate
        // using post because our mapping in controller is of type post
        // url will be of the payment service which is performing post operation for payments
        Payment paymentResponse =  restTemplate.postForObject("http://localhost:1002/payment/doPayment",payment,Payment.class);

        // check for payments just messages
        response = paymentResponse.getPaymentStatus().equals("success")?"payment is completed successfully and order is placed":"payment api failed ";

        orderRepository.save(order);

        // returning things we need in payment response
        return new TransactionResponse(order, paymentResponse.getPrice(), paymentResponse.getTransactionId(), response);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
