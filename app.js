// Banco de dados de móveis por ambiente
const mobileDatabase = {
    quarto: [
        "Roupeiro/Guarda-roupa", "Cômoda", "Painel para TV", "Cabeceira", 
        "Criado-mudo/Mesa de cabeceira", "Sapateira", "Penteadeira/Bancada de maquiagem", 
        "Baú para pé da cama", "Prateleiras decorativas", "Nichos", 
        "Cama com baú", "Closet aberto", "Poltrona/Chaise", "Home office integrado"
    ],
    sala: [
        "Rack/Painel para TV", "Estante", "Aparador", "Bar/Adega", 
        "Home theater", "Mesa de centro", "Mesa lateral", "Sofá planejado", 
        "Nichos decorativos", "Prateleiras flutuantes", "Painel ripado", 
        "Buffet", "Cristaleira", "Mesa de jogos"
    ],
    cozinha: [
        "Armários superiores", "Armários inferiores", "Ilha/Bancada central", 
        "Despensa/Torre para mantimentos", "Fruteira planejada", "Nichos para eletrodomésticos", 
        "Adega", "Torre para forno e micro-ondas", "Gavetas organizadoras", 
        "Bancadas", "Prateleiras abertas", "Armário para vassouras e produtos de limpeza", 
        "Mesa integrada/Península", "Escorredor embutido"
    ],
    banheiro: [
        "Gabinete para pia", "Armário aéreo/Espelheira", "Nichos para box", 
        "Torre para toalhas", "Prateleiras", "Gaveteiro", 
        "Bancada para duas cubas", "Armário para itens de higiene", 
        "Penteadeira", "Sapateira para lavanderia integrada"
    ],
    homeoffice: [
        "Mesa de trabalho", "Gaveteiro", "Armário alto para documentos", 
        "Estante para livros", "Nichos para decoração", "Painel para TV/Monitor", 
        "Bancada suspensa", "Mesa para impressora", "Prateleiras para arquivo", 
        "Armário com chave para documentos importantes"
    ],
    lavanderia: [
        "Armários superiores", "Armários inferiores", "Torre para máquina de lavar e secar", 
        "Varal retrátil planejado", "Tábua de passar embutida", "Nichos para produtos de limpeza", 
        "Gaveteiros", "Bancada para dobragem de roupas", "Armário para vassouras e produtos", 
        "Tanque com gabinete"
    ],
    closet: [
        "Módulos para roupas longas", "Módulos para roupas curtas", "Gaveteiros", 
        "Sapateira", "Ilha central com gavetas", "Nichos para bolsas", 
        "Cabideiros", "Porta cintos e gravatas", "Porta joias", 
        "Prateleiras para malas", "Espelhos", "Penteadeira", "Banco/Puff"
    ],
    varanda: [
        "Bancada gourmet", "Armário para churrasqueira", "Adega", 
        "Rack para plantas", "Aparador", "Bancada alta com banquetas", 
        "Armário multiuso para área externa", "Sofá planejado para área externa", 
        "Mesa retrátil", "Buffet para área externa"
    ],
    hall: [
        "Aparador", "Sapateira", "Painel/Cabideiro", "Nichos", 
        "Banco baú", "Armário para chaves", "Console", "Porta guarda-chuvas"
    ],
    infantil: [
        "Guarda-roupa", "Cama planejada (possivelmente com gavetas)", "Escrivaninha", 
        "Prateleiras para livros e brinquedos", "Nichos decorativos", "Painel para TV", 
        "Baú para brinquedos", "Bancada de estudos", "Estante baixa acessível", 
        "Cama com cama auxiliar", "Berço com cômoda integrada (para bebês)"
    ],
    escritorio: [
        "Estações de trabalho modulares", "Mesas em formato de ilha", "Divisórias modulares", 
        "Armários altos para arquivo", "Gaveteiros com rodízios", "Gabinetes para CPU", 
        "Armários para pasta suspensa", "Recepção planejada", "Sala de reunião com mesa integrada", 
        "Lounge/Área de descompressão", "Armários para cozinha corporativa", 
        "Bancadas para impressoras e equipamentos", "Cabines para trabalho individual", 
        "Nichos para armazenamento pessoal", "Armários com chave para confidenciais", 
        "Bancada para café e copa"
    ],
    hospital: [
        "Balcão de recepção/atendimento", "Armários para prontuários", "Estações de enfermagem", 
        "Armários para medicamentos com chave", "Bancadas para equipamentos médicos", 
        "Armários suspensos para instrumentos", "Gabinetes para pia hospitalar", 
        "Móveis para sala de espera", "Mesas auxiliares para procedimentos", 
        "Nichos para equipamentos específicos", "Bancadas para laboratório", 
        "Armários para consultório", "Mobiliário para farmácia interna", 
        "Prateleiras modulares para materiais", "Leitos hospitalares com armários integrados", 
        "Móveis para copa hospitalar"
    ],
    loja: [
        "Balcão de atendimento/caixa", "Expositores modulares", "Prateleiras para vitrine", 
        "Provadores modulares", "Araras para roupas", "Ilhas expositoras", 
        "Nichos para produtos em destaque", "Gôndolas personalizadas", "Estantes para calçados", 
        "Bancadas para demonstração", "Módulos para gavetas", "Armários para estoque de acesso rápido", 
        "Móveis para embalagem", "Painéis canaletados", "Displays giratórios integrados", 
        "Quiosques para promoções", "Mobiliário para área de descanso", 
        "Balcões refrigerados (para comércio alimentício)"
    ],
    conteiner: [
        "Cozinha compacta", "Bancada retrátil para refeições", "Cama dobrável/Murphy bed", 
        "Sofá-cama multifuncional", "Móveis modulares com múltiplas funções", 
        "Armários superiores com sistema de segurança", "Escada com gaveteiros integrados", 
        "Mesa de trabalho dobrável", "Prateleiras deslizantes", "Armários sob a cama", 
        "Painel para TV com armazenamento", "Bancada de banheiro compacta", 
        "Nichos aproveitando cantos", "Portas deslizantes para divisão de ambientes", 
        "Armários adaptados para formato irregular", "Mesa extensível", 
        "Painéis multiuso para fixação de objetos", "Sistema de divisórias móveis"
    ]
};

