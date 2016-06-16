$(document).ready(function(){
        var socket = io.connect('http://172.18.93.199:3000');
        //var socket = io.connect('http://192.168.179.4:8080/');
        // socket.on('clientsend', function(data){
        //     alert(data);
        // })

		$('#go').click(function(){
            socket.emit('user-join',$('#name').val());
        })
        //alert(socket.connected);
    })