# Project Title:  Hangman
# Description:
This project, _Hangman_ game has developed to showcase and solidify skills and knowledge that have gained so for. This project has provided me a chance to work as independent developer under the supervision of *instructor* and worked in group environment but focused to achieve individual tasks.

The _Hangman_  game can be played by multiple users, player can enter a word or pick randomly generated word from list of stored word, that will be guessed during the game. The game will hide the work by a blank spaces. Player has eight mistakes’ chances to guess the word. The repeated alphabet will be entered only once, the system will populate it according to the position in the word. 
# Game Link 
[Hangman](https://iosg073.github.io/Project-1-Game.github.io/)
# Examples 
* Main Page 

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/mainPage.png " Ttitle")

* Word submit interface  

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/userword.jpg)

* Word guess interface

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/guessWord.jpg)

* Work in progress

![Main page](https://github.com/iosg073/Project-1-Game.github.io/blob/master/workInProgress.jpg)


# HTML Code 
```html
<div class="buttonDiv" >
        <button class="buttonMnu" id="btnSubmit1">  Submit a word  </button >
        <button class="buttonMnu" id="btnRand"> Get random word </button >
        <button class="buttonMnu" id='btnreset'> Reset </button >
 </div>
            
```
# CSS Code 
```css
.buttonDiv{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100px;
      width: 290px;
      background-color: rgb(231, 240, 231);
      order: 3;
      border: mediumseagreen solid 1px;
  }
 ```
 # javaScript Code
 ```javaScript 
     let divwraper=document.createElement('div');
for (let i=0;i<worldEnter.length;i++)
{
    let divNew=document.createElement('div');
    text = document.createTextNode(' ');
    divNew.appendChild(text);
    divNew.classList.add('inputHolder');
    divwraper.append(divNew)
}

divwraper.classList.add("flexContainer")
mainBox.prepend(divwraper)
 ```
 ```javaScript 
 for(let i=0;i<worldEnter.length;i++)
                            {
                                if(worldEnter.indexOf(eventObj.target.textContent.toLowerCase())>-1)
                                    {
                                        tt=document.getElementsByClassName('inputHolder');
                                        tt[worldEnter.indexOf(eventObj.target.textContent.toLowerCase())].innerHTML=eventObj.target.textContent.toLowerCase();
                                        worldEnter=worldEnter.replace(eventObj.target.textContent.toLowerCase(), "%");
                                        console.log(worldEnter);
                                        c++;
                                    }
                            }
                     
 ```

 # Tecnologies used
 1. ## VS Code
 2. ## HTML
 3. ## CSS
 4. ## JavaScript
 5. ## Snipping tool
 6. ## Lucidchart 
 7. ## Git  Hub Git Bash

# Installation: 
* Game is available live at [click](https://iosg073.github.io/Project-1-Game.github.io/)

* To get local copy on your system follow following instructions.
   1. Fork and clone the repository at [click](https://github.com/iosg073/Project-1-Game.github.io.git)
   2. Load index.html file in your browser 
# Credit 

* Casey Harding
* Members of Squad 3 (Margie, Patricia and Kumar)
* [Google](Google.com) 
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

* [Stackoverflow](https://stackoverflow.com/)
* [Youtube](Youtube.com)