// Nomes completos dos ambientes para exibição
const ambienteNomes = {
    quarto: "Quarto",
    sala: "Sala de Estar",
    cozinha: "Cozinha",
    banheiro: "Banheiro",
    homeoffice: "Home Office/Escritório",
    lavanderia: "Lavanderia/Área de Serviço",
    closet: "Closet",
    varanda: "Varanda/Sacada",
    hall: "Hall de Entrada",
    infantil: "Quarto Infantil",
    escritorio: "Escritório Corporativo",
    hospital: "Hospital/Clínica",
    loja: "Lojas/Comércio",
    conteiner: "Contêiner Adaptado"
};

// Lista para guardar os itens do orçamento
let transacoes = [];
let ambienteAtual = '';

// Função para atualizar o dropdown de ambientes
function atualizarDropdownAmbientes() {
    const ambienteSelect = document.getElementById('ambiente-select');
    if (!ambienteSelect) {
        console.error("Elemento 'ambiente-select' não encontrado!");
        return;
    }
    
    // Limpar seletor
    ambienteSelect.innerHTML = '<option value="">Selecione um ambiente</option>';
    
    // Adicionar cada ambiente como uma opção
    for (const chave in ambienteNomes) {
        const option = document.createElement('option');
        option.value = chave;
        option.textContent = ambienteNomes[chave];
        ambienteSelect.appendChild(option);
    }
    
    console.log("Dropdown de ambientes atualizado com sucesso");
}

