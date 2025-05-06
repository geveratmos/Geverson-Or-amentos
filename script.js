// Sistema de Orçamentos - script.js
// Variáveis globais
let itensOrcamento = [];
let orcamentosSalvos = JSON.parse(localStorage.getItem('orcamentos')) || [];

// Define a data de hoje no campo de data
document.addEventListener('DOMContentLoaded', function() {
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('orcamento-data').value = hoje;
    
    // Inicializar a interface
    atualizarTabelaItens();
    
    // Verificar orçamentos salvos
    if (orcamentosSalvos.length > 0) {
        document.getElementById('menu-orcamentos-salvos').click();
        atualizarListaOrcamentos();
        document.getElementById('menu-novo-orcamento').click();
    }
});

// Navegação entre abas
document.getElementById('menu-novo-orcamento').addEventListener('click', function() {
    document.getElementById('menu-novo-orcamento').classList.add('active');
    document.getElementById('menu-orcamentos-salvos').classList.remove('active');
    document.getElementById('novo-orcamento').classList.add('active');
    document.getElementById('orcamentos-salvos').classList.remove('active');
});

document.getElementById('menu-orcamentos-salvos').addEventListener('click', function() {
    document.getElementById('menu-orcamentos-salvos').classList.add('active');
    document.getElementById('menu-novo-orcamento').classList.remove('active');
    document.getElementById('orcamentos-salvos').classList.add('active');
    document.getElementById('novo-orcamento').classList.remove('active');
    atualizarListaOrcamentos();
});

// Botão Adicionar Item
document.getElementById('btn-adicionar-item').addEventListener('click', function() {
    adicionarItem();
});

// Função Adicionar Item
function adicionarItem() {
    // Pegar os valores dos campos
    const nome = document.getElementById('item-nome').value.trim();
    const ambiente = document.getElementById('item-ambiente').value.trim();
    const quantidade = parseInt(document.getElementById('item-quantidade').value);
    const valorUnitario = parseFloat(document.getElementById('item-valor').value);
    
    // Validação dos campos
    if (!nome) {
        alert('Preencha o nome do móvel');
        return;
    }
    if (!ambiente) {
        alert('Preencha o ambiente');
        return;
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Quantidade deve ser maior que zero');
        return;
    }
    if (isNaN(valorUnitario) || valorUnitario <= 0) {
        alert('Valor unitário deve ser maior que zero');
        return;
    }
    
    // Adicionar ao array de itens
    itensOrcamento.push({
        nome,
        ambiente,
        quantidade,
        valorUnitario
    });
    
    // Atualizar a tabela
    atualizarTabelaItens();
    
    // Limpar os campos após adicionar
    document.getElementById('item-nome').value = '';
    document.getElementById('item-ambiente').value = '';
    document.getElementById('item-quantidade').value = 1;
    document.getElementById('item-valor').value = 0.00;
    
    // Focar no campo de nome para adicionar novo item
    document.getElementById('item-nome').focus();
}

