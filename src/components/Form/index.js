import React from "react"

import * as S from "./styled"

const Form = () => {
    return (
        <S.MyForm action="/" name="Contact Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" >
            <S.Input type="hidden" name="form-name" value="Contact Form" />

            <S.Line>
                <S.Label>
                    <S.Input type="text" name="name" placeholder="Name" required/>
                </S.Label>
                <S.Label>
                    <S.Input type="email" name="email" placeholder="Email" required/>
                </S.Label>
            </S.Line>

            <S.Line>
                <S.Label className={"textArea"}>
                    <S.TextArea name="message" placeholder="Mensagem" required/>
                </S.Label>
            </S.Line>

            <S.Button type="submit">Enviar</S.Button>
        </S.MyForm>
    )
}

export default Form
