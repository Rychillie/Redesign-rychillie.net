import styled from "styled-components"

export const MyForm = styled.form``

export const Label = styled.label`
  font-size: 0;
  line-height: 0;
  opacity: 0;
  height: 0;
  width: 0;
`

export const Input = styled.input`
  background: #202124;
  border-radius: 0.3rem;
  padding: 0.6rem;
  margin: 0 0 1rem;
  font-weight: 400;
  font-size: 0.95rem;
  border: none;
  color: #fff;
  flex: 1;

  @media screen and (min-width: 800px) {
    padding: 1rem 1.5rem;
    margin: 0 0 1.2rem;
    font-size: 1.1rem;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
    font-weight: 400;
    font-size: 0.95rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";

    @media screen and (min-width: 800px) {
      font-size: 1.1rem;
    }
  }
  :-ms-input-placeholder {
    color: #fff;
    font-weight: 400;
    font-size: 0.95rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";

    @media screen and (min-width: 800px) {
      font-size: 1.1rem;
    }
  }
`

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  textarea {
    min-width: 100%;
    flex: 1;
  }

  input {
    flex: 1;
  }

  label {
    width: 0;
    height: 0;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    input {
      &:last-child {
        margin-left: 1.2rem;
      }
    }

    textarea {
      min-width: 100%;
      flex: 1;
    }
  }
`

export const TextArea = styled.textarea`
  background: #202124;
  min-height: 120px;
  border-radius: 0.3rem;
  padding: 0.6rem;
  margin: 0 0 1rem;
  font-weight: 400;
  font-size: 0.95rem;
  border: none;
  color: #fff;
  resize: vertical;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  flex: 1;

  @media screen and (min-width: 800px) {
    padding: 1rem 1.5rem;
    margin: 0 0 1.2rem;
    font-size: 1.1rem;
    min-height: 160px;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
    font-weight: 400;
    font-size: 0.95rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";

    @media screen and (min-width: 800px) {
      font-size: 1.1rem;
    }
  }
  :-ms-input-placeholder {
    color: #fff;
    font-weight: 400;
    font-size: 0.95rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";

    @media screen and (min-width: 800px) {
      font-size: 1.1rem;
    }
  }
`

export const Button = styled.button`
  background: rgba(85, 255, 74, 0.4);
  border-radius: 0.3rem;
  padding: 0.8rem 1.4rem;
  margin: 0 0 1rem;
  font-weight: 400;
  font-size: 0.95rem;
  border: none;
  color: #fff;

  @media screen and (min-width: 800px) {
    padding: 1rem 1.8rem;
    margin: 0 0 1.2rem;
    font-size: 1.1rem;
  }

  &:hover {
    background: rgba(85, 255, 74, 0.2);
  }
`
