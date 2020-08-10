import React from "react"

import * as S from "./styled"

const Form = () => {
    return (
        <S.MyForm action="/" name="Contact Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" >
            <S.Input type="hidden" name="form-name" value="Contact Form" />

            <S.Line>
                <S.Label for={"name"}>Nome</S.Label>
                <S.Input id={"name"} type="text" name="name" placeholder="Name" required/>
                <S.Label for={"email"}>Email</S.Label>
                <S.Input id={"email"} type="email" name="email" placeholder="Email" required/>
            </S.Line>

            <S.Line>
                <S.Label for={"message"}>Mensagem</S.Label>
                <S.TextArea id={"message"} name="message" placeholder="Mensagem" required/>
            </S.Line>

            <S.Button type="submit">Enviar</S.Button>
        </S.MyForm>
    )
}

export default Form
