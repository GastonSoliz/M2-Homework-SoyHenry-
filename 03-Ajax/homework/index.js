$('#boton').on('click',function(){
    $.get("http://localhost:5000/amigos",(data)=>{
        $('#lista').empty();

        for(let i=0;i<data.length;i++){
            let el = document.createElement('li');
            el.textContent=`${data[i].name}`
            $('#lista').append(el);
        }
    })
});


$('#search').on('click',function(){
    let ident = document.getElementById('input').value;
    $.get(`http://localhost:5000/amigos/${ident}`,(data)=>{

        let info = document.getElementById('amigo');
        info.textContent=data.name;

        $('#amigo').append(info);
    })
});

$('#delete').on('click',function(){
    let ident = document.getElementById('inputDelete').value;
    $.ajax({
        url:`http://localhost:5000/amigos/${ident}`,
        type:'DELETE',
        success: function(){
            let info = document.getElementById('delete');
            info.textContent = 'Tu amigo borrado fue borrado con exito';
            $('#success').append(info);

        }
        
    })
});