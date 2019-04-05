function carregarDados(){
    var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function(){       
        /*
            readyState:
            0 - requisição não foi iniciada;
            1 - conexão com o servidor estabelecida;
            2 - requisição foi recebida pelo servidor;
            3 - requisição está sendo processada;
            4 - resposta pronta;

            status:
            200 - resposta ok (conexão funcionou);
            404 - página/url não for encontrada;
        */
       
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.respo)
            document.getElementById("dados").innerHTML = formata(xhr.responseText);
        }
    }

    xhr.open("GET", "produtos.json", true);
    xhr.send();
}

function formata(strDados){
    var objDados = JSON.parse(strDados);
    var linhasTabela = '';
    for(lp of objDados['lista-de-produtos']){
        var preco = (new Number(lp['preco'])).toFixed(2).replace('.',',');
        linhasTabela += '<tr><td>'+lp['codigo']+'</td>';
        linhasTabela += '<td>'+lp['nome']+'</td>';
        linhasTabela += '<td>'+preco+'</td></tr>';
    }    
    return linhasTabela;
}