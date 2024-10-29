import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
    const steps = [
        {
            id:"1",
            number: "1",
            title: "Консультация",
            description: "Связываетесь с нами любым удобным способом: по телефону, почте. Получаете предварительный расчет",
        },

        {
            id:"4",
            number: "2",
            title: "Выезд и смета",
            description: "Наш специалист выезжает на объект и делает все замеры. Обсуждаем все нюансы и отправляем смету на согласование",
        },
        {
            id:"5",
            number: null,
            title: null,
            description: null,
        },
        {
            id:"6",
            number: null,
            title: null,
            description: null,
        },
        {
            id:"7",
            number: "3",
            title: "Оплата и работа",
            description: "Выберите удобный способ оплаты с НДС или без, и в установленные сроки мы проведем согласованные работы, соблюдая все технологии",
        },

        {
            id:"9",
            number: "4",
            title: "Гарантия",
            description: "Наша компания предоставляет гарантию на твердое покрытие от 1 года",
        },
        {
            id:"10",
            number: null,
            title: null,
            description: null,
        },
    ];

    return (
        // <div className="roadmap">
        //     <div className="container roadmap-container">
        //     <h2>Как мы работаем</h2>
        //     <div className="roadmap-steps">
        //         {steps.map((step, index) => (
        //             <div className={`roadmap-step step-${index}`} key={step.number}>
        //                 {step.number ? <div className="step-number">{step.number}</div> : null}
        //                 <div className="step-content">
        //                     <h3>{step.title}</h3>
        //                     <p>{step.description}</p>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        //     </div>
        // </div>
        <div className="t-container t565__container">
            <div className="t565__item t-item">
                <div className="t-width t-width_8 t565__mainblock">
                    <div className="t565__col">
                        <div className="t565__linewrapper">
                            <div className="t565__line" style={{width: "2px"}}></div>
                            <div className="t565__circle" style={{borderWidth: "2px"}}>
                                <div className="t565__number t-name t-name_md">1</div>
                            </div>
                        </div>
                        <div className="t565__block">
                            <div className="t565__title t-name t-name_lg" field="li_title__1479137044697">Консультация
                            </div>
                            <div className="t565__descr t-text t-text_xs" field="li_descr__1479137044697">Связываетесь с
                                нами любым удобным способом: по телефону, почте. Получаете предварительный расчет
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="t565__item t-item">
                <div className="t-width t-width_8 t565__mainblock">
                    <div className="t565__col t565__flipped">
                        <div className="t565__linewrapper">
                            <div className="t565__line" style={{width: "2px"}}></div>
                            <div className="t565__circle" style={{borderWidth: "2px"}}>
                                <div className="t565__number t-name t-name_md" >2</div>
                            </div>
                        </div>
                        <div className="t565__block-flipped">
                            <div className="t565__title t-name t-name_lg" field="li_title__1479137356907">Выезд и
                                смета
                            </div>
                            <div className="t565__descr t-text t-text_xs" field="li_descr__1479137356907">Наш специалист
                                выезжает на объект и делает все замеры. Обсуждаем все нюансы и отправляем смету на
                                согласование
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="t565__item t-item">
                <div className="t-width t-width_8 t565__mainblock">
                    <div className="t565__col">
                        <div className="t565__linewrapper">
                            <div className="t565__line"  style={{width: "2px"}}></div>
                            <div className="t565__circle"  style={{borderWidth: "2px"}}>
                                <div className="t565__number t-name t-name_md"  >3</div>
                            </div>
                        </div>
                        <div className="t565__block">
                            <div className="t565__title t-name t-name_lg" field="li_title__1479137790652">Оплата и
                                работа
                            </div>
                            <div className="t565__descr t-text t-text_xs" field="li_descr__1479137790652">Выберите
                                удобный способ оплаты с НДС или без, и в установленные сроки мы проведем согласованные
                                работы, соблюдая все технологии
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="t565__item t-item">
                <div className="t-width t-width_8 t565__mainblock">
                    <div className="t565__col t565__flipped">
                        <div className="t565__linewrapper">
                            <div className="t565__line"  style={{width: "2px"}}></div>
                            <div className="t565__circle"  style={{borderWidth: "2px"}}>
                                <div className="t565__number t-name t-name_md"  >4</div>
                            </div>
                        </div>
                        <div className="t565__block-flipped">
                            <div className="t565__title t-name t-name_lg" field="li_title__1682330337884">Гарантия</div>
                            <div className="t565__descr t-text t-text_xs" field="li_descr__1682330337884">Наша компания
                                предоставляет гарантию на твердое покрытие от 1 года
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
