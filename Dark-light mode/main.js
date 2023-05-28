document.getElementById("toggle-checkbox").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});

/*Aqui está uma explicação passo a passo do que esse trecho de código faz:

document.getElementById("toggle-checkbox"): Essa linha procura o elemento HTML com o ID "toggle-checkbox" na página. Geralmente, o ID é atribuído a um elemento <input> do tipo checkbox, que é o nosso botão de alternância.

.addEventListener("change", function() { ... }): Este método adiciona um ouvinte de eventos para o elemento selecionado. No caso, estamos adicionando um ouvinte para o evento "change" que ocorre quando o estado do checkbox é alterado.

function() { ... }: Aqui, estamos fornecendo uma função anônima como manipulador de eventos para ser executada quando o evento "change" for acionado.

document.body.classList.toggle("dark-mode"): Dentro da função, estamos usando document.body para selecionar o elemento <body> do documento HTML. Em seguida, usamos classList.toggle("dark-mode") para alternar a presença da classe "dark-mode" no <body>.

Se a classe "dark-mode" estiver presente no <body>, ela será removida.
Se a classe "dark-mode" não estiver presente no <body>, ela será adicionada.
Basicamente, quando ocorrer uma mudança no estado do checkbox (ou seja, quando for marcado ou desmarcado), a função será acionada. Ela adicionará a classe "dark-mode" ao <body> se a classe estiver ausente, ou a removerá se a classe já estiver presente.

Isso permite que você alterne entre o modo escuro (dark mode) e o modo claro (light mode) do seu aplicativo ou site, dependendo do estado do checkbox.

Lembre-se de ter o checkbox com o ID "toggle-checkbox" em seu código HTML para que esse trecho de código funcione corretamente. */