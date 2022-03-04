function RecibePedido(){

var data = {
    "Nombre": document.getElementById("InputName").value,
    "Tel": document.getElementById("InputTel").value,
    "Email": document.getElementById("InputEmail").value,
}
//debugger;
$.ajax({
    url: "/Pedidos/Guardar/",
    type: 'POST',
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
    console.log("Exito");

    }
     
   // $('#ModalPedidoRecibido').modal('show');

});
}
