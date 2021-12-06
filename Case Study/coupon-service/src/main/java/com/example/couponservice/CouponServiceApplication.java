package com.example.couponservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableEurekaClient
public class CouponServiceApplication {


    public static void main(String[] args) {
        SpringApplication.run(CouponServiceApplication.class, args);

    }

    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

}
