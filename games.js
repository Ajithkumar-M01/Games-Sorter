// styling

const heading = document.querySelector (".head");
heading.textContent = "Top Games of all Time"

// array

// const games = [
//     {
//         gamesImg: ["mario", "tetris", "cod", "got", "gow", "gta5", "loz", "minecraft", "rdd2", "witcher"],
//         gamesTitle: ["Mario", "Tetris", "Call of Duty", "Ghost of Tsushima", "God of War", "GTA V", "The Legend of Zelda", "Minecraft", "Red Dead Redemption 2", "Witcher 3"],
//         gamesRating: ["4.8", "4.7", "4.5", "4.4", "4.3", "4.2", "4.1", "4.0", "3.9", "4.9"],
//     }
// ]

const gamesImg = ["mario", "tetris", "cod", "got", "gow", "gta5", "loz", "minecraft", "rdd2", "witcher"]
const gamesTitle = ["Super Mario 3D World", "Tetris", "Call of Duty: MW2", "Ghost of Tsushima: Director's Cut", "God of War: Ragnarok", "GTA V", "The Legend of Zelda: breath of the wild", "Minecraft", "Red Dead Redemption 2", "Witcher 3"]
const gamesRating = ["7", "8.5", "8", "9.2", "9.9", "9.4", "9.5", "9", "9.7", "9.3"]
const gamesSold = ["13.4", "520", "22.7", "9.73", "15", "200", "33.5", "300", "63", "50"]
const gamesYear = ["1985", "1984", "2003", "2020", "2022", "2013", "1986", "2011", "2018", "2015"]
const gamesCost = ["3500", "2500", "4000", "2500", "2999", "2000", "2549", "1999", "1320", "1599"]
// const gamesCost2 = ["3500", "2500", "4000", "2500", "2999", "2000", "2549", "1999", "1320", "1599"]

// button

const button = document.getElementById ("btn")
button.textContent = "SEARCH"

button.addEventListener("click", displayGames)

const resultDiv = document.createElement ("div")
resultDiv.classList.add ("grid")
const container = document.querySelector (".container")
container.appendChild(resultDiv)

