import React, { useState } from 'react';
import styled from 'styled-components';

import Container from '../layouts/Container';
import Form from '../layouts/Form';

export default function ImageDecode({ onSubmit, result }) {
    
  const [imageFile, setImageFile] = useState(null); 
  const [secretKey, setSecretKey] = useState('');

  const recognizeImageFile = ({ target }) => {
    const file = target.files[0];
    if (/image\/(\w+)/.test(file.type)) {
      setImageFile(file);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    if (!imageFile) return;

    onSubmit({ imageFile, secretKey });
  };

  return (
    <Container>
      <Form
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <ImageLabel htmlFor="image">
            <p>{ imageFile ? imageFile.name : ''}</p>
            <button type="button">Upload</button>
            <input 
              type="file" 
              id="image" 
              onChange={recognizeImageFile} 
              accept="image/*" 
              hidden
              required
            />
          </ImageLabel>
        </div>

        <div className="form-group">
          <input 
            placeholder="Enter the secret key" 
            value={secretKey}
            onChange={({ target }) => setSecretKey(target.value)}
            required
          />
        </div>

        <div className="form-group">
          <SubmitBtn type="submit">DECODE</SubmitBtn>
        </div>

        {
          result ? 
          <div className="form-group">
            <textarea 
              placeholder="Type your secret message" 
              value={result}
              disabled
            ></textarea>
          </div> : 
          ""
        }
      </Form>
    </Container>
  );
}

const ImageLabel = styled.label`
  cursor: pointer;
  display: flex;

  p {
    flex: 5;
    padding: 16px 12px;
    color: #444;
    border: 1px solid #ccc;
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button {
    flex: 1;
    border: 1px solid #ccc;
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: hsl(120, 85%, 40%);
    font-size: 1.1rem;
    padding: 16px 12px;
    color: #fff;
    z-index: -1;
  }
`;

const SubmitBtn = styled.button`
  display: block;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  padding: 16px 12px;
  font-size: 1.1rem;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 2px 12px rgba(80,80,80,0.2);

  &:hover {
    box-shadow: none;
  }
`;