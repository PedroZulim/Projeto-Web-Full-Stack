import React from 'react';

function Main() {
    return (
        <div className='Main'>
            <h1>Proposta do Projeto 1</h1>
            <h2>AS64A - Programação Web Fullstack</h2>
            <p>Prof. Willian Massami Watanabe</p>

            <h3>1. Descrição do projeto</h3>
            <p>O Projeto 1 da disciplina Programação Web Fullstack trata-se do desenvolvimento da camada Frontend de uma aplicação web, utilizando a biblioteca React.js. A aplicação deve ser desenvolvida seguindo o conceito de SPA - Single Page Application, em que todas as funcionalidades serão implementadas em uma única página HTML, sem a necessidade de redirecionamento entre páginas para atualização da interface.</p>

            <p>Inicialmente, cada equipe deve selecionar uma API JSON aberta para utilizar em seu trabalho (sugestão de escolha: <a href="https://github.com/public-apis/public-apis">https://github.com/public-apis/public-apis</a>). O projeto avaliará a capacidade da equipe em desenvolver uma aplicação com JavaScript no lado cliente de uma aplicação web, que consiga consumir os dados disponíveis em APIs JSON.</p>


            <h3>2. Critérios de avaliação</h3>
            <p>Qualquer outra biblioteca utilizada não aprovada previamente pelo professor será desconsiderada da avaliação. Se for constatada cópia de artefatos de outros projetos, será atribuída nota zero e o projeto não poderá passar pela etapa de recuperação de nota.</p>
            <p>Entre os grupos, não pode ser utilizada a mesma API JSON. Todas as APIs JSON utilizadas pelos grupos devem ser previamente aprovadas pelo professor.</p>
            <p>Cada grupo também deve determinar juntamente com o professor qual funcionalidade/hook e biblioteca externa serão utilizadas em seu projeto.</p>
            <p>O projeto poderá ser desenvolvido em equipes de até 2 pessoas.</p>
            <p>Nos prazos determinados, o Projeto 1 deve ser apresentado ao professor e a nota a cada membro da equipe será definida de acordo com o entendimento do que foi desenvolvido no respectivo projeto.</p>
            <p>Os critérios de avaliação desse projeto são definidos a seguir:</p>
            <ul>
                <li>Atendimento às diretrizes de desenvolvimento web apresentadas durante as aulas.</li>
                <li>Estrutura do projeto utilizando Webpack/create-react-app ou outra estrutura concordada com o professor.</li>
                <li>Busca por publicações, utilizando buscas por substrings.</li>
                <li>Paginação do resultado da busca.</li>
                <li>Verificação de preenchimento de campos obrigatórios na busca.</li>
                <li>Apresentação de mensagens de erro de validação.</li>
                <li>Implementação de componentes e comunicação de componentes React.js com a Context API.</li>
                <li>Implementação da funcionalidade/hook selecionado pelo grupo.</li>
                <li>Uso de uma biblioteca externa selecionada pelo grupo.</li>
                <li>Geração do pacote de deployment da aplicação e disponibilização em um servidor web.</li>
                <li>Atualização incremental das mudanças de código-fonte no Git.</li>
            </ul>
        </div>
    );
}

export default Main;