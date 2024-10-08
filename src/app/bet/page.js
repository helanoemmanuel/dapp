"use client"


import Head from "next/head";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function Bet() {

    const [message, setMessage]= useState();
    
    useEffect ( () => {

      if(!localStorage.getItem("wallet")) return PushManager("/");
    }, []);
  return (
    <>
      <Head>
        <title>BetCandidate | Apostar</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container px-4 py-5">
        <div className="row  align-items-center">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
        <p className="lead">Apostas on-chain nas eleições americanas.</p>
            <p className="lead">Voce tem até o dia da eleição para deixar sua aposta, em um dos candidatos abaixo.</p>

        </div >

        <div className="row flex-lg-row-reverse align-items-center g-1 py-5">

          <div className="col"></div>

          <div className="col">

            <h3 className="my-2 d-block mx-auto" style={ {width: 250}}>
              Donald Trump
            </h3>

            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg " 
            className="d-block mx-auto img-fluid rounded"
             width={250}></img>

             <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{width: 250}}>Aposto nesse candidato</button>
            <span className="badge text-bg-secudary d-block mx-auto" style={{width: 250}}>
              0 POL Apostados
            </span>
          </div>

          <div className="col">

            <h3 className="my-2 d-block mx-auto" style={ {width: 250}}>
              Kamala Harris
            </h3>

            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg" 
            className="d-block mx-auto img-fluid rounded"
             width={250}></img>

             <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{width: 250}}>Aposto nesse candidato</button>
            
            
            <span className="badge text-bg-secudary d-block mx-auto" style={{width: 250}}>
              0 POL Apostados
            </span>
            
          </div>

        </div>

        <div className="row align-items-center">
        <p className="message">{message}</p>
        </div>


        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

          <p className=" col-4 mb-0 text-body-secondary">
             2024 BetCandidate, inc 
          </p>
          <ul className=" nav col-4 justify-content-end">
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
