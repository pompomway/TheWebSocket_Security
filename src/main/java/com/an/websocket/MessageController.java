package com.an.websocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {
	
	@Autowired
	public SimpMessageSendingOperations simpMessageSendingOperations;
	
	@MessageMapping("/tt")
	public void sendTopicMessage(MessageBody me) {
		simpMessageSendingOperations.convertAndSend(me.getDestination(),me);
	}

}
