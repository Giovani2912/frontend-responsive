import React from 'react'
import logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

export default function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingimg} alt="landing" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>


                    <a href="" className="give-classes">
                        <img src={giveClassIcon} alt="Dar-aula"/>
                        Dar aula
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="purple-heart"/>
                </span>
            </div>
        </div>
    )

}