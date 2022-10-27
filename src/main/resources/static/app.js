/**
 * 
 */

var stompClinet=null;
var SOCKET_ENDPOINT="/an";
var SUBSCRIBE_PREFIX="/yin";//訂閱前綴
var SUBSCRIBE="";//用戶指定的訂閱位址
var SEND_ENDPOINT="/ap/tt";

function connect(){
	var socket=new SockJS(SOCKET_ENDPOINT);
	stompClinet=Stomp.over(socket);
	stompClinet.connect({},function(frame){
		alert("Connect OK!");
	});
}

function subscribeSocket(){
	SUBSCRIBE=SUBSCRIBE_PREFIX+$("#subscribe").val();
	alert("訂閱位置:"+SUBSCRIBE);
	stompClinet.subscribe(SUBSCRIBE,function(responseBody){
		var receiveMessage=JSON.parse(responseBody.body);
		$("#information").append("<tr><td>"+receiveMessage.content+"</td></tr>");
	});//最後收到的消息是空值請留意這一行
}

function disconnect(){
	stompClinet.disconnect(function(){
		alert("Conn break!")
	});
}

function sendMessageNoParameter(){
	var sendContent=$("#content").val();
	var message='{"destination": "' + SUBSCRIBE + '", "content": "' + sendContent + '"}';
	stompClinet.send(SEND_ENDPOINT,{},message);
}
 