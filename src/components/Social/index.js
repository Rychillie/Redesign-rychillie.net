import React from "react"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Twitch } from "@styled-icons/boxicons-logos/Twitch"
import { Youtube } from "@styled-icons/boxicons-logos/Youtube"
import { Telegram } from "@styled-icons/boxicons-logos/Telegram"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"

import * as S from "./styled"

const Social = () => (
    <S.ListSocial>
        <S.ItemSocial
            className={"twitter"}
            href="https://twitter.com/rychillie"
            title="Twitter"
        >
            <Twitter />
            @rychillie
        </S.ItemSocial>
        <S.ItemSocial
            className={"instagram"}
            href="https://instagram.com/rychillie"
            title="Instagram"
        >
            <InstagramAlt />
            @rychillie
        </S.ItemSocial>
        <S.ItemSocial
            className={"linkedin"}
            href="https://linkedin.com/in/rychillie"
            title="Linkedin"
        >
            <Linkedin />
            /rychillie
        </S.ItemSocial>
        <S.ItemSocial
            className={"github"}
            href="https://github.com/rychillie"
            title="Github"
        >
            <Github />
            @rychillie
        </S.ItemSocial>
        <S.ItemSocial
            className={"twitch"}
            href="https://twitch.tv/rychillie"
            title="Twitch"
        >
            <Twitch />
            /rychillie
        </S.ItemSocial>
        <S.ItemSocial
            className={"youtube"}
            href="https://youtube.com/rychillie"
            title="Youtube"
        >
            <Youtube />
            /rychillie
        </S.ItemSocial>
        <S.ItemSocial
            className={"telegram"}
            href="https://telegram.com/rychiii"
            title="Telegram"
        >
            <Telegram />
            @rychiii
        </S.ItemSocial>
    </S.ListSocial>
)

export default Social
