# observações

### Banco de dados
Decidi usar o MySQL já que é um banco que tenho mais familiariedade, além de também já estou acostumado com o uso do knex.

No banco foram criadas duas tabelas:
- Tabela Users - Onde ficaram guardados todas as informações dos usuários e a chave estrangeira para o avatar (nome, email, senha, avatar_id, data_nascimento, ativo);
- Tabela Avatar - Onde ficaram as informações da imagem de avatar (nome, path, e data de atualização).

_O arquivo .sql para a criação do banco está <a href="https://github.com/Fuckners/entrevista/tree/main/src/database/criacao_banco_mysql.sql">aqui.</a>_

### TDD
Por mais que eu já saiba fazer projetos que envolvam crud (cadastrar, pesquisar, alterar e deletar), confesso que nesse caso eu acho que seria mais inteligente simplesmente ter ignorado o TDD, considerando que não é a ideia mais sensata do mundo usar TDD quando você planeja fazer um projeto em duas horas. Mas como o objetivo não era concluir o projeto, mas sim ver até onde eu conseguiria ir, resolvi tentar usar.  

Como ainda não fiz tantos projetos usando TDD, tive bastante dificuldade na parte de descobrir como funcionaria para enviar a imagem na hora de testar o cadastro usando Jest, então as solução mais simples que pensei foi definir uma imagem de perfil padrão como acontece na maioria das redes sociais, exemplo:  

<img src="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" alt="exemplo de imagem padrão" width="100px" heigth="100px">  

(eu coloquei a pasta `public/avatares` no `.gitinore` então acho que a imagem acabou não ficando salva, mass a ideia era essa)

### Formulários
O único formulário mínimamente funcional foi o de registro, mas mesmo assim não é o melhor dos formulários. Não possui mensagens de retorno caso aconteça algum erro (imagem muito grande ou tipo inválido), validação dos campos ou criptografia da senha antes de cadastrar no banco de dados.
