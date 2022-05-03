let usuarios = [];
let formulario = document.querySelector("#form-cadastro");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.querySelector("#nome").value;
  let endereco = document.querySelector("#endereco").value;
  let cidade = document.querySelector("#cidade").value;
  let estado = document.querySelector("#estado").value;
  let cargo = document.querySelector('input[name="cargo"]:checked').value;
  let textoCurriculo = document.querySelector("#curriculo").value;
  let ListaNodeareaInteresse = document.querySelectorAll(
    "input[class='area-de-interesse']:checked"
  );
  let areaInteresse = [];

  if (nome === "" || endereco === "" || cidade === "" || estado === "") {
    alert(`Os campos de dados pessoais são obrigatórios. Por favor, preencha!`);

    return;
  }

  if (ListaNodeareaInteresse.length === 0) {
    alert("Deixou de marcar alguma área de interesse");
    return;
  }

  for (const elemento of ListaNodeareaInteresse) {
    areaInteresse.push(elemento.value);
  }

  let dadosUsuario = {
    nome,
    endereco,
    cidade,
    estado,
    cargo,
    areaInteresse,
    textoCurriculo,
    areaInteresse,
  };

  //console.log(dadosUsuario);
  //   console.log(usuarios);
  alert("Dados recebidos com sucesso!");
  usuarios.push(dadosUsuario);
  limparDados();
});

function limparDados() {
  console.clear();
  document.querySelector("#nome").value = "";
  document.querySelector("#endereco").value = "";
  document.querySelector("#cidade").value = "";
  document.querySelector("#estado").value = "";
  document.querySelector("#curriculo").value = "";

  let ListaNodeareaInteresse = document.querySelectorAll(
    "input[class='area-de-interesse']:checked"
  );

  for (const elemento of ListaNodeareaInteresse) {
    elemento.checked = false;
  }
  console.log(usuarios);
}
