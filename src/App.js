import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Navbar from './components/Navbar';
import AppDesc from './components/AppDesc';
import ImageEncode from './components/ImageEncode';
import ImageDecode from './components/ImageDecode';

export default function App() {
  const [action, setAction] = useState(null);

  const encodeImage = ({ message, imageFile: file }) => {
    const fd = new FormData();
    fd.append('message', message);
    fd.append('image', file, file.name);
    
    axios
      .post('http://localhost:8080/encode', fd)
      .then(({ image }) => {
        
      });
  };

  const decodeImage = ({ imageFile: file }) => {
    const fd = new FormData();
    fd.append('image', file, file.name);
    
    axios
      .post('http://localhost:8080/decode', fd)
      .then(({ message }) => {
        
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
        <ImageEncode onSubmit={encodeImage}/> : 
        action == 'decode' ? 
        <ImageDecode onSubmit={decodeImage}/> : 
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