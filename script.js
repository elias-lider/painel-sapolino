const validUser = "ELIAS";
const validPass = "Lider";

const members = [
  { nome: "ELIAS", cargo: "Líder" },
  { nome: "welligton", cargo: "Soldado" },
  { nome: "enzo", cargo: "Soldado" },
  { nome: "davi", cargo: "Olheiro" },
];

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === validUser && password === validPass) {
    // Gera ID aleatório entre 1000 e 9999
    const userId = Math.floor(1000 + Math.random() * 9000);

    // Esconde login e mostra dashboard
    document.getElementById("login-panel").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Atualiza informações do usuário
    document.getElementById("user-id").innerText = userId;
    document.getElementById("user-name").innerText = username;

    // Preenche lista de membros
    const memberList = document.getElementById("member-list");
    memberList.innerHTML = "";
    members.forEach(membro => {
      const li = document.createElement("li");
      li.innerText = `${membro.nome} - ${membro.cargo}`;
      memberList.appendChild(li);
    });

    message.innerText = "";
  } else {
    message.style.color = "#ff4d4d";
    message.innerText = "Usuário ou senha inválidos!";
  }
}

function logout() {
  // Volta para a tela de login
  document.getElementById("login-panel").style.display = "block";
  document.getElementById("dashboard").style.display = "none";

  // Limpa campos e mensagens
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").innerText = "";
}