// Atualizar a tabela de itens
function atualizarTabelaItens() {
    const tbody = document.querySelector('#tabela-itens tbody');
    tbody.innerHTML = '';
    
    if (itensOrcamento.length === 0) {
        tbody.innerHTML = '<tr id="sem-itens"><td colspan="6">Nenhum item adicionado.</td></tr>';
        atualizarTotais(0);
        return;
    }
    
    let totalOrcamento = 0;
    
    // Adicionar cada item à tabela
    itensOrcamento.forEach((item, index) => {
        const subtotal = item.quantidade * item.valorUnitario;
        totalOrcamento += subtotal;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.ambiente}</td>
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${item.valorUnitario.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
            <td>
                <button onclick="removerItem(${index})" class="btn btn-danger">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    // Atualizar os totais
    atualizarTotais(totalOrcamento);
}

// Função para remover um item
function removerItem(index) {
    itensOrcamento.splice(index, 1);
    atualizarTabelaItens();
}

// Atualizar os valores totais
function atualizarTotais(total) {
    const desconto = total * 0.08;
    const valorAvista = total - desconto;
    const valorParcelado = total / 10;
    
    document.getElementById('orcamento-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('valor-avista').textContent = `R$ ${valorAvista.toFixed(2).replace('.', ',')}`;
    document.getElementById('valor-parcelado').textContent = `R$ ${valorParcelado.toFixed(2).replace('.', ',')}`;
}

// Formato para telefone
document.getElementById('cliente-telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        value = '(' + value;
        
        if (value.length > 3) {
            value = value.slice(0, 3) + ') ' + value.slice(3);
        }
        
        if (value.length > 10) {
            value = value.slice(0, 10) + '-' + value.slice(10, 14);
        }
    }
    
    e.target.value = value;
});

// Botão Salvar Orçamento
document.getElementById('btn-salvar-orcamento').addEventListener('click', function() {
    // Pegar os dados do cliente
    const cliente = document.getElementById('cliente-nome').value.trim();
    const telefone = document.getElementById('cliente-telefone').value.trim();
    const data = document.getElementById('orcamento-data').value;
    
    // Validações
    if (!cliente) {
        alert('Preencha o nome do cliente');
        return;
    }
    
    if (!telefone) {
        alert('Preencha o telefone do cliente');
        return;
    }
    
    if (itensOrcamento.length === 0) {
        alert('Adicione pelo menos um item ao orçamento');
        return;
    }
    
    // Criar o objeto do orçamento
    const novoOrcamento = {
        id: Date.now(), // ID único baseado em timestamp
        cliente,
        telefone,
        data,
        itens: [...itensOrcamento], // Clone da array
        total: document.getElementById('orcamento-total').textContent,
        avista: document.getElementById('valor-avista').textContent,
        parcelado: document.getElementById('valor-parcelado').textContent
    };
    
    // Adicionar ao array e salvar no localStorage
    orcamentosSalvos.push(novoOrcamento);
    localStorage.setItem('orcamentos', JSON.stringify(orcamentosSalvos));
    
    // Feedback ao usuário
    alert('Orçamento salvo com sucesso!');
    
    // Limpar formulário para novo orçamento
    limparFormulario();
});

// Botão Limpar Formulário
document.getElementById('btn-limpar-formulario').addEventListener('click', function() {
    if (confirm('Deseja limpar o formulário? Todos os dados não salvos serão perdidos.')) {
        limparFormulario();
    }
});

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('cliente-nome').value = '';
    document.getElementById('cliente-telefone').value = '';
    document.getElementById('item-nome').value = '';
    document.getElementById('item-ambiente').value = '';
    document.getElementById('item-quantidade').value = 1;
    document.getElementById('item-valor').value = 0.00;
    
    // Resetar a data para hoje
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('orcamento-data').value = hoje;
    
    // Limpar array de itens e atualizar tabela
    itensOrcamento = [];
    atualizarTabelaItens();
}

// Atualizar a lista de orçamentos salvos
function atualizarListaOrcamentos() {
    const container = document.getElementById('lista-orcamentos-salvos');
    container.innerHTML = '';
    
    if (orcamentosSalvos.length === 0) {
        container.innerHTML = '<p><strong>Ainda não há orçamentos salvos.</strong></p>';
        return;
    }
    
    // Mostra orçamentos do mais recente ao mais antigo
    orcamentosSalvos.slice().reverse().forEach((orcamento, index) => {
        // Calcula o índice real (considerando a inversão)
        const realIndex = orcamentosSalvos.length - 1 - index;
        
        // Formatar data para exibição
        let dataFormatada = orcamento.data;
        try {
            const dataParts = orcamento.data.split('-');
            if (dataParts.length === 3) {
                dataFormatada = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;
            }
        } catch (e) {
            // Se der erro na formatação, mantém a original
        }
        
        const card = document.createElement('div');
        card.classList.add('card', 'orcamento-card');
        card.innerHTML = `
            <h3>${orcamento.cliente}</h3>
            <div class="orcamento-info">
                <p><i class="fas fa-calendar"></i> ${dataFormatada}</p>
                <p><i class="fas fa-phone"></i> ${orcamento.telefone}</p>
                <p><i class="fas fa-tag"></i> ${orcamento.total}</p>
            </div>
            <div class="orcamento-actions">
                <button onclick="imprimirOrcamento(${realIndex})" class="btn btn-primary">
                    <i class="fas fa-print"></i> Imprimir
                </button>
                <button onclick="excluirOrcamento(${realIndex})" class="btn btn-danger">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para excluir um orçamento
function excluirOrcamento(index) {
    if (confirm('Tem certeza que deseja excluir este orçamento?')) {
        orcamentosSalvos.splice(index, 1);
        localStorage.setItem('orcamentos', JSON.stringify(orcamentosSalvos));
        atualizarListaOrcamentos();
    }
}

// Função para imprimir um orçamento salvo
function imprimirOrcamento(index) {
    const orcamento = orcamentosSalvos[index];
    
    // Formatar a data para exibição
    let dataFormatada = orcamento.data;
    try {
        const dataParts = orcamento.data.split('-');
        if (dataParts.length === 3) {
            dataFormatada = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;
        }
    } catch (e) {
        // Se der erro na formatação, mantém a original
    }
    
    // Criar HTML para impressão
    let conteudoImpressao = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Orçamento - ${orcamento.cliente}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    color: #333;
                }
                h1 {
                    text-align: center;
                    color: #005c9f;
                    border-bottom: 2px solid #005c9f;
                    padding-bottom: 10px;
                }
                .info-cliente {
                    margin-bottom: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
                .totais {
                    margin-top: 30px;
                    font-size: 16px;
                }
                .totais p {
                    margin: 5px 0;
                }
                .assinaturas {
                    margin-top: 50px;
                    display: flex;
                    justify-content: space-between;
                }
                .assinatura {
                    width: 200px;
                    border-top: 1px solid #000;
                    text-align: center;
                    padding-top: 5px;
                }
            </style>
        </head>
        <body>
            <h1>Orçamento de Móveis Planejados</h1>
            <div class="info-cliente">
                <p><strong>Cliente:</strong> ${orcamento.cliente}</p>
                <p><strong>Telefone:</strong> ${orcamento.telefone}</p>
                <p><strong>Data:</strong> ${dataFormatada}</p>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Ambiente</th>
                        <th>Móvel</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>`;
    
    // Adiciona os itens do orçamento
    orcamento.itens.forEach(item => {
        const subtotal = item.quantidade * item.valorUnitario;
        conteudoImpressao += `
                    <tr>
                        <td>${item.ambiente}</td>
                        <td>${item.nome}</td>
                        <td>${item.quantidade}</td>
                        <td>R$ ${item.valorUnitario.toFixed(2).replace('.', ',')}</td>
                        <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
                    </tr>`;
    });
    
    // Finaliza o HTML
    conteudoImpressao += `
                </tbody>
            </table>
            
            <div class="totais">
                <p><strong>Total do Orçamento:</strong> ${orcamento.total}</p>
                <p><strong>Valor à vista (8% desconto):</strong> ${orcamento.avista}</p>
                <p><strong>Parcelado em 10x sem juros:</strong> ${orcamento.parcelado} /mês</p>
            </div>
            
            <div class="assinaturas">
                <div class="assinatura">Cliente</div>
                <div class="assinatura">Vendedor</div>
            </div>
        </body>
        </html>
    `;
    
    // Abre uma nova janela para impressão
    const janela = window.open('', '', 'width=800,height=600');
    janela.document.write(conteudoImpressao);
    janela.document.close();
    janela.focus();
    
    // Aguarda carregar e chama o comando de impressão
    setTimeout(() => {
        janela.print();
    }, 500);
}