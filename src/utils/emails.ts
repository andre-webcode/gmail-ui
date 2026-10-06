export type EmailProps = (typeof EMAILS)[0]

export const EMAILS = [
    {
        id:"1",
        name:"Joao Fonseca",
        avatar:"https://mockmind-api.uifaces.co/content/human/80.jpg",
        market:"importante",
        subject:"O que é Lorem Ipsum",
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        start:false,
        date:"12 de jan.",
    },
    {
        id:"2",
        name:"Maria Laura",
        avatar:"https://mockmind-api.uifaces.co/content/human/219.jpg",
        subject:"Why do we use it",
        message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        start:true,
        date:"13 de jan.",
    },
    {
        id:"3",
        name:"Leonel Messi",
        avatar:"https://mockmind-api.uifaces.co/content/alien/15.jpg",
        subject:"Textos para leitura",
        message:"Quatro sugestões de textos literários curtos e metalinguísticos para o coordenador pedagógico fazer a introdução da formação de professores",
        start:false,
        date:"13 de jan.",
    },
]