function displayGames() {
    const input = document.getElementById ("input")
    const sort = input.options[input.selectedIndex].value;

    switch(sort) {
        case "all":
            displayAll();  
            console.log ("1")  
            break;
        case "rating":
            displayRating();
            console.log ("2")
            break;
        case "sold":
            displaySold();
            console.log ("3")
            break;
        case "year":
            displayYear();
            console.log ("4")
            break;
        case "alpha":
            displayAlpha();
            console.log ("5")
            break;
        case "costLow":
            displayCostLow();
            console.log ("6")
            break;
        case "costHigh":
            displayCostHigh();
            console.log ("7")
            break;
    }

    function displayAll() {
        resultDiv.textContent = ""
        for (let i = 0; i < gamesRating.length; i++) {
            const img = document.createElement("img")
            img.classList.add("game-img")
            img.src = `${gamesImg[i]}.jpg`
            resultDiv.appendChild(img)
            
            
            const title = document.createElement("h3")
            title.classList.add("game-title")
            title.textContent = gamesTitle[i]
            resultDiv.appendChild(title)
                    
            const fill1 = document.createElement("p")
            fill1.textContent = ""
            resultDiv.appendChild(fill1)

            const fill2 = document.createElement("p")
            fill2.textContent = ""
            resultDiv.appendChild(fill2)
  
            console.log ("alllll")
            // const img = document.createElement("img")
            // const gameImages = games[i].gamesImg
            // img.src = gameImages.jpg
            // resultDiv.appendChild(img)
    
            // const title = document.createElement("h3")
            // const gameTitles = games[i].gamesTitle;
            // title.textContent = gameTitles
            // resultDiv.appendChild(title)
    
            // const rating = document.createElement("p")
            // const gameRatings = games[i].gamesRating
            // rating.textContent = gameRatings
            // resultDiv.appendChild(rating)
            
        }

    
    }
    
    
    function displayRating() {
        resultDiv.textContent = ""

        // const rate = document.createElement("p")
        // rate.textContent = gamesRating.sort((a, b) => b - a);
        // resultDiv.appendChild(rate)
    
        // for (let rate of gamesRating.sort((a, b) => b - a)) {
        //     const img = document.createElement("img")
        //     img.src = `${gamesImg[i]}.jpg`
        //     resultDiv.appendChild(img)
    
            
        //     const title = document.createElement("h3")
        //     title.textContent = gamesTitle[i]
        //     resultDiv.appendChild(title)
    
            
        //     const rating = document.createElement("p")
        //     rating.textContent = gamesRating[i]
        //     resultDiv.appendChild(rating)
        // }
    
        
        // resultDiv.textContent = ""
        // for (let i = 0; i < gamesRating.length; i++) {
        //     const img = document.createElement("img")
        //     img.src = `${gamesImg[i]}.jpg`
        //     resultDiv.appendChild(img)
    
            
        //     const title = document.createElement("h3")
        //     title.textContent = gamesTitle[i]
        //     resultDiv.appendChild(title)
    
            
        //     const rating = document.createElement("p")
        //     rating.textContent = gamesRating[i]
        //     resultDiv.appendChild(rating)
        // }
    
        const sortedRating = gamesTitle.map((title, index) => {
            return {
                title,
                rating: gamesRating[index],
                image: gamesImg [index]
            }
        }).sort((a, b) => b.rating - a.rating)

    
        for (let i = 0; i < sortedRating.length; i++) {

            const img = document.createElement("img")
            // img.src = `${gamesImg[gamesTitle.indexOf(sortedGames[i].title)]}.jpg`
            img.src = `${sortedRating[i].image}.jpg`
            resultDiv.appendChild(img)
    
            const title = document.createElement("h3")
            title.textContent = sortedRating[i].title
            resultDiv.appendChild(title)
                
            const rating = document.createElement("p")
            rating.textContent = `Rating: ${sortedRating[i].rating} / 10`
            resultDiv.appendChild(rating)

            const line = document.createElement("hr")
            resultDiv.appendChild(line)

            console.log("ratinggggg")
        }
    
    
    }
    
    function displaySold() {
        resultDiv.textContent = ""

        const sortedSold = gamesTitle.map ((title,index) => {
            return {
                title,
                sold: gamesSold [index],
                image: gamesImg [index]
            }
        }).sort((a,b) => b.sold - a.sold)
    
        for (let i=0; i < sortedSold.length; i++) {
            const img = document.createElement("img")
            img.src = `${sortedSold[i].image}.jpg`
            resultDiv.appendChild(img)
    
            const title = document.createElement("h3")
            title.innerText = sortedSold[i].title
            resultDiv.appendChild(title)
    
            const sold = document.createElement("p")
            sold.innerText = `${sortedSold[i].sold} million copies sold`
            resultDiv.appendChild(sold)

            const line = document.createElement("hr")
            resultDiv.appendChild(line)

            console.log("soldddddd")
        }
    }
    
    function displayYear() {
        resultDiv.textContent = ""

        const sortedYear = gamesImg.map ((image, index) => {
            return {
                image,
                title: gamesTitle[index],
                year: gamesYear[index], 
            }
        }).sort((a,b) => a.year - b.year)
    
        for (let i=0; i < sortedYear.length; i++) {
            const image = document.createElement("img")
            image.src = `${sortedYear[i].image}.jpg`
            resultDiv.appendChild(image)
    
            const title = document.createElement("h3")
            title.innerText = sortedYear[i].title
            resultDiv.appendChild(title)
    
            const year = document.createElement("p")
            year.innerText = sortedYear[i].year
            resultDiv.appendChild(year)

            const line = document.createElement("hr")
            resultDiv.appendChild(line)

            console.log("yearrrrr")
        }
    }
    
    
    function displayAlpha() {
        resultDiv.textContent = ""

        const sortedAlpha = gamesTitle.map ((title,index) => {
            return {
                title,
                image: gamesImg[index],
            }
        }).sort((a, b) => a.title.localeCompare(b.title))
    
        for (let i=0; i < sortedAlpha.length; i++) {
            const image = document.createElement("img")
            image.src = `${sortedAlpha[i].image}.jpg`
            resultDiv.appendChild(image)
    
            const title = document.createElement("h3")
            title.innerText = sortedAlpha[i].title
            resultDiv.appendChild(title)

            const fill = document.createElement("p")
            fill.innerText = ""
            resultDiv.appendChild(fill)

            const line = document.createElement("hr")
            resultDiv.appendChild(line)

            console.log("alphaaaaa")
        }
    
    }

    function displayCostLow() {
        resultDiv.textContent = ""

        const sortedCostLow = gamesImg.map((image,index) => {
            return {
                image,
                title: gamesTitle[index],
                cost: gamesCost[index]
            }
        }).sort((a,b) => a.cost - b.cost)

        for (let i=0; i < sortedCostLow.length; i++) {
            const image = document.createElement("img")
            image.src = `${sortedCostLow[i].image}.jpg`
            resultDiv.appendChild(image)

            const title = document.createElement("h3")
            title.textContent = sortedCostLow[i].title
            resultDiv.appendChild(title)

            const cost = document.createElement("p")
            cost.textContent = `INR ${sortedCostLow[i].cost}`
            resultDiv.appendChild(cost)

            const line = document.createElement("hr")
            resultDiv.appendChild(line)
        }
    }
    
    function displayCostHigh() {
        resultDiv.textContent = ""

        const sortedCostHigh = gamesImg.map ((image,index) => {
            return {
                title: gamesTitle[index],
                image,
                cost: gamesCost[index]
            }
        }).sort((a,b) => b.cost - a.cost)

        for (let i=0; i < sortedCostHigh.length; i++) {
            const image1 = document.createElement("img")
            image1.src = `${sortedCostHigh[i].image}.jpg`
            resultDiv.appendChild(image1)

            const title = document.createElement("h3")
            title.innerHTML = sortedCostHigh[i].title
            resultDiv.appendChild(title)

            const cost = document.createElement("p")
            cost.innerText = `INR ${sortedCostHigh[i].cost}`
            resultDiv.appendChild(cost)

            const line = document.createElement("hr")
            resultDiv.appendChild(line)
        }
    }
    
        

}



