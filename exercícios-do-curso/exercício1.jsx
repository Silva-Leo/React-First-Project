//* exercício  1

const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  //*** Resolução
  
  const App = () => {
    const dados = mario; //ou luana
  
    const total = dados.compras //pegando a propriedade compras do objeto

      .map((item) => Number(item.preco.replace("R$ ", " "))) //percorrendo, transformando em number e trocando o R$ 

      .reduce((a, b) => a + b); // somando e reduzindo os valores do array a um valor total
  
    return ( //componente a ser reproduzido na tela
      <div>
        <p>Nome:{dados.cliente}</p> //pegando propriedade do objeto
        <p>Idade:{dados.idade}</p>
        <p>Situação:{dados.ativa ? "Ativa" : "inativa"}</p> // ternário para verificar condição da propriedade
        <p>Total gasto: R$ {total}</p>
        {total > 10000 && <p>Você ta gastando muito</p>} // JSX caso o valor for verdadeiro cria o elemento JSX interno
      </div>
    );
  };