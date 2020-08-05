import React from 'react'
import PageHeader from '../../components/PageHeader'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


export default function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis."> 
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>   

                    <div className="input-block">
                        <label htmlFor="week-day">Dia de semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>                 
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-CF54XApetCCeMMz06QWzAg3MILVNBFxuTPuoy=s32-c-mo" alt="Giovani Foltran"/>
                        <div>
                            <strong>Giovani Canova Foltran</strong>
                            <span>Matemática</span>
                        </div>
                    </header>
                    <p>
                        O cara deita na matemática, parece o Cristiano Ronaldo quando descobre que o próximo joga é contra o 
                        <br/> <br/>
                        Atlético de Madrid, aquele time falido, nunca ganhou uma Champions, pior que alguns times de Paris.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>De graça</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}