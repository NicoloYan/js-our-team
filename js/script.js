// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. 
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale
//  e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.

// Creo un array di oggetti contenente i dettagli delle persone

const peopleArray = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }

]

// Seleziono l'elemento HTML al quale appenderò le cards
const cardsContainer = document.querySelector('.team-container')

// Ciclo for per scorrere l'array e creo le cards
for (let i = 0; i < peopleArray.length; i++) {
    const thisPerson = peopleArray[i]

    // Creo il Template
    const cardToPrint = `
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>[NOME]</h3>
            <p>[RUOLO]</p>
        </div>
  </div>
    `
}