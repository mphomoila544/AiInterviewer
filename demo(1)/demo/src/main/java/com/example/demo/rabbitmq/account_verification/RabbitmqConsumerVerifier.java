package com.example.demo.rabbitmq.account_verification;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class RabbitmqConsumerVerifier {

    @RabbitListener
    public void receiveMessage(String message){
        System.out.println(message);
    }
}
