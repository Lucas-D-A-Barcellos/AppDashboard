$(document).ready(() => {

    $('#competencia').focus()

    $('#documentacao').on('click', () => {

        $.get('documentacao.html', data => { 

            $('#pagina').html(data)
        })

    })

    $('#suporte').on('click', () => {

        $.get('suporte.html', data => { 

            $('#pagina').html(data)
        })
    })


    $('#competencia').on('change', e => {

        let competencia = $(e.target).val()
        
        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,
            dataType: 'json',
            success: dados => { 
                console.log(dados)
                $('#numeroVendas').html(dados.numeroVendas.numero_vendas)
                $('#totalVendas').html(dados.totalVendas.total_vendas)
                $('#reclamacoes').html(dados.totalReclamacoes.numero_reclamacoes)
                $('#sugestao').html(dados.totalSugestoes.numero_sugestoes)
                $('#elogios').html(dados.totalElogios.numero_elogios)
                $('#ativos').html(dados.clientesAtivos.clientes_ativos)
                $('#inativos').html(dados.ClientesInativos.clientes_Inativos)
                $('#despesa').html(dados.totalDespesa.total_Despesa)
            },
            error: erro => { console.log(erro)}
        })

    })
	
})