package com.example.productservice.service;


import com.example.productservice.entity.Product;
import com.example.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public String addProduct(Product product) {
        productRepository.save(product);
        return "New Product Added";
    }


    public String deleteProduct(String productID) {
        productRepository.deleteById(productID);
        return "User deleted";
    }


    public Product updateProduct(Product product, String productID) {
        return productRepository.save(product);
    }

}
