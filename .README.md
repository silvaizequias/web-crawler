# Web Crawler Challenge

Este projeto foi criado com o [Express](https://expressjs.com/pt-br/) demanda de requisitos de um desafio técnico com o principal objetivo:

***Criar um WebCrawler para mapear os elementos da página 'https://pratagy.letsbook.com.br/reserva/' extraindo as informações de pesquisa em formato JSON, criando um endpoint 'http://localhost:8080/search'***

## Executando o Projeto em Ambiente de Desenvolvimento

### Iniciando a aplicação
- No terminal da máquina local execute o comando `node --version` e verifique se possui o [NODE](https://nodejs.org/). Este projeto deve funcionar com o node em sua versão 18.x.x ou superior. Caso ainda não possua o NODE instalado ou na versão recomendada, acesse `https://github.com/nvm-sh/nvm` para obter instruções de como instalar/configurar o NODE em sua máquina local;
- Ainda no terminal, acesse o diretório principal do projeto e execute `yarn` para instalar todos os pacotes de dependência necessários para que o a aplicação funcione;
- Depois de todos os pacotes terem sido instalados poderá executar `yarn dev` para acessar o porjeto através da URL `http://localhost:8080` usando o seu navegador de preferência.

>### Executando a aplicação
- Após iniciar o projeto no terminal, utilizando o [POSTMAN](https://www.postman.com/) ou qualquer outra ferramenta similar para acessar a rota `http://localhost:8080/search` artravés do método POST.
- no corpo da requisição passe os valores ***checkin*** e ***checkout*** em formato de data ***"2023-12-20"*** e submeta o método para que o crawler possa mapear a [URL](https://pratagy.letsbook.com.br/reserva/selecao-de-quartos?criancas0=&destino=Pratagy+Beach+Resort+All+Inclusive&promocode=&tarifa=&numeroAdultos=2&codigoHotel=12&criancas&codigoCidade&device=Desktop&idioma=pt-BR&moeda=BRL&emailHospede)

