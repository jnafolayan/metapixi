import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Navbar from './components/Navbar';
import AppDesc from './components/AppDesc';
import ImageEncode from './components/ImageEncode';
import ImageDecode from './components/ImageDecode';

export default function App() {
  const [action, setAction] = useState(null);
  const [secretMessage, setSecretMessage] = useState(null);
  const [imageDownload, setImageDownload] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const apiHost = process.env.NODE_ENV == 'production' ?
    'https://metapixi.herokuapp.com' :
    'http://localhost:8080';

  const encodeImage = ({ message, secretKey, imageFile: file }) => {
    const fd = new FormData();
    fd.append('message', message);
    fd.append('secretKey', secretKey);
    fd.append('image', file, file.name);
    
    axios
      .post(`${apiHost}/encode`, fd)
      .then(({ data }) => {
        setImageDownload(data.image);
        setErrorMessage(null);
        setSecretMessage(null);
      })
      .catch(console.error);
  };

  const decodeImage = ({ secretKey, imageFile: file }) => {
    const fd = new FormData();
    fd.append('secretKey', secretKey);
    fd.append('image', file, file.name);
    
    axios
      .post(`${apiHost}/decode`, fd)
      .then(({ data }) => {
        setSecretMessage(data.message);
        setErrorMessage(null);
        setImageDownload(null);
      })
      .catch(err => {
        if (!err.response || !err.response.data.statusCode) 
          return console.error(err);

        const message = err.response.data.message;
        setErrorMessage(message);
      });
  };

  return (
    <div>
      <Navbar />
      <AppDesc />
      
      <EncodeOrDecode>
        <button type="button" onClick={() => setAction('encode')}>
          Hide
        </button>
        <button type="button" onClick={() => setAction('decode')}>
          Reveal
        </button>
      </EncodeOrDecode>

      {
        action == 'encode' ? 
        <ImageEncode onSubmit={encodeImage} result={imageDownload} /> : 
        action == 'decode' ? 
        <ImageDecode onSubmit={decodeImage} result={secretMessage} errorMessage={errorMessage} /> : 
        ''
      }
    </div>
  );
}

const EncodeOrDecode = styled.div`
  text-align: center;
  margin: 20px 0;

  button {
    border: 1px solid hsla(130, 100%, 42%, 0.2);
    box-shadow: 0 2px 12px rgba(80,80,80,0.2);
    border-radius: 4px;
    outline: none;
    background: hsl(120, 100%, 60%);
    font-size: 1.1rem;
    color: hsl(149, 85%, 28%);
    width: 100px;
    padding: 10px 0;
    text-align: center;
    font-weight: normal;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      box-shadow: none;
      background: transparent;
    }

    &:last-child {
      margin-left: 16px;
    }
  }
`;