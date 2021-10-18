import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaJava,
  FaJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";

export default function Portfolio(props) {
  var classToLinks =
    "flex flex-row text-lg md:text-3xl justify-between lowercase m-2";

  var classToSpans = "flex flex-row";

  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center p-2">
      <ol className="w-10/12">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className={classToLinks}
            href="https://github.com/luan-sabino/desafio-pontue"
          >
            Desafio Pontue
            <FaReact />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className={classToLinks}
            href="https://github.com/luan-sabino/CadastroDeFuncionarios"
          >
            Cadastro de Funcionarios <FaJava />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className={classToLinks}
            href="https://github.com/luan-sabino/PokeStore"
          >
            PokeStore{" "}
            <span className={classToSpans}>
              <FaJs />
              <FaCss3 />
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className={classToLinks}
            href="https://github.com/luan-sabino/TrabalhoESI/tree/main"
          >
            Sistema de Avaliação{" "}
            <span className={classToSpans}>
              <FaPhp />
              <FaJs />
              <FaBootstrap />
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className={classToLinks}
            href="https://github.com/luan-sabino/task-manager"
          >
            Gerenciador de Tarefas{" "}
            <span className={classToSpans}>
              <FaJs />
              <FaCss3 />
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className={classToLinks}
            href="https://github.com/luan-sabino/PokeDex"
          >
            PokeDex{" "}
            <span className={classToSpans}>
              <FaJs />
              <FaCss3 />
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className={classToLinks}
            href="https://github.com/luan-sabino/snake-game"
          >
            Jogo da Cobrinha{" "}
            <span className={classToSpans}>
              <FaJs />
              <FaCss3 />
            </span>
          </a>
        </li>
      </ol>
    </div>
  );
}
