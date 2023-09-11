import React from "react"
import styled from "styled-components"

import { Row, Years } from "../components/containers"
import { Image, Title } from "../components/elements"
import { mobileCheck } from "../util"

import William from "./william.jpg"
import Karthik from "./karthik.jpg"
import Neha from "./neha.png"
import Sumanth from "./sumanth.jpg"
import Connor from "./connor.jpg"
import David from "./david.jpg"

const Officers = () => {
    return (
        <OfficersContainer>
            <Title>Meet the Officers!</Title>
            <Years>{{
                "2023-2024": mobileCheck() ? (
                    <div>
                        <Officer flip src={William}>William Black</Officer>
                        <Officer src={Karthik}>Karthik Thyagarajan</Officer>
                        <Officer flip src={Neha}>Neha Chandran</Officer>
                        <Officer src={Connor}>Connor Whiting</Officer>
                        <Officer flip src={David}>David Cao</Officer>
                    </div>
                ) : (
                    <div>
                        <Row>
                            <Officer src={William}>William Black</Officer>
                            <Officer src={Karthik}>Karthik Thyagarajan</Officer>
                        </Row>
                        <Row>
                            <Officer flip src={Neha}>Neha Chandran</Officer>
                            <Officer flip src={Connor}>Connor Whiting</Officer>
                        </Row>
                        <div>
                            <Officer styles={{ marginLeft: "auto", marginRight: "auto" }} src={David}>David Cao</Officer>
                        </div>
                    </div>
                ), "2022-2023": mobileCheck() ? (
                    <div>
                        <Officer src={Sumanth}>Sumanth Kalluru</Officer>
                        <Officer flip src={William}>William Black</Officer>
                        <Officer src={Karthik}>Karthik Thyagarajan</Officer>
                        <Officer flip src={Neha}>Neha Chandran</Officer>
                    </div>
                ) : (
                    <div>
                        <Row>
                            <Officer src={Sumanth}>Sumanth Kalluru</Officer>
                            <Officer src={William}>William Black</Officer>
                        </Row>
                        <Row>
                            <Officer flip src={Karthik}>Karthik Thyagarajan</Officer>
                            <Officer flip src={Neha}>Neha Chandran</Officer>
                        </Row>
                    </div>
                )
            }}</Years>
        </OfficersContainer>
    )
}

const OfficersContainer = styled.div`
    width: ${mobileCheck() ? "100%" : "80%"};
    margin-top: 1em;
`

const Officer = ({ src, children, flip, styles }) => {
    if (flip) {
        return (
            <OfficerContainer flip={flip} style={styles}>
                {children}
                <Image src={src} />
            </OfficerContainer>
        )
    }

    return (
        <OfficerContainer style={styles}>
            <Image src={src} />
            {children}
        </OfficerContainer>
    )
}

const OfficerContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 12em;
    height: 9em;
    gap: ${mobileCheck() ? "1em" : "min(1.5vw, 1.5em)"};
    align-items: center;
    margin-top: 2em;
    ${props => props.flip ? `
        margin-left: auto;
        margin-right: ${mobileCheck() ? "1em" : "4em"};
        text-align: right;
    ` : ""}

    font-family: Nunito;
    font-size: ${mobileCheck() ? "25px" : "min(2vw, 25px)"};
`

export default Officers