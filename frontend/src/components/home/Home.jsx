import React from "react";
import Main from "../templates/main/Main";

function Home() {
    return (
        <Main icon="home" title="Início"
            subtitle="Segundo Projeto do Capitulo de React.">
            <div className="display-4">Bem vindo</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a contrução de um
                cadastro desenvolvido em React durante as aulas da Cod3r</p>
        </Main>
    )
}
export default Home;
