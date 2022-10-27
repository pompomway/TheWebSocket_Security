package com.an.websocket;

import lombok.Data;

@Data
public class MessageBody {
	//發送消息的用戶
	private String from;
	//訊息
	private String content;
	//發送目標地址
	private String destination;
	//目標用戶(告知STOMP代理轉發到哪個用戶)
	private String targetUser;
	
}
