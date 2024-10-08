"use client"

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState} from 'react';
import { doLogin } from "@/services/Web3Service";


export default function Home() {
  const { push } = useRouter();

  const [message, setMessage]= useState();

  function btnLoginClick() {
    
    setMessage("Conectando a carteira.... Aguarde.");
    doLogin()
    .then(account => push("/bet"))
    .catch(err => {
      console.error(err);
      setMessage(err.message);
    })
  }

  return (
    <>
      <Head>
        <title>BetCandidate | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-6">
            <img
              src="https://politicareal.com.br/i.php?w=800&h=600&zc=3&src=uploads/noticias/d0472728c9214abb23be8fae574d7496.png"
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
              alt="Presidential Election Image"
            />
          </div>
          <div className="col-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
            <p className="lead">Apostas on-chain nas eleições americanas.</p>
            <p className="lead">Autentique-se com sua carteira e deixe sua aposta para a próxima disputa.</p>
            <div className="d-flex justify-content-start">
              <button type="button" className="btn btn-primary btn-lg px-4" onClick={btnLoginClick}>
                <img
                  src="/fontes/MetaMask_Fox.svg.2.png"
                  width={32}
                  height={32}
                  className="me-2"
                  alt="Conectando Metamask"

                />
              </button>
            </div>

            <p className="message">{message}</p>
          </div>
        </div>

        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-4 mb-0 text-body-secondary">2024 BetCandidate, inc</p>
          <ul className="nav col-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link px-2 text-body-secondary">About</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