// Evento quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento carregado. Inicializando...");
    
    // Definir a data atual no campo de data
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    
    const dataOrcamento = document.getElementById('data-orcamento');
    if (dataOrcamento) {
        dataOrcamento.value = `${ano}-${mes}-${dia}`;
    }
    
    // Atualizar o dropdown de ambientes
    atualizarDropdownAmbientes();
    
    // Inicializar com interface limpa
    const moveisContainer = document.getElementById('moveis-container');
    const formContainer = document.getElementById('form-container');
    
    if (moveisContainer) moveisContainer.style.display = 'none';
    if (formContainer) formContainer.style.display = 'none';
    
    // Inicializar lista vazia
    atualizarLista();
    atualizarSaldo();
    
    // Configurar evento de botão para impressão
    const botaoImprimir = document.getElementById('botao-imprimir');
    if (botaoImprimir) {
        botaoImprimir.addEventListener('click', imprimirOrcamento);
    }
    
    // Configurar evento para adicionar item
    const botaoAdicionar = document.getElementById('botao-adicionar');
    if (botaoAdicionar) {
        botaoAdicionar.addEventListener('click', adicionarItem);
    }
    
    // Configurar busca de ambientes
    const ambienteBusca = document.getElementById('ambiente-busca');
    if (ambienteBusca) {
        ambienteBusca.addEventListener('input', function() {
            const termo = this.value.toLowerCase();
            const ambienteSelect = document.getElementById('ambiente-select');
            
            if (!ambienteSelect) return;
            
            if (termo === '') {
                atualizarDropdownAmbientes();
                return;
            }
            
            ambienteSelect.innerHTML = '<option value="">Selecione um ambiente</option>';
            
            for (const chave in ambienteNomes) {
                if (ambienteNomes[chave].toLowerCase().includes(termo)) {
                    const option = document.createElement('option');
                    option.value = chave;
                    option.textContent = ambienteNomes[chave];
                    ambienteSelect.appendChild(option);
                }
            }
        });
    }
    
    // Configurar seleção de ambiente
    const ambienteSelect = document.getElementById('ambiente-select');
    if (ambienteSelect) {
        ambienteSelect.addEventListener('change', function() {
            ambienteAtual = this.value;
            const moveisContainer = document.getElementById('moveis-container');
            const formContainer = document.getElementById('form-container');
            
            if (!moveisContainer || !formContainer) return;
            
            if (!ambienteAtual) {
                moveisContainer.style.display = 'none';
                formContainer.style.display = 'none';
                return;
            }
            
            // Mostrar os móveis do ambiente selecionado
            mostrarMoveis();
            
            // Mostrar o contêiner de móveis
            moveisContainer.style.display = 'block';
            
            // Esconder o formulário até que um móvel seja selecionado
            formContainer.style.display = 'none';
        });
    }
    
    // Configurar busca no orçamento
    const campoBusca = document.getElementById('campo-busca');
    if (campoBusca) {
        campoBusca.addEventListener('input', function() {
            const termoBusca = this.value.toLowerCase();
            
            // Se o campo de busca estiver vazio, mostra todos os itens
            if (termoBusca === '') {
                atualizarLista();
                return;
            }
            
            // Filtra os itens que correspondem à busca
            const transacoesFiltradas = transacoes.filter(transacao => 
                transacao.descricao.toLowerCase().includes(termoBusca) ||
                transacao.ambiente.toLowerCase().includes(termoBusca) ||
                (transacao.observacoes && transacao.observacoes.toLowerCase().includes(termoBusca))
            );
            
            // Atualiza a lista com os itens filtrados
            atualizarListaFiltrada(transacoesFiltradas);
        });
    }
});

// Função para mostrar móveis do ambiente atual
function mostrarMoveis(filtro = '') {
    if (!ambienteAtual) return;
    
    const listaMoveis = document.getElementById('lista-moveis');
    if (!listaMoveis) return;
    
    listaMoveis.innerHTML = '';
    
    const moveis = mobileDatabase[ambienteAtual];
    if (!moveis) {
        console.error(`Ambiente "${ambienteAtual}" não encontrado no banco de dados.`);
        return;
    }
    
    // Filtrar os móveis se houver um termo de busca
    const moveisFiltrados = filtro ? 
        moveis.filter(movel => movel.toLowerCase().includes(filtro.toLowerCase())) : 
        moveis;
    
    if (moveisFiltrados.length === 0) {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'Nenhum móvel encontrado com esse termo.';
        mensagem.style.textAlign = 'center';
        mensagem.style.padding = '10px';
        mensagem.style.color = '#777';
        listaMoveis.appendChild(mensagem);
        return;
    }
    
    moveisFiltrados.forEach(movel => {
        const item = document.createElement('li');
        item.textContent = movel;
        
        item.addEventListener('click', () => {
            // Preencher o formulário quando um móvel for selecionado
            const descricaoInput = document.getElementById('descricao');
            const ambienteNomeInput = document.getElementById('ambiente-nome');
            const formContainer = document.getElementById('form-container');
            const valorInput = document.getElementById('valor');
            
            if (descricaoInput) descricaoInput.value = movel;
            if (ambienteNomeInput) ambienteNomeInput.value = ambienteNomes[ambienteAtual];
            if (formContainer) formContainer.style.display = 'block';
            if (valorInput) valorInput.focus();
        });
        
        listaMoveis.appendChild(item);
    });
}

