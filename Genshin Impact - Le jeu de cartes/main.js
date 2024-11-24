const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('tab-active'));
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('active'));
        this.classList.add('tab-active');
        if (this.classList.contains('tab-content1')) {
            document.querySelector('.content1').classList.add('active');
        } else if (this.classList.contains('tab-content2')) {
            document.querySelector('.content2').classList.add('active');
        } else if (this.classList.contains('tab-content3')) {
            document.querySelector('.content3').classList.add('active');
        } else if (this.classList.contains('tab-content4')) {
            document.querySelector('.content4').classList.add('active');
        } else if (this.classList.contains('tab-content5')) {
            document.querySelector('.content5').classList.add('active');
        } else if (this.classList.contains('tab-content6')) {
            document.querySelector('.content6').classList.add('active');
        } else if (this.classList.contains('tab-content7')) {
            document.querySelector('.content7').classList.add('active');
        }
    })
})

// Configuration des tabs. Le programme affiche différents éléments en fonction du bouton sur lequel l'utilisateur clique.

const button = document.getElementById('dark_mode');
button.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('Genshin Fond Dark Mode.png')";
    const elements = document.querySelectorAll('.texte, .h1, .h2, .aside_titre, .page_titre, .liens_texte, .footer_titre');
    elements.forEach(element => {
        element.style.color = "rgb(138, 166, 184)";
    });
});

// Applique une image de fond et une couleur au texte différents lorsque le bouton "Dark Mode" est enclenché.

const button2 = document.getElementById('light_mode');
button2.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('Genshin Fond.png')";
    const elements = document.querySelectorAll('.texte, .h1, .h2, .aside_titre, .page_titre, .liens_texte, .footer_titre');
    elements.forEach(element => {
        element.style.color = "rgb(205, 225, 238)";
    });
});

// Applique une image de fond et une couleur au texte différents lorsque le bouton "Light Mode" est enclenché.

let form = document.querySelector('form')
let pseudo = document.querySelector('#pseudo')

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du form detecté !')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let password2 = document.querySelector('#password2')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )

    if(email.value == ''){
        console.log("Email invalide.")
        email.classList.remove('success')
        email.classList.add('error')
    } else {
        console.log('Email valide.')
        email.classList.remove('error')
        email.classList.add('success')
    }

    if(pseudo.value.length <6){
        console.log('Pseudo invalide.')
        pseudo.classList.add('error')
        pseudo.classList.remove('success')
    } else {
        console.log('Pseudo valide.')
        pseudo.classList.remove('error')
        pseudo.classList.add('success')
    }
    
    if (password.value.length >= 10 || passCheck.test(password.value)) {
        if (password.value === password2.value) {
            console.log('Mot de passe valide.');
            password.classList.remove('error');
            password.classList.add('success');
            password2.classList.remove('error');
            password2.classList.add('success');
        } else {
            console.log('Les mots de passe ne correspondent pas.');
            password2.classList.add('error');
            password2.classList.remove('success');
        }
    } else {
        console.log('Mot de passe trop court ou invalide.');
        password.classList.add('error');
        password.classList.remove('success');
        password2.classList.add('error')
        password2.classList.remove('success')
    }
})

// Vérifie que les informations entrées par l'utilisateur respectent les contraintes, puis change la couleur de fond pour indiquer une erreur ou un succès.

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Ouvre et ferme le popup quand les boutons "Connexion" et "Fermer" sont enclenchés.