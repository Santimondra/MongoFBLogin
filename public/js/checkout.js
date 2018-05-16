console.log(arreglo);

fetch('http://localhost:5000/productosPorIds?ids='+arreglo)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);

    var lista = document.querySelector('.lista');
    res.forEach(function(elem){
        lista.innerHTML += '<li><img width="100" src="{{'+elem.imagen+'}}">{{' + elem.sabor + '}}</li>';
    });
});