const modal = document.querySelector('.modal-conteiner');
const tbody = document.querySelector('tbody');
const sId = document.querySelector('#m-id');
const sNome = document.querySelector('#m-nome');
const sMarca = document.querySelector('#m-marca');
const sCor = document.querySelector('#m-cor');
const sAno = document.querySelector('#m-ano');
const sValor = document.querySelector('#m-valor');
const btnSalvar = document.querySelector('#btnSalvar');

//MÉTODO PARA LISTAR TODOS OS CARROS
function buscarTodosCarros() {
    fetch('http://localhost:8080/carro')
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = '';
            data.forEach((carro) => {
                buscarCarro(carro);
            })
            function buscarCarro(carro) {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                <td id="cId">${carro.id}</td>
                <td id="cNome">${carro.nome}</td>
                <td id="cMarca">${carro.marca}</td>
                <td id="cCor">${carro.cor}</td>
                <td id="cAno">${carro.ano}</td>
                <td id="cValor">${formatarValor(carro.valor)}</td>
                <td class="acao"><button onclick="editarCarro(${carro.id})"><i class='bx bx-edit'></i></button></td>
                <td class="acao"><button onclick="excluirCarro(${carro.id})"><i class='bx bx-trash'></i></button></td>
            `
                tbody.appendChild(tr);
            }
        })
        .catch(error => console.error(error))
}

buscarTodosCarros();

//MÉTODO PARA DELETAR UM CARRO
function excluirCarro(id) {
    fetch(`http://localhost:8080/carro/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                console.log('Deletado com sucesso');
                buscarTodosCarros();
            } else {
                console.log('Deu ruim');
            }
        })
        .catch(error => console.error(error))
}

