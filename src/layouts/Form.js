import styled from 'styled-components';

const Form = styled.form`
  font-size: 1.1rem;

  .form-group {
    padding: 12px 10px;
    width: 100%;

    input, 
    textarea {
      width: 100%;
      padding: 10px 12px;
      font-size: 1.1rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    button {
      border: none;
      background: hsl(120, 85%, 40%);
      color: #fff;
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default Form;
