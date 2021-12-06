package com.example.springcloudgatewayserverapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class SpringCloudGatewayServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringCloudGatewayServerApplication.class, args);
	}

}
