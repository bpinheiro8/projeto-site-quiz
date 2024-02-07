const perguntas = [
  {
    pergunta: "O que é Scrum?",
    resposta: [
      "Um framework ágil para gestão e desenvolvimento de produtos",
      "Um método de pagamento em jogos online",
      "Um tipo de jogo de tabuleiro",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual dos seguintes não é um princípio do Manifesto Ágil?",
    resposta: [
      "Indivíduos e interações sobre processos e ferramentas",
      "Negociar contratos detalhados antes do início do projeto",
      "Responder a mudanças sobre seguir um plano",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é uma retrospectiva no contexto ágil?",
    resposta: [
      "Um documento formal que registra o progresso do projeto",
      "Uma reunião regular para inspeção e adaptação",
      "Um relatório final apresentado aos stakeholders",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual das seguintes práticas não está associada ao Kanban?",
    resposta: ["Limitar o trabalho em progresso (WIP)", "Dividir o trabalho em iterações fixas", "Visualizar o fluxo de trabalho em um quadro"],
    correta: 1,
  },
  {
    pergunta: "O que significa a sigla MVP no contexto ágil?",
    resposta: ["Minimum Viable Product", "Most Valuable Player", "Maximum Variable Principle"],
    correta: 0,
  },
  {
    pergunta: "Qual é o objetivo do Daily Stand-up (reunião diária) no Scrum?",
    resposta: ["Reportar o progresso para o gerente do projeto", "Identificar e remover impedimentos", "Decidir o cronograma de entrega"],
    correta: 1,
  },
  {
    pergunta: "O que é uma user story (história do usuário) no desenvolvimento ágil?",
    resposta: [
      "Uma narrativa sobre a vida de um usuário fictício",
      "Uma técnica de escrita criativa para desenvolvedores",
      "Um requisito de alto nível, descrito do ponto de vista do usuário",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a principal diferença entre Scrum e Kanban?",
    resposta: [
      "Scrum é baseado em iterações fixas, enquanto Kanban é baseado em fluxo contínuo",
      "Scrum é mais adequado para empresas de pequeno porte, enquanto Kanban é para empresas grandes",
      "Scrum é focado em processos, enquanto Kanban é focado em pessoas",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é um sprint no Scrum?",
    resposta: [
      "Um período de tempo para atividades de planejamento",
      "Um intervalo de tempo fixo durante o qual o trabalho é realizado e o produto incrementado é entregue",
      "Uma competição entre equipes para ver quem pode trabalhar mais rápido",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual dos seguintes não é um valor do Manifesto Ágil?",
    resposta: ["Comprometimento com uma visão", "Respeito às pessoas e suas habilidades", "Preferência por processos e ferramentas"],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

for (const item of perguntas) {
  //clonando item do template
  const quizItem = template.content.cloneNode(true);
  //modificando o H3 com as perguntas
  quizItem.querySelector("h3").textContent = item.pergunta;

  //laço para a inserção das respostas
  for (let resposta of item.resposta) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  //insere a pergunta na tela
  quiz.appendChild(quizItem);
}
