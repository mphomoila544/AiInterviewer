package com.example.demo.registration;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;

@Component
@RabbitListener(queues = "register")
public class RegistrationConsumer {

    @RabbitHandler
    public void receiveMessage(byte[] message){
        String messageString = new String(message, StandardCharsets.UTF_8);
        System.out.println("The received message is: " + messageString);

    }
}

