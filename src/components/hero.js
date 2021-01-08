import React from "react";
import { NavLink } from "react-router-dom";


const Hero = () => (
  <div className="text-center hero my-5">
    <h1 className="mb-5">Solution Finder</h1>

    <div className="lead">
      A automatização da correção de erros é algo muito útil para garantir a qualidade e
      estabilidade de aplicações. A estratégia de <i>crowdsourcing</i> ajuda muito nessa tarefa. O
      objetivo dessa aplicação é buscar possíveis soluções para um erro.
      <div className="mt-5">
        <b>
          Para buscar soluções no StackOverflow, basta clicar na aba {' '}
          <NavLink
            to="/search"
            exact
            activeClassName="router-link-exact-active">Search
                  </NavLink>
          {' '}
        </b>
      </div>
    </div>
  </div>
);

export default Hero;