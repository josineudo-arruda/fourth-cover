var lastAnswer = 0;
var questionsAlreadyUsed = [];
var typeAnswer = false;
var allBooks = [
    "ODDAF","OC","V","OSMDEH","QNEO","WEH","GE","UDNEM","AGDL","MBDG","MPDBC","OS","DFQR","AM","USPOA","ENTE","OANEO","VDDE","OCMCB","NQSCV","UMDFF","QE","AA","QE","ANM","VBSA","AEG","EAQA","APS","OHDG","TA","TASI","MQCCOL","TER","AHDA","CAS","ACEDE","MCPSN","OEP","D","CDP","ACPDV","IAC","CTDC","JN1","F","OCDV","CO","EP","FG","A","9N","AOVT","AMPDMC","HT","HP","DLCA","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","AMNJ","JDB","ARDB","1984","GMO","GQVEA","HR","ACP","E"
]

function questionAkinator() {
    var numberQuestion = Math.floor(Math.random() * 6) + 1

    switchQuestion(numberQuestion)
}
document.addEventListener("DOMContentLoaded", function() {
    questionAkinator();
});

function answer(number) { // acionado sempre q responder
    if(number == 1) {
        typeAnswer = true;
    }
    var lastAnswer = lastAnswer + number;
    var lastQuestion = parseInt(document.getElementById("button-yes").value);
    questionsAlreadyUsed.push(lastQuestion);
    if(typeAnswer) {
        calculateQuestion(lastQuestion);
    }


    var numberQuestion = Math.floor(Math.random() * 6) + 1;
    for(var i = 0; i < questionsAlreadyUsed.length; i++) {
        if(questionsAlreadyUsed[i] == numberQuestion || lastQuestion == numberQuestion ) {
            numberQuestion = Math.floor(Math.random() * 6) + 1
            i = 0
        }
    }
    switchQuestion(numberQuestion)
    typeAnswer = false;
}

function switchQuestion(number) { //colocar pergunta nova
    
    if(questionsAlreadyUsed.length == 6) {
        var akinatorSection =  "display: none";
        var setAkinator = document.getElementById("not-answered");
        setAkinator.setAttribute("style", akinatorSection);

        var akinatorSectionA =  "";
        var setAkinatorA = document.getElementById("wrong-answered");
        setAkinatorA.setAttribute("style", akinatorSectionA);
    }
    
    switch(number) {
        case 1:
            var bookQuestion = "1";
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista é homem/menino?"
            break;
        case 2:
            var bookQuestion = "2";
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista é mulher/menina?"
            break;
        case 3:
            var bookQuestion = "3";
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um romance hétero?"
            break;
        case 4:
            var bookQuestion = "4";
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um romance LGBTQIA+?"
            break;
        case 5:
            var bookQuestion = "5";
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Tem um final trágico?"
            break;
        case 6:
            var bookQuestion = "6";
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "É baseado em uma história real?"
            break;
        default:
            break;
        
    }
}

function calculateQuestion(number) {
    switch(number) {
        case '1':
            var elementsQuestion = [
                
            ]
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        newAllQuestion.push(allBooks[i]);
                    }
                }
            }
            allBooks = newAllQuestion;
            break;
        case '2':
            var elementsQuestion = [
                
            ]
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        newAllQuestion.push(allBooks[i]);
                    }
                }
            }
            allBooks = newAllQuestion;
            break;
        case '3':
            var elementsQuestion = [
                
            ]
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        newAllQuestion.push(allBooks[i]);
                    }
                }
            }
            allBooks = newAllQuestion;
            break;
        case '4':
            var elementsQuestion = [
                
            ]
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        newAllQuestion.push(allBooks[i]);
                    }
                }
            }
            allBooks = newAllQuestion;
            break;
        case '5':
            var elementsQuestion = [
                
            ]
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        newAllQuestion.push(allBooks[i]);
                    }
                }
            }
            allBooks = newAllQuestion;
            break;
        case '6':
            var elementsQuestion = [
                
            ]
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        newAllQuestion.push(allBooks[i]);
                    }
                }
            }
            allBooks = newAllQuestion;
            break;
        default:
            break;
    }
    if(allBooks.length == 1) {
        rigthQuestion(allBooks[0]);
    }
    if(allBooks.length == 0) {
        var akinatorSection =  "display: none";
        var setAkinator = document.getElementById("not-answered");
        setAkinator.setAttribute("style", akinatorSection);

        var akinatorSectionA =  "";
        var setAkinatorA = document.getElementById("wrong-answered");
        setAkinatorA.setAttribute("style", akinatorSectionA);
    }
}

function rigthQuestion(right) { 
    var akinatorSection =  "display: none";
    var setAkinator = document.getElementById("not-answered");
    setAkinator.setAttribute("style", akinatorSection);

    var akinatorSectionA =  "";
    var setAkinatorA = document.getElementById("answered");
    setAkinatorA.setAttribute("style", akinatorSectionA);
    
    switch(right) {
        case "AA":
            var bookImg =  "images/Home/home-popullar-aurora.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Aurora ascende"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("title");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        default:
            break;
    }

}
