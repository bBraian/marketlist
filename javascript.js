var itens = [];

$('#btn_add').on('click', ()=>{
    var nomeProduto = $('#nome_produto');
    var precoProduto = $('#valor_produto');

    itens.push({
        nome: nomeProduto.val(),
        valor: precoProduto.val()
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+= `
        
        <div class="lista-produtos-sigle">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$ `+val.valor+`</span></h3>
        </div>

        `;
    })

    soma = soma.toFixed(2);
    nomeProduto.val("");
    precoProduto.val("");

    let elementoSoma = $('.soma-produtos h1');
    elementoSoma.html('R$ '+soma);

});

function validaInputs() {

}