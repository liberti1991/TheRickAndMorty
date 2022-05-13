<p align="center">
  <img src="https://user-images.githubusercontent.com/93290814/168306564-a4f6fba4-bd2f-4d74-a88d-d0017af40aea.png"/>
</p>

Nesse projeto o objetivo é fazer uma requisição de uma API com 42 páginas de personagens, aonde trato os personagens duplicados, criar um campo de pesquisa de por nome, e fiz uma paginação com 4 cards por página para limitar o tamanho tela.

No Component App temos uma função, que faz uma varredura para eliminar os itens que estão se repetindo, em seguida crio uma promise para trazer todas as 42 páginas sem que o usuário fique com um loading na tela, e armazenando esses dados no useState.

Na HomePage recebo esses dados por props, já em seguida crio uma função com o useCallback pra ela não ser renderizada toda vez que o input receber novas informações, 
começando a tratar todos essas informações do input quanto as da API para realizar a busca aonde o usuário não irá se preocupar com letras maiúsculas ou minúsculas ele simplesmente terá a resposta na tela.

![Captura de tela 2022-05-13 132941](https://user-images.githubusercontent.com/93290814/168327881-5aaa6ed8-9ea7-4ffa-9777-b9711853a4ff.jpg)

No componente do Card, crio variáveis para a páginação e um efeito de laoding até as 42 requisições da API, quanto todas elas retornam, utilizo o useMemo para salvar todos os cards em mémoria assim otimizando a plataforma do usuário.

![Captura de tela 2022-05-13 132941](https://user-images.githubusercontent.com/93290814/168332036-ff6845c4-6c4a-4624-9459-7ca33c017d14.jpg)