//FUNÇÃO PARA SALVAR UM CARRO
btnSalvar.onclick = e => {

    e.preventDefault();

    if (sId.value.trim() === '') {

        const nomeCarro = sNome.value;
        const marcaCarro = sMarca.value;
        const corCarro = sCor.value;
        const anoCarro = sAno.value;
        const valorCarro = sValor.value;

        if (/[!@#$%^&*(),.?":{}|<>]/.test(nomeCarro) || nomeCarro.trim() === '') {
            alert('Não é possível inserir nomes com caracteres especiais ou deixar o campo vazio.');
            return;
        }

        if (/[!@#$%^&*(),.?":{}|<>]/.test(marcaCarro) || marcaCarro.trim() === '') {
            alert('Não é possível inserir marcas com caracteres especiais ou deixar o campo vazio.');
            return;
        }

        if (/[!@#$%^&*(),.?":{}|<>]/.test(corCarro) || corCarro.trim() === '') {
            alert('Não é possível inserir cores com caracteres especiais ou deixar o campo vazio.');
            return;
        }

        if (/[!@#$%^&*(),.?":{}|<>]/.test(anoCarro) || anoCarro.trim() === '' || anoCarro.length > 4) {
            alert('Não é possível inserir ano com caracteres especiais, deixar o campo vazio ou inserir anos com mais de 4 dígitos.');
            return;
        }

        const anoAtual = (new Date().getFullYear() + 1);

        if (parseInt(anoCarro, 10) < 1900 || parseInt(anoCarro, 10) > anoAtual) {
            alert("Não é possível inserir carros com ano inferior à 1900 ou acima do ano seguinte");
            return;
        }

        if (valorCarro < 0 || valorCarro.trim() === '') {
            alert('Não é possível inserir valores menores que zero ou deixar o campo vazio.');
            return;
        }

        const CarroAInserir = {
            nome: nomeCarro,
            marca: marcaCarro,
            cor: corCarro,
            ano: anoCarro,
            valor: valorCarro
        }

        fetch('http://localhost:8080/carro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CarroAInserir)
        })
            .then(response => {
                if (response.ok) {
                    return console.log('Carro incluído com sucesso');
                }
            })
            .then(data => {
                console.log(data)
                buscarTodosCarros()
            })
            .catch(error => console.error(error))

    } else {
        const idCarro = sId.value
        const nomeCarro = sNome.value;
        const marcaCarro = sMarca.value;
        const corCarro = sCor.value;
        const anoCarro = sAno.value;
        const valorCarro = sValor.value;

        if (/[!@#$%^&*(),.?":{}|<>]/.test(nomeCarro) || nomeCarro.trim() === '') {
            alert('Não é possível inserir nomes com caracteres especiais ou deixar o campo vazio.');
            return;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(marcaCarro) || marcaCarro.trim() === '') {
            alert('Não é possível inserir marcas com caracteres especiais ou deixar o campo vazio.');
            return;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(corCarro) || corCarro.trim() === '') {
            alert('Não é possível inserir cores com caracteres especiais ou deixar o campo vazio.');
            return;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(anoCarro) || anoCarro.trim() === '' || anoCarro.length > 4) {
            alert('Não é possível inserir ano com caracteres especiais, deixar o campo vazio ou inserir anos com mais de 4 dígitos.');
            return;
        }
        const anoAtual = (new Date().getFullYear() + 1);
        if (parseInt(anoCarro, 10) < 1900 || parseInt(anoCarro, 10) > anoAtual) {
            alert("Não é possível inserir carros com ano inferior à 1900 ou acima do ano seguinte");
            return;
        }
        if (valorCarro < 0 || valorCarro.trim() === '') {
            alert('Não é possível inserir valores menores que zero ou deixar o campo vazio.');
            return;
        }

        const CarroAInserir = {
            nome: nomeCarro,
            marca: marcaCarro,
            cor: corCarro,
            ano: anoCarro,
            valor: valorCarro
        }

        fetch(`http://localhost:8080/carro/${idCarro}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CarroAInserir)
        })
            .then(response => response.json())
            .then(data => {
                buscarTodosCarros();
                console.log(data)
            })
            .catch(error => console.error(error))
    }

    modal.classList.remove('active');
    sId.value = '';
}

//MÉTODO PARA BUSCAR POR ID
function buscarPorId() {

    const idCarro = document.getElementById('buscarPorId').value;

    if (!idCarro || idCarro == '' || !/^\d+$/.test(idCarro)) {
        alert("Não é possível inserir caracteres ou deixar o campo vazio");
        return;
    }

    fetch('http://localhost:8080/carro')
        .then(response => response.json())
        .then(carros => {

            let carroEncontrado = false;

            for (let i = 0; i < carros.length; i++) {
                const data = carros[i];

                if (data.id == idCarro) {
                    abrirModal(true, idCarro)
                    carroEncontrado = true;
                    break;
                }
            }

            if (!carroEncontrado) {
                alert("Carro de ID " + idCarro + " não encontrado")
            }
            document.getElementById('buscarPorId').value = '';
        })
        .catch(error => console.error(error))
}

//MÉTODO PARA EDITAR UM CARRO
function editarCarro(idCarro) {
    abrirModal(true, idCarro);
}

//FUNÇÃO PARA ABRIR A MODAL
function abrirModal(editar = false, idCarro = 0) {

    modal.classList.add('active');
    modal.onclick = e => {
        if (e.target.className.indexOf('modal-conteiner') !== -1) {
            modal.classList.remove('active');

        }
    }

    if (editar) {
        fetch(`http://localhost:8080/carro/${idCarro}`)
            .then(response => response.json())
            .then(carro => {
                if (!carro) {
                    return;
                }
                sId.value = carro.id;
                sNome.value = carro.nome;
                sMarca.value = carro.marca;
                sCor.value = carro.cor;
                sAno.value = carro.ano;
                sValor.value = carro.valor;
            })
            .catch(error => console.error(error))
    } else {
        sId.value = '';
        sNome.value = '';
        sMarca.value = '';
        sCor.value = '';
        sAno.value = '';
        sValor.value = '';
    }
}

//FUNÇÃO PARA FORMATAR O VALOR DO CARRO AO EXIBIR NA TELA
function formatarValor(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

//FUNÇÃO PARA RETORNAR MENSAGEM QUANDO O USUÁRIO TENTAR CLICAR NO CAMPO DE ID
function mensagemId() {
    alert("Não é possível inserir ou alterar dados neste campo!")
}