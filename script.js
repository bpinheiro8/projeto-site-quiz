const perguntas = [
  {
    pergunta: "O que é Scrum?",
    respostas: [
      "Um framework ágil para gestão e desenvolvimento de produtos",
      "Um método de pagamento em jogos online",
      "Um tipo de jogo de tabuleiro",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual dos seguintes não é um princípio do Manifesto Ágil?",
    respostas: [
      "Indivíduos e interações sobre processos e ferramentas",
      "Negociar contratos detalhados antes do início do projeto",
      "Responder a mudanças sobre seguir um plano",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é uma retrospectiva no contexto ágil?",
    respostas: [
      "Um documento formal que registra o progresso do projeto",
      "Uma reunião regular para inspeção e adaptação",
      "Um relatório final apresentado aos stakeholders",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual das seguintes práticas não está associada ao Kanban?",
    respostas: ["Limitar o trabalho em progresso (WIP)", "Dividir o trabalho em iterações fixas", "Visualizar o fluxo de trabalho em um quadro"],
    correta: 1,
  },
  {
    pergunta: "O que significa a sigla MVP no contexto ágil?",
    respostas: ["Minimum Viable Product", "Most Valuable Player", "Maximum Variable Principle"],
    correta: 0,
  },
  {
    pergunta: "Qual é o objetivo do Daily Stand-up (reunião diária) no Scrum?",
    respostas: ["Reportar o progresso para o gerente do projeto", "Identificar e remover impedimentos", "Decidir o cronograma de entrega"],
    correta: 1,
  },
  {
    pergunta: "O que é uma user story (história do usuário) no desenvolvimento ágil?",
    respostas: [
      "Uma narrativa sobre a vida de um usuário fictício",
      "Uma técnica de escrita criativa para desenvolvedores",
      "Um requisito de alto nível, descrito do ponto de vista do usuário",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a principal diferença entre Scrum e Kanban?",
    respostas: [
      "Scrum é baseado em iterações fixas, enquanto Kanban é baseado em fluxo contínuo",
      "Scrum é mais adequado para empresas de pequeno porte, enquanto Kanban é para empresas grandes",
      "Scrum é focado em processos, enquanto Kanban é focado em pessoas",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é um sprint no Scrum?",
    respostas: [
      "Um período de tempo para atividades de planejamento",
      "Um intervalo de tempo fixo durante o qual o trabalho é realizado e o produto incrementado é entregue",
      "Uma competição entre equipes para ver quem pode trabalhar mais rápido",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual dos seguintes não é um valor do Manifesto Ágil?",
    respostas: ["Comprometimento com uma visão", "Respeito às pessoas e suas habilidades", "Preferência por processos e ferramentas"],
    correta: 2,
  },
];

//variavel atribuido o conteúdo da div html id quiz
const quiz = document.querySelector("#quiz");
//variavel atribuido o conteúdo da tag template html
const template = document.querySelector("template");
//variavel guarda uma unica informação sem repetição
const corretas = new Set();
//variavel recebe o total de itens
const totalDePerguntas = perguntas.length;
//variavel para selecionar o valor do html
const mostraTotal = document.querySelector("#acertos span");
//alterando a variavel mostraTotal com o valor de corretas + totalDePerguntas
mostraTotal.textContent = corretas.size + " de " + totalDePerguntas;

for (const item of perguntas) {
  //variavel atribuido o conteúdo da tag template html por 10x
  const quizItem = template.content.cloneNode(true);

  //na tag h3 adicione o conteúdo do array perguntas onde o atributo do objeto seja pergunta
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    //variavel atribuido o conteúdo de dl dt por 3x a cada objeto
    const dt = quizItem.querySelector("dl dt").cloneNode(true);

    //na tag span adicione o conteúdo do array perguntas onde o atributo do objeto seja respostas
    dt.querySelector("span").textContent = resposta;

    //na tag input atribuir no parametro name como pergunta + index a cada pergunta, ex: pergunta-0
    dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item));

    //na tag input atribuir no parametro value atribua o valor de index
    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    //captura o evento clicado na mudança de estado
    dt.querySelector("input").onchange = (event) => {
      //a variavel estaCorreta true ou false, esta sendo comparado o value do clique com a resposta correta
      const estaCorreta = event.target.value == item.correta;

      //ao entrar no if deleta caso já exista
      corretas.delete(item);
      if (estaCorreta) {
        //add o item inteiro
        corretas.add(item);
      }
      //alterando a variavel mostraTotal com o valor de corretas + totalDePerguntas
      mostraTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    //na tag dl atribua o conteúdo de quizItem a div id quiz
    quizItem.querySelector("dl").appendChild(dt);
  }

  //remove a primeira resposta fixa do html
  quizItem.querySelector("dl dt").remove();

  //atribuindo o conteúdo de quizItem a div id quiz
  quiz.appendChild(quizItem);
}
