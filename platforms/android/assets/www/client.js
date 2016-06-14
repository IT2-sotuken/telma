$(document).ready(function(){
        //var socket = io.connect('localhost:8080');
        var socket = io.connect('http://localhost:8080');
        socket.on('greeting', function(data){
            alert(data);
        })
		 socket.on('new-user', function(data){
        alert(data + ' Have joined!');
    })
		$('#go').click(function(){
            socket.emit('user-join',$('#name').val());
        })
    })