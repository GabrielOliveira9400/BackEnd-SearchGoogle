# BackEnd-SearchGoogle

<p> O projeto foi desenvolvido com NodeJS 18 utilizando Typescript, ExpressJS, Zod para fazer a validação dos dados,
Axois para requisições, Cheerio para manipulações JQuery e Swagger para documentação</p>

### Instalação

Para rodar o projeto é necessario o NodeJS e o Angular/cli instalados na máquina, caso já esteja instalado, seguir os seguintes passos:

1° Passo: npm i - > Faz a instalação dos pacotes

2° Passo:npm run dev -> rodará o projeto na porta 3333

Link Documentação: http://localhost:3333/api-docs/

Exemplo de Requisição Para teste ( Postman e Insomnia) : GET - http://localhost:3333/search?query=a

Exemplo Retorno : [
	{
		"title": "A",
		"link": "https://pixabay.com/pt/illustrations/letra-a-alfabeto-a-carta-m%25C3%25A1rmore-2246311/"
	}
  ]
query +> É o parametro recebido do frontEnd na qual a pesquisa é feita, se for passado com outro nome, será exibido erro.