// Função para adicionar item ao orçamento
function adicionarItem() {
    const descricaoInput = document.getElementById('descricao');
    const ambienteNomeInput = document.getElementById('ambiente-nome');
    const valorInput = document.getElementById('valor');
    const observacoesInput = document.getElementById('observacoes');
    
    if (!descricaoInput || !ambienteNomeInput || !valorInput) {
        console.error("Elementos do formulário não encontrados!");
        return;
    }
    
    // Validação dos campos
    const descricao = descricaoInput.value.trim();
    const ambiente = ambienteNomeInput.value.trim();
    const valorStr = valorInput.value.trim().replace(',', '.');
    const observacoes = observacoesInput ? observacoesInput.value.trim() : '';
    
    if (!descricao || !ambiente) {
        alert('Por favor, selecione um móvel e ambiente.');
        return;
    }
    
    // Converter e validar o valor
    const valor = parseFloat(valorStr);
    if (isNaN(valor) || valor <= 0) {
        alert('Por favor, insira um valor válido maior que zero.');
        valorInput.focus();
        return;
    }
    
    // Criar um novo item para o orçamento
    const transacao = {
        id: Date.now(),
        descricao: descricao,
        ambiente: ambiente,
        valor: valor,
        observacoes: observacoes
    };
    
    // Adicionar à lista de transações
    transacoes.push(transacao);
    
    // Atualizar a interface
    atualizarLista();
    atualizarSaldo();
    
    // Limpar o formulário
    valorInput.value = '';
    if (observacoesInput) observacoesInput.value = '';
    
    // Esconder o formulário
    const formContainer = document.getElementById('form-container');
    if (formContainer) formContainer.style.display = 'none';
}

// Função para remover um item do orçamento
function removerItem(id) {
    const confirmar = confirm('Tem certeza que deseja remover este item?');
    if (!confirmar) return;
    
    // Filtrar a lista para remover o item com o ID especificado
    transacoes = transacoes.filter(transacao => transacao.id !== id);
    
    // Atualizar a interface
    atualizarLista();
    atualizarSaldo();
}

// Função para atualizar a lista com resultados filtrados
function atualizarListaFiltrada(transacoesFiltradas) {
    const listaTransacoes = document.getElementById('lista-transacoes');
    if (!listaTransacoes) return;
    
    listaTransacoes.innerHTML = '';
    
    if (transacoesFiltradas.length === 0) {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'Nenhum item encontrado.';
        mensagem.style.textAlign = 'center';
        mensagem.style.fontStyle = 'italic';
        listaTransacoes.appendChild(mensagem);
        return;
    }
    
    transacoesFiltradas.forEach(transacao => {
        // Cria um item na lista
        const item = document.createElement('li');
        
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="font-weight: bold;">${transacao.descricao}</span>
                <span>${formatarDinheiro(transacao.valor)}</span>
            </div>
            <div style="color: #3498db; margin-bottom: 5px;">${transacao.ambiente}</div>
            ${transacao.observacoes ? `<div style="font-style: italic; margin-bottom: 10px;">${transacao.observacoes}</div>` : ''}
            <button onclick="removerItem(${transacao.id})">Remover</button>
        `;
        
        listaTransacoes.appendChild(item);
    });
}

// Função para atualizar a lista de itens do orçamento
function atualizarLista() {
    const listaTransacoes = document.getElementById('lista-transacoes');
    if (!listaTransacoes) return;
    
    listaTransacoes.innerHTML = '';
    
    if (transacoes.length === 0) {
        const mensagem = document.createElement('li');
        mensagem.textContent = 'Nenhum item adicionado ao orçamento ainda.';
        mensagem.style.textAlign = 'center';
        mensagem.style.fontStyle = 'italic';
        listaTransacoes.appendChild(mensagem);
        return;
    }
    
    transacoes.forEach(transacao => {
        const item = document.createElement('li');
        
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="font-weight: bold;">${transacao.descricao}</span>
                <span>${formatarDinheiro(transacao.valor)}</span>
            </div>
            <div style="color: #3498db; margin-bottom: 5px;">${transacao.ambiente}</div>
            ${transacao.observacoes ? `<div style="font-style: italic; margin-bottom: 10px;">${transacao.observacoes}</div>` : ''}
            <button onclick="removerItem(${transacao.id})">Remover</button>
        `;
        
        listaTransacoes.appendChild(item);
    });
}

