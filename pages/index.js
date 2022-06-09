// Element creation

document.body.style.backgroundImage= "url('https://wallpaperaccess.com/full/187161.jpg')";

const newH1 = document.createElement("h1")
    newH1.textContent = "The Cutest Dogs"

const Jcards = document.createElement('div')
    Jcards.id = "DogsInfo"

const animals = {
    dogs:[
        {
            imgagepath: '../images/jake2.png',
            name: "Jake",
            age: "Two Years Old",
            favFood: "Likes Eating Apples",
            enjoys: "Enjoys Running Around Parks"
        },
        {
            imagepath: '../images/josh.jpg',
            name: "Josh",
            age: "Fourteen Years Young",
            favFood: "Likes Eating Peanut Butter",
            enjoys: "Enjoys Rolling in the Grass"
        }
    ]
}

animals.dogs.forEach(renderDogs)

function renderDogs(data) {
    const li = document.createElement('article')
    const pimg = document.createElement('IMG')
    const pName = document.createElement('h3')
    const pAge = document.createElement('p')
    const pFaveFood = document.createElement('p')
    const pEnjoys = document.createElement('p')

    pimg.src = data.imagepath
    pName.textContent = data.name
    pAge.textContent = data.age
    pFaveFood.textContent = data.favFood
    pEnjoys.textContent = data.enjoys

    li.className = 'about-li'

    li.append(pimg, pName, pAge, pFaveFood, pEnjoys)
    Jcards.append(li)
}


document.body.append(newH1, Jcards);

