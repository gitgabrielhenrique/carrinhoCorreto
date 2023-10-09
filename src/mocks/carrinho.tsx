import oculos from '../../assets/oculos/oculos.png';
import oculos2 from '../../assets/oculos/oculolus2.png';
import oculos3 from '../../assets/oculos/oculos3.png';


const carrinho = {
    topo: {
        titulo: "oticas gabriel",
    },
    detalhes: {
        nome: "Carrinho de Compras",
        nomeOtica: "super oculos",
        descricao: "uma otica simples e perfeita",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Itens do Carrinho",
      lista: [
        {
          nome: "oculos",
          imagem: oculos,
        },
        {
          nome: "oculos2",
          imagem: oculos2,
        },
        {
          nome: "oculos3",
          imagem: oculos3,
        }
      ]
    }
  }

export default carrinho;