// Função para atualizar o saldo total
function atualizarSaldo() {
    const saldoElement = document.getElementById('saldo');
    if (!saldoElement) return;
    
    const total = transacoes.reduce((sum, transacao) => sum + transacao.valor, 0);
    saldoElement.textContent = formatarDinheiro(total);
}

// Formatar valores como moeda brasileira (R$ 15.632,00)
function formatarDinheiro(valor) {
    // Converte para string com 2 casas decimais
    const valorFormatado = valor.toFixed(2);
    
    // Troca o ponto por vírgula nas casas decimais
    const valorComVirgula = valorFormatado.replace('.', ',');
    
    // Adiciona pontos para separar os milhares
    const valorFinal = valorComVirgula.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    return `R$ ${valorFinal}`;
}

// Função para formatar a data no formato brasileiro (dd/mm/aaaa)
function formatarDataBR(dataISO) {
    if (!dataISO) return '';
    
    const partes = dataISO.split('-');
    if (partes.length !== 3) return dataISO;
    
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Função para imprimir/baixar o orçamento
function imprimirOrcamento() {
    console.log("Iniciando impressão do orçamento...");
    
    // Verificar se há itens no orçamento
    if (transacoes.length === 0) {
        alert('Adicione pelo menos um item ao orçamento antes de imprimir.');
        return;
    }
    
    // Obter elementos necessários
    const dataOrcamento = document.getElementById('data-orcamento');
    const dataFormatada = dataOrcamento ? formatarDataBR(dataOrcamento.value) : formatarDataBR(new Date().toISOString().split('T')[0]);
    
    // Salvar estado original
    const tituloPagina = document.title;
    const bodyClasses = document.body.className;
    const conteudoOriginal = document.body.innerHTML;
    
    try {
        // Alteração para a versão de impressão
        document.title = "Orçamento Precisa Móveis Planejados - " + dataFormatada;
        
        // Criar uma versão simplificada da página para impressão
        let conteudoImpressao = `
            <div class="impressao-container" style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="margin-bottom: 5px; color: #2c3e50;">Precisa Móveis Planejados</h1>
                    <p style="margin-top: 0; color: #7f8c8d; font-size: 14px;">Transformando espaços em sonhos realizados</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 14px;">
                    <p><strong>Data:</strong> ${dataFormatada}</p>
                    <p><strong>Localização:</strong> Sinop - MT</p>
                </div>
                
                <hr style="margin-bottom: 30px; border: 1px solid #eee;">
                
                <h2 style="margin-bottom: 15px; color: #333; font-size: 18px;">Itens do Orçamento</h2>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <thead>
                        <tr style="background-color: #f9f9f9; text-align: left;">
                            <th style="padding: 10px; border-bottom: 2px solid #ddd;">Descrição</th>
                            <th style="padding: 10px; border-bottom: 2px solid #ddd;">Ambiente</th>
                            <th style="padding: 10px; border-bottom: 2px solid #ddd;">Observações</th>
                            <th style="padding: 10px; border-bottom: 2px solid #ddd; text-align: right;">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        // Adicionar cada item do orçamento à tabela
        let totalOrcamento = 0;
        
        transacoes.forEach(item => {
            totalOrcamento += item.valor;
            
            conteudoImpressao += `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px; font-weight: bold;">${item.descricao}</td>
                    <td style="padding: 10px;">${item.ambiente}</td>
                    <td style="padding: 10px; font-style: italic;">${item.observacoes || '-'}</td>
                    <td style="padding: 10px; text-align: right;">${formatarDinheiro(item.valor)}</td>
                </tr>
            `;
        });
        
        // Calcular valor com desconto de 8% (à vista)
        const totalComDesconto = totalOrcamento * 0.92;
        
        // Adicionar linha de total
        conteudoImpressao += `
                    </tbody>
                    <tfoot>
                        <tr style="background-color: #eafaf1;">
                            <td colspan="3" style="padding: 12px; text-align: right; font-weight: bold;">VALOR TOTAL:</td>
                            <td style="padding: 12px; text-align: right; font-weight: bold; color: #2e7d32; font-size: 16px;">${formatarDinheiro(totalOrcamento)}</td>
                        </tr>
                    </tfoot>
                </table>
                
                <!-- Condições de Pagamento e Informações Adicionais -->
                <div style="margin-top: 30px; border: 1px solid #ddd; border-radius: 5px; padding: 20px; background-color: #f9f9f9;">
                    <h3 style="color: #2c3e50; margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 10px; font-size: 18px;">Forma de Pagamento</h3>
                    
                    <div style="margin: 20px 0;">
                        <h4 style="color: #3498db; margin-bottom: 10px; font-size: 16px;">Condições de Pagamento</h4>
                        
                        <div style="margin-bottom: 20px;">
                            <p style="font-weight: bold; margin-bottom: 8px;">À Vista</p>
                            <ul style="margin-top: 5px; padding-left: 25px; line-height: 1.6;">
                                <li>Desconto especial de 8%</li>
                                <li>50% no início da obra</li>
                                <li>50% na conclusão dos serviços</li>
                            </ul>
                            <p style="margin-top: 8px;"><strong>Valor total à vista:</strong> ${formatarDinheiro(totalComDesconto)}</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <p style="font-weight: bold; margin-bottom: 8px;">Parcelamento</p>
                            <ul style="margin-top: 5px; padding-left: 25px; line-height: 1.6;">
                                <li>Em até 10x no cheque sem juros</li>
                                <li>Em até 10x nos cartões de crédito sem juros</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h4 style="color: #3498db; margin: 25px 0 10px 0; font-size: 16px;">Informações Adicionais</h4>
                    
                    <div style="margin-bottom: 15px;">
                        <p style="font-weight: bold; margin-bottom: 8px;">Nota Fiscal:</p>
                        <ul style="margin-top: 5px; padding-left: 25px; line-height: 1.6;">
                            <li>Orçamento apresentado sem emissão de nota fiscal</li>
                            <li>Caso seja necessária a emissão de nota fiscal, haverá acréscimo de 9% sobre o valor total</li>
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <p style="font-weight: bold; margin-bottom: 8px;">Este orçamento NÃO contempla:</p>
                        <ul style="margin-top: 5px; padding-left: 25px; line-height: 1.6;">
                            <li>Serviços de instalação elétrica</li>
                            <li>Sistema de iluminação</li>
                            <li>Fornecimento e instalação de granitos</li>
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <p style="font-weight: bold; margin-bottom: 8px;">Prazo de Execução:</p>
                        <p style="margin-left: 25px; line-height: 1.6;">15 dias úteis após a confirmação do pedido e pagamento da primeira parcela</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; line-height: 1.6;">
                        <p>Estamos à disposição para esclarecer quaisquer dúvidas adicionais e personalizar nossa proposta conforme suas necessidades específicas.</p>
                        <p>Agradecemos a oportunidade de apresentar nossos serviços.</p>
                        <p style="margin-top: 15px;">Atenciosamente,<br>Precisa Móveis Planejados</p>
                    </div>
                </div>
                
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #888;">
                    <p>Orçamento gerado em ${new Date().toLocaleString()}</p>
                    <p>Precisa Móveis Planejados - Sinop/MT</p>
                    <p>Este orçamento tem validade de 30 dias</p>
                </div>
            </div>
        `;
        
        // Adicionar CSS para evitar cabeçalhos e rodapés do navegador na impressão
        conteudoImpressao = `
            <style>
                @media print {
                    @page {
                        size: auto;
                        margin: 10mm;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                }
            </style>
        ` + conteudoImpressao;
        
        // Substituir o conteúdo da página pelo conteúdo de impressão
        document.body.innerHTML = conteudoImpressao;
        
        // Executar a impressão após um pequeno atraso
        setTimeout(() => {
            window.print();
            
            // Restaurar o conteúdo original após a impressão
            setTimeout(() => {
                document.body.innerHTML = conteudoOriginal;
                document.title = tituloPagina;
                document.body.className = bodyClasses;
                
                // Reconectar event listeners após restaurar o conteúdo
                location.reload();
            }, 100);
        }, 500);
        
    } catch (erro) {
        console.error("Erro ao imprimir orçamento:", erro);
        alert("Ocorreu um erro ao preparar a impressão. Tente novamente.");
        
        // Restaurar página em caso de erro
        document.body.innerHTML = conteudoOriginal;
        document.title = tituloPagina;
        document.body.className = bodyClasses;
    }
}
// Função auxiliar para formatar data no formato brasileiro
function formatarDataBR(dataISO) {
    if (!dataISO) return '';
    
    const partes = dataISO.split('-');
    if (partes.length !== 3) return dataISO;
    
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}