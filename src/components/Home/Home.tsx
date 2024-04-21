import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";

import QuestionManager from "../Questions/QuestionManager"
import {getQuestionsData, question} from "../Questions/QuestionsSource";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


function Home() {

  const [questions, setQuestions] = useState<question[]>([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loaded) {
      navigate('/question', { state: { questions } });
    }
  }, [loaded, questions, navigate]);

  const trigQuestions = () => {
    getQuestionsData().then((data) => {
      setQuestions(data);
      setLoaded(true);
    });
  }

  return (
    <div className="main-content">
       <div className="d-grid gap-5">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-4 mb-3 mt-5 p-0 card-user" style={{ minWidth: '240px', maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  <img src="/src/assets/caralouco.png" style={{ maxWidth: '80px' }} alt="Imagem" />
                </div>
                <div className="col-6 card-user">
                  <div className="card-body">
                    <h5 className="card-title text-white">Card title</h5>
                    <p className="card-text text-muted">aaaaaaaaaaaaaa</p>
                    <p className="card-text">aaaaaaaaaaaaa</p>
                  </div>
                </div>
                <div className="col-4 card-points text-white d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faCoins} style={{ color: '#FDD65F' }} />
                  <p className="card-text">aaaaaaaaaa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
          <div className="circle-container">
              <div className="circle"></div>
              <p className="circle-text">Lambda Quiz</p>
            </div>
          </div>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-5">
        <Button
          style={{ backgroundColor: '#FF9A30', width: '30%' }}
          variant="primary"
          onClick={trigQuestions}>
          <h1>Jogar</h1>
        </Button>
      </div>
    </div>
  );
}

export default Home;
