var lastAnswer = 0;
var questionsAlreadyUsed = [];
var typeAnswer = false;
var typeAnswerWrong = false;
var finalAnswer = false;




var allBooks = [
    "ODDAF","CS","ODMNF","OC","V","OSMDEH","QNEO","QEH","GE","UDNEM","AGDL","MBDG","MPDBC","OS","DFQR","AM","USPOA","ENTE","OANEO","VDDE","OCMCB","NQSCV","UMDFF","QE","AA","QE","ANM","VBSA","AEG","EAQA","APS","OHDG","TA","TASI","MQCCOL","TER","AHDA","CAS","ACEDE","MCPSN","OEP","D","CDP","ACPDV","IAC","CTDC","JN1","F","OCDV","CO","EP","FG","A","9N","AOVT","AMPDMC","HT","HP","DLCA","AMNJ","JDB","ARDB","1984","GMO","GQVEA","HR","ACP","E"
]

function questionAkinator() {
    var numberQuestion = Math.floor(Math.random() * 31) + 1

    var bookImg =  "images/shuffle/surprise.gif";
    var setImg = document.getElementById("akinator-image");
    setImg.setAttribute("src", bookImg);

    switchQuestion(numberQuestion)
}
document.addEventListener("DOMContentLoaded", function() {
    questionAkinator();
});

function answer(number) { // acionado sempre q responder
    if(finalAnswer) {
        if(number == 1) {
            typeAnswer = true;
        } else if(number == -1) {
            typeAnswerWrong = true
        } else if(number == 0) {
            typeAnswerWrong = false
            typeAnswer = false;
        }
        var lastQuestion = document.getElementById("button-yes").value;

        if(typeAnswer) {
            calculateFinalQuestion(lastQuestion);
        } else if(typeAnswerWrong) {
            calculateFinalWrongQuestion(lastQuestion)
        }
        
    } else {
        if(number == 1) {
            typeAnswer = true;
        }/* else if(number == -1) {
            typeAnswerWrong = true
        } else if(number == 0) {
            typeAnswerWrong = false
            typeAnswer = false;
        }*/
        var lastAnswer = lastAnswer + number;
        var lastQuestion = parseInt(document.getElementById("button-yes").value);
        questionsAlreadyUsed.push(lastQuestion);
        if(typeAnswer) {
            calculateQuestion(lastQuestion);
        } else if(typeAnswerWrong) {
            calculateWrongQuestion(lastQuestion);
        }
    }

    
    if(4 > allBooks.length) {
        finalAnswer = true
        var number1 =  Math.floor(Math.random() * allBooks.length);
        switchFinalQuestion(number1);
    }
    if(finalAnswer == false) {
        var numberQuestion = Math.floor(Math.random() * 31) + 1;
        for(var i = 0; i < questionsAlreadyUsed.length; i++) {
            if(questionsAlreadyUsed[i] == numberQuestion || lastQuestion == numberQuestion ) {
                numberQuestion = Math.floor(Math.random() * 31) + 1
                i = 0
            }
        }
        switchQuestion(numberQuestion)
    }


    if(geniusInte )

    typeAnswer = false;
    typeAnswerWrong == false
}

function switchQuestion(number) { //colocar pergunta nova
    
    if(questionsAlreadyUsed.length == 31 && allBooks.length > 0) {
        var akinatorSection =  "display: none";
        var setAkinator = document.getElementById("not-answered");
        setAkinator.setAttribute("style", akinatorSection);

        var akinatorSectionA =  "";
        var setAkinatorA = document.getElementById("wrong-answered");
        setAkinatorA.setAttribute("style", akinatorSectionA);
    }
    
    switch(number) {
        case 1:
            var bookQuestion = 1;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista é homem/menino?"
            break;
        case 2:
            var bookQuestion = 2;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista é mulher/menina?"
            break;
        case 3:
            var bookQuestion = 3;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um romance hétero com o protagonista(a)?"
            break;
        case 4:
            var bookQuestion = 4;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um romance LGBTQIA+ o protagonista(a)?"
            break;
        case 5:
            var bookQuestion = 5;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Tem um final trágico?"
            break;
        case 6:
            var bookQuestion = 6;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "É baseado em uma história real?"
            break;
        case 7:
            var bookQuestion = 7;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história se passa sobre um grupo de amigos"
            break;
        case 8:
            var bookQuestion = 8;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um assassinato?"
            break;
        case 9:
            var bookQuestion = 9;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história envolve contos?"
            break;
        case 10:
            var bookQuestion = 10;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história tem uma pitadinha de suspense?"
            break;
        case 11:
            var bookQuestion = 11;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve sequência?"
            break;
        case 12:
            var bookQuestion = 12;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história aborda um mundo fictício?"
            break;
        case 13:
            var bookQuestion = 13;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista é adolescente/jovem adulto?"
            break;
        case 14:
            var bookQuestion = 14;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista é adulto?"
            break;
        case 15:
            var bookQuestion = 15;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história está relacionada a um período de guerra?"
            break;
        case 16:
            var bookQuestion = 16;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história tem drama como um genêro?"
            break;
        case 17:
            var bookQuestion = 17;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro é nacional?"
            break;
        case 18:
            var bookQuestion = 18;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história foi adaptada para o cinema ou série?"
            break;
        case 19:
            var bookQuestion = 19;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama tem um final feliz?"
            break;
        case 20:
            var bookQuestion = 20;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro contém ilustrações?"
            break;
        case 21:
            var bookQuestion = 21;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista é distante de sua família?"
            break;
        case 22:
            var bookQuestion = 22;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história foi escrita por um escritor renomado?"
            break;
        case 23:
            var bookQuestion = 23;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista da história é considerado um 'herói'?"
            break;
        case 24:
            var bookQuestion = 24;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Relata um mundo o sociedade onde temos algum figura que seja ditadora ou até vilão?"
            break;
        case 25:
            var bookQuestion = 25;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama trata de temas importantes? Como machismo, homofobia, porblemas de auto-estima, depressão, etc."
            break;
        case 26:
            var bookQuestion = 26;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "É uma história de superação?"
            break;
        case 27:
            var bookQuestion = 27;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história é depressiva de tão triste?"
            break;
        case 28:
            var bookQuestion = 28;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história muda recorrentemente de pespectiva?"
            break;
        case 29:
            var bookQuestion = 29;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história não é recomendada para crianças?"
            break;
        case 30:
            var bookQuestion = 30;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista conta com uma companhia durante a história?"
            break;
        case 31:
            var bookQuestion = 31;
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O protagonista segue história sozinho?"
            break;
        default:
            break;
        
    }
}

function calculateQuestion(number) {
    switch(number) {
        case 1:
            var elementsQuestion = [
                "OC","QEH","MBDG","MPDBC","ENTE","UMDFF","NQSCV","QE","ANM","VBSA","APS","OHDG","TER","CAS","CO","HT","HP","MCPSN","JN1","OCDV","1984","E"
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
            questionsAlreadyUsed.push(2);
            break;
        case 2:
            var elementsQuestion = [
                "V","OSMDEH","QNEO","AGDL","OS","AM","USPOA","OANEO","AEG","EAQA","TASI","MQCCOL","AHDA","ACEDE","EP","FG","A","9N","AOVT","AMPDMC","OEP","ACPDV","CDP","F","CTDC","ODDAF","AMNJ","JDB","GMO","GQVEA","HR","ACP"
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
            questionsAlreadyUsed.push(1);
            break;
        case 3:
            var elementsQuestion = [
                "OC","V","UDNEM","MBDG","MPDBC","AM","USPOA","OANEO","VDDE","AEG","EAQA","TASI","TER","AHDA","EP","FG","A","9N","AOVT","AMPDMC","OEP","ACPDV","CTDC","F","HP","DLCA","HR"
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
            questionsAlreadyUsed.push(4);
            break;
        case 4:
            var elementsQuestion = [
                "OSMDEH","ENTE","NQSCV","UMDFF","QE","VBSA","CAS","CO","HT","MCPSN","GMO","GQVEA","OANEO"
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
            questionsAlreadyUsed.push(3);
            break;
        case 5:
            var elementsQuestion = [
                "OC","V","OSMDEH","UDNEM","MBDG","EAQA","TASI","APS","OHDG","9N","ODDAF","MCPSN","ACPDV"
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
            questionsAlreadyUsed.push(19);
            break;
        case 6:
            var elementsQuestion = [
                "OS","OCMCB","ANM","TA","ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","HR","GMO"
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
            questionsAlreadyUsed.push(12);
            break;
        case 7:
            var elementsQuestion = [
                "UDNEM","USPOA","ENTE","OANEO","UMDFF","QE","AA","VBSA","AEG","OHDG","AHDA","CAS","ACEDE","CO","FG","A","IAC","HP","HT","DLCA"
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
        case 8:
            var elementsQuestion = [
                "OC","V","GE","UDNEM","AGDL","APS","OHDG","JDB","AMNJ"
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
        case 9:
            var elementsQuestion = [
                "MPDBC","OS","OCMCB","MQCCOL","GMO"
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
        case 10:
            var elementsQuestion = [
                "OC","V","QNEO","GE","UDNEM","AGDL","APS","OHDG","AMNJ","JDB","OCDV","IAC","CDP"
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
        case 11:
            var elementsQuestion = [
                "UDNEM","AA","AEG","EAQA","CO","HP","FG","OCDV","IAC","HT","F","JN1","CDP","OEP"
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
        case 12:
            var elementsQuestion = [
                "OC","V","OSMDEH","QNEO","QEH","GE","UDNEM","AGDL","MBDG","MPDBC","DFQR","AM","USPOA","ENTE","OANEO","VDDE","NQSCV","UMDFF","QE","AA","ANM","VBSA","AEG","EAQA","APS","OHDG","MQCCOL","TER","AHDA","CAS","ACEDE","CO","EP","FG","A","9N","AOVT","AMPDMC","HT","HP","1984","ARDB","D","MCPSN","OEP","D","ACPDV","IAC","CTDC","JN1","F","OCDV"
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
            questionsAlreadyUsed.push(6);
            break;
        case 13:
            var elementsQuestion = [
                "QEH","UDNEM","MBDG","USPOA","ENTE","OANEO","VDDE","UMDFF","VBSA","AHDA","CAS","ACEDE","CO","EP","FG","ODDAF","HT","HP","E","GQVEA", "GMO", "JDB","DLCA","IAC"
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
            questionsAlreadyUsed.push(14);
            break;
        case 14:
            var elementsQuestion = [
                "OC","V","OSMDEH","QNEO","GE","AGDL","MPDBC","OS","AM","OCMCB","NQSCV","QE","AA","AEG","EAQA","APS","OHDG","TA","MQCCOL","TER","A","9N","AOVT","AMPDMC","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","ACP","HR","AMNJ","MCPSN","OEP","D","ACPDV","CTDC","JN1","F","OCDV"
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
            questionsAlreadyUsed.push(13);
            break;
        case 15:
            var elementsQuestion = [
                "ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","1984","ARDB"
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
        case 16:
            var elementsQuestion = [
                "OSMDEH","QEH","MBDG","MPDBC","OS","DFQR","USPOA","VDDE","OCMCB","EAQA","TA","MQCCOL","ACEDE","9N","AMPDMC","ODDAF","E","ACP","HR","GQVEA","GMO"
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
        case 17:
            var elementsQuestion = [
                "MPDBC","OS","DFQR","AM","USPOA","ENTE","OANEO","VDDE","OCMCB","NQSCV","UMDFF","QE","TA","TER",
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
        case 18:
            var elementsQuestion = [
                "OSMDEH","QEH","GE","UDNEM","VBSA","CAS","ACEDE","HT","HP","AMNJ","MCPSN","OEP","D","ACPDV","CTDC","JN1","F","OCDV","ARDB"
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
        case 19:
            var elementsQuestion = [
                "USPOA","OANEO","VDDE","UMDFF","TASI","AMPDMC","AOVT","AHDA","TER","CAS","CO","FG","A","E","CTDC"
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
            questionsAlreadyUsed.push(5);
            break;
        case 20:
            var elementsQuestion = [
                "USPOA","ENTE","NQSCV","UMDFF","AA","VBSA","AHDA","CO","EP","FG","HP","HT","GMO"
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
        case 21:
            var elementsQuestion = [
                "OC","USPOA","AEG","APS","UMDFF","CO","HP"
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
        case 22:
            var elementsQuestion = [
                "MPDBC","OCMCB","EAQA","TASI","AMPDMC","AOVT","9N","CO","EP","FG","A","HP","HT"
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
        case 23:
            var elementsQuestion = [
                "QEH","AA","CO","HP"
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
        case 24:
            var elementsQuestion = [
                "ANM","CO","HP","ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C"
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
        case 25:
            var elementsQuestion = [
                "OSMDEH","QEH","GE","OS","USPOA","EAQA","TA","MQCCOL","CAS","ACEDE","ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","HT","E","ACP","HR","GQVEA","GMO"
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
        case 26:
            var elementsQuestion = [
                "QEH","DFQR","AM","USPOA","OANEO","NQSCV","QE","AEG","ACEDE","EP","AOVT","AMPDMC","GQVEA","GMO","E","ACP"
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
        case 27:
            var elementsQuestion = [
                "QEH","MBDG","EAQA","TASI","EP","DFQR","ACEDE","9N","ODDAF","MCPSN","CDP","ACPDV"
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
        case 28:
            var elementsQuestion = [
                "OC","OSMDEH","GE","UDNEM","MPDBC","OS","DFQR","VDDE","NQSCV","AA","ANM","APS","OHDG","TA","MQCCOL","TER","FG","A","ODDAF","1984","ARDB",
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
        case 29:
            var elementsQuestion = [
                "OC","V","QEH","GE","AGDL","VBSA","EAQA","APS","OHDG","TER","CTDC"
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
        case 30:
            var elementsQuestion = [
                "V","OSMDEH","QNEO","QEH","UDNEM","MBDG","USPOA","ENTE","OANEO","VDDE","NQSCV","UMDFF","AA","VBSA","AEG","EAQA","TER","AHDA","ACEDE","CO","EP","AOVT","AMPDMC","HR","MCPSN","OEP","D","ACPDV","IAC","CTDC","JN1","F","OCDV"
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
        case 31:
            var elementsQuestion = [
                "OC","GE","AGDL","AM","QE","APS","OHDG","MQCCOL","CAS","FG","A","9N","ODDAF","E","ACP","GQVEA","GMO"
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
        alert(allBooks.length)
        var akinatorSection =  "display: none";
        var setAkinator = document.getElementById("not-answered");
        setAkinator.setAttribute("style", akinatorSection);

        var akinatorSectionA =  "";
        var setAkinatorA = document.getElementById("wrong-answered");
        setAkinatorA.setAttribute("style", akinatorSectionA);
    }
}

function calculateWrongQuestion(number) {
    switch(number) {
        case 1:
            var elementsQuestion = [
                "OC","QEH","MBDG","MPDBC","ENTE","UMDFF","NQSCV","QE","ANM","VBSA","APS","OHDG","TER","CAS","CO","HT","HP","MCPSN","JN1","OCDV","1984","E"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(2);
            break;
        case 2:
            var elementsQuestion = [
                "V","OSMDEH","QNEO","AGDL","OS","AM","USPOA","OANEO","AEG","EAQA","TASI","MQCCOL","AHDA","ACEDE","EP","FG","A","9N","AOVT","AMPDMC","OEP","ACPDV","CDP","F","CTDC","ODDAF","AMNJ","JDB","GMO","GQVEA","HR","ACP"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(1);
            break;
        case 3:
            var elementsQuestion = [
                "OC","V","UDNEM","MBDG","MPDBC","AM","USPOA","OANEO","VDDE","AEG","EAQA","TASI","TER","AHDA","EP","FG","A","9N","AOVT","AMPDMC","OEP","ACPDV","CTDC","F","HP","DLCA","HR"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(4);
            break;
        case 4:
            var elementsQuestion = [
                "OSMDEH","ENTE","NQSCV","UMDFF","QE","VBSA","CAS","CO","HT","MCPSN","GMO","GQVEA","OANEO"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(3);
            break;
        case 5:
            var elementsQuestion = [
                "OC","V","OSMDEH","UDNEM","MBDG","EAQA","TASI","APS","OHDG","9N","ODDAF","MCPSN","ACPDV"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(19);
            break;
        case 6:
            var elementsQuestion = [
                "OS","OCMCB","ANM","TA","ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","HR","GMO"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(12);
            break;
        case 7:
            var elementsQuestion = [
                "UDNEM","USPOA","ENTE","OANEO","UMDFF","QE","AA","VBSA","AEG","OHDG","AHDA","CAS","ACEDE","CO","FG","A","IAC","HP","HT","DLCA"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 8:
            var elementsQuestion = [
                "OC","V","GE","UDNEM","AGDL","APS","OHDG","JDB","AMNJ"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 9:
            var elementsQuestion = [
                "MPDBC","OS","OCMCB","MQCCOL","GMO"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 10:
            var elementsQuestion = [
                "OC","V","QNEO","GE","UDNEM","AGDL","APS","OHDG","AMNJ","JDB","OCDV","IAC","CDP"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 11:
            var elementsQuestion = [
                "UDNEM","AA","AEG","EAQA","CO","HP","FG","OCDV","IAC","HT","F","JN1","CDP","OEP"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 12:
            var elementsQuestion = [
                "OC","V","OSMDEH","QNEO","QEH","GE","UDNEM","AGDL","MBDG","MPDBC","DFQR","AM","USPOA","ENTE","OANEO","VDDE","NQSCV","UMDFF","QE","AA","ANM","VBSA","AEG","EAQA","APS","OHDG","MQCCOL","TER","AHDA","CAS","ACEDE","CO","EP","FG","A","9N","AOVT","AMPDMC","HT","HP","1984","ARDB","D","MCPSN","OEP","D","ACPDV","IAC","CTDC","JN1","F","OCDV"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(6);
            break;
        case 13:
            var elementsQuestion = [
                "QEH","UDNEM","MBDG","USPOA","ENTE","OANEO","VDDE","UMDFF","VBSA","AHDA","CAS","ACEDE","CO","EP","FG","ODDAF","HT","HP","E","GQVEA", "GMO", "JDB","DLCA","IAC"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(14);
            break;
        case 14:
            var elementsQuestion = [
                "OC","V","OSMDEH","QNEO","GE","AGDL","MPDBC","OS","AM","OCMCB","NQSCV","QE","AA","AEG","EAQA","APS","OHDG","TA","MQCCOL","TER","A","9N","AOVT","AMPDMC","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","ACP","HR","AMNJ","MCPSN","OEP","D","ACPDV","CTDC","JN1","F","OCDV"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(13);
            break;
        case 15:
            var elementsQuestion = [
                "ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","1984","ARDB"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 16:
            var elementsQuestion = [
                "OSMDEH","QEH","MBDG","MPDBC","OS","DFQR","USPOA","VDDE","OCMCB","EAQA","TA","MQCCOL","ACEDE","9N","AMPDMC","ODDAF","E","ACP","HR","GQVEA","GMO"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 17:
            var elementsQuestion = [
                "MPDBC","OS","DFQR","AM","USPOA","ENTE","OANEO","VDDE","OCMCB","NQSCV","UMDFF","QE","TA","TER",
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 18:
            var elementsQuestion = [
                "OSMDEH","QEH","GE","UDNEM","VBSA","CAS","ACEDE","HT","HP","AMNJ","MCPSN","OEP","D","ACPDV","CTDC","JN1","F","OCDV","ARDB"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 19:
            var elementsQuestion = [
                "USPOA","OANEO","VDDE","UMDFF","TASI","AMPDMC","AOVT","AHDA","TER","CAS","CO","FG","A","E","CTDC"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            questionsAlreadyUsed.push(5);
            break;
        case 20:
            var elementsQuestion = [
                "USPOA","ENTE","NQSCV","UMDFF","AA","VBSA","AHDA","CO","EP","FG","HP","HT","GMO"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 21:
            var elementsQuestion = [
                "OC","USPOA","AEG","APS","UMDFF","CO","HP"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 22:
            var elementsQuestion = [
                "MPDBC","OCMCB","EAQA","TASI","AMPDMC","AOVT","9N","CO","EP","FG","A","HP","HT"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 23:
            var elementsQuestion = [
                "QEH","AA","CO","HP"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 24:
            var elementsQuestion = [
                "ANM","CO","HP","ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 25:
            var elementsQuestion = [
                "OSMDEH","QEH","GE","OS","USPOA","EAQA","TA","MQCCOL","CAS","ACEDE","ODDAF","OUDDH","VDT","AADG","ASGM","GEP","GS","GOHESL","AGNTRDM","C","HT","E","ACP","HR","GQVEA","GMO"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 26:
            var elementsQuestion = [
                "QEH","DFQR","AM","USPOA","OANEO","NQSCV","QE","AEG","ACEDE","EP","AOVT","AMPDMC","GQVEA","GMO","E","ACP"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
        case 27:
            var elementsQuestion = [
                "QEH","MBDG","EAQA","TASI","EP","DFQR","ACEDE","9N","ODDAF","MCPSN","CDP","ACPDV"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 28:
            var elementsQuestion = [
                "OC","OSMDEH","GE","UDNEM","MPDBC","OS","DFQR","VDDE","NQSCV","AA","ANM","APS","OHDG","TA","MQCCOL","TER","FG","A","ODDAF","1984","ARDB",
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 29:
            var elementsQuestion = [
                "OC","V","QEH","GE","AGDL","VBSA","EAQA","APS","OHDG","TER","CTDC"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 30:
            var elementsQuestion = [
                "V","OSMDEH","QNEO","QEH","UDNEM","MBDG","USPOA","ENTE","OANEO","VDDE","NQSCV","UMDFF","AA","VBSA","AEG","EAQA","TER","AHDA","ACEDE","CO","EP","AOVT","AMPDMC","HR","MCPSN","OEP","D","ACPDV","IAC","CTDC","JN1","F","OCDV"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        case 31:
            var elementsQuestion = [
                "OC","GE","AGDL","AM","QE","APS","OHDG","MQCCOL","CAS","FG","A","9N","ODDAF","E","ACP","GQVEA","GMO"
            ]
            for(var i = 0; i < allBooks.length; i++) {
                for(var j = 0; j < elementsQuestion.length; j++) {
                    if(elementsQuestion[j] == allBooks[i]) {
                        allBooks.shift(elementsQuestion[j]);
                    } 
                }
            }
            break;
        default:
            break;
    }
    if(allBooks.length == 1) {
        rigthQuestion(allBooks[0]);
    }
    if(allBooks.length == 0) {
        alert(allBooks.length)
        var akinatorSection =  "display: none";
        var setAkinator = document.getElementById("not-answered");
        setAkinator.setAttribute("style", akinatorSection);

        var akinatorSectionA =  "";
        var setAkinatorA = document.getElementById("wrong-answered");
        setAkinatorA.setAttribute("style", akinatorSectionA);
    }
}


function switchFinalQuestion(number) {
    var book =  allBooks[number];

    switch(book) {
        case "ODDAF":
            var bookQuestion = 'ODDAF';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve a autobiografia de uma garota judia?"
            break;
        case "ODMNF":
            var bookQuestion = 'ODMNF';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Um romanca lgbt entre dois garotos que estão prestes a morrer?"
            break;
        case "CS":
            var bookQuestion = 'CS';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Um conto de terror que envolve a presença de um metamorfo que se alimenta de terror e tristeza?"
            break;
        case "OC":
            var bookQuestion = 'OC';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve a história entre o sequestrador e uma vítima?"
            break;
        case "V":
            var bookQuestion = 'V';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve uma escritora qeu se envolve na vida de um casal?"
            break;
        case "OSMDEH":
            var bookQuestion = 'OSMDEH';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve o conto da história de vida de uma celebridade e todas polêmicas já envolvidas?"
            break;
        case "QNEO":
            var bookQuestion = 'QNEO';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre um caso misterioso de vizinhos desaparecendo?"
            break;
        case "QEH":
            var bookQuestion = 'QEH';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um protagonista que se vê enroscado em uma mentira?"
            break;
        case "GE":
            var bookQuestion = 'GE';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve o desaparecimento de uma mulher problemática?"
            break;
        case "UDNEM":
            var bookQuestion = 'UDNEM';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Um dos 'amigos' aparece morto, e agora os envolvidos tem que descobrir o culpado?"
            break;
        case "AGDL":
            var bookQuestion = 'AGDL';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história segue sobre a investigação de uma repoter sobre um assassinato?"
            break;
        case "MBDG":
            var bookQuestion = 'MBDG';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre um reecontro de um romance de infância?"
            break;
        case "MPDBC":
            var bookQuestion = 'MPDBC';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história envolve contos sobre a vida de homem durante seu enterro?"
            break;
        case "OS":
            var bookQuestion = 'OS';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história envolve contos sobre o sertão?"
            break;
        case "DFQR":
            var bookQuestion = 'DFQR';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro conta sobre a história de personagesn fictícios na forma de contos? Temas como memória, desejo e conflito familiar"
            break;
        case "AM":
            var bookQuestion = 'AM';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história envolve a história de uma jovem que vem para seu casamento de sua terra natal (Protugal)?"
            break;
        case "USPOA":
            var bookQuestion = 'USPOA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história envolve um romance entre um dona de loja de roupa e um cantor?"
            break;
        case "ENTE":
            var bookQuestion = 'ENTE';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história envolve um romance lgbt entre dois jovens que se conheceram na inauguração de uma balada: Titanic?"
            break;
        case "OANEO":
            var bookQuestion = 'OANEO';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um romance lésbico entra duas meninas que se encontram pelo mensmo motivo, ambas tem conexão com o mesmo menino?"
            break;
        case "VDDE":
            var bookQuestion = 'VDDE';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta um período de descoberta na vida da protagonista? Até então presa em uma sequência de acontecimentos envolvendo sua vida amorosa."
            break;
        case "OCMCB":
            var bookQuestion = 'OCMCB';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro conta com os melhores contos brasileiros? Escolhidos a dedo pelo autor."
            break;
        case "NQSCV":
            var bookQuestion = 'NQSCV';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro envolve um romance entre dois garotos de queres distintos?"
            break;
        case "UMDFF":
            var bookQuestion = 'UMDFF';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro envolve um romance entre um escritor de uma história de piratas gays?"
            break;
        case "QE":
            var bookQuestion = 'QE';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre a vida de um garoto que tem que enfretar seu ex se tornando uma subcelebridade?"
            break;
        case "AA":
            var bookQuestion = 'AA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre uma equipe peculiar de passageiros em uma espaçonave?"
            break;
        case "ANM":
            var bookQuestion = 'ANM';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve um romance distópico em uma sociedade onde a literatura, a música e o cinema só têm a função de solidificar a alienação?"
            break;
        case "VBSA":
            var bookQuestion = 'VBSA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama um romance entre o filho da presidenta do EUA e o princípe da coroa britânica?"
            break;
        case "AEG":
            var bookQuestion = 'AEG';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama um romance que se passa na Itália?"
            break;
        case "EAQA":
            var bookQuestion = 'EAQA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta dificuldades que um relacionamento pode passar?"
            break;
        case "APS":
            var bookQuestion = 'APS';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre um psicologo tentando desvendar os motivos de uma esposa ter assassinado seu marido?"
            break;
        case "OHDG":
            var bookQuestion = 'OHDG';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre uma investigação armadora sobre bilhetes e mortes de um grupo de amigos?"
            break;
        case "TA":
            var bookQuestion = 'TA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre a história de duas irmãs baianas?"
            break;
        case "TASI":
            var bookQuestion = 'TASI';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre um encontro causado por duas traições?"
            break;
        case "MQCCOL":
            var bookQuestion = 'MQCCOL';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve contos sobre mulheres e lobos, metáforas?"
            break;
        case "TER":
            var bookQuestion = 'TER';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta a história de uam garota de programa e um casal com problemas de ciúmes?"
            break;
        case "AHDA":
            var bookQuestion = 'AHDA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro envolve o romance entre uma cientista seu rival?"
            break;
        case "CAS":
            var bookQuestion = 'CAS';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O livro envolve o encontro de dois garotos por trocas de emails?"
            break;
        case "ACEDE":
            var bookQuestion = 'ACEDE';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta o encontro de dois adolescentes com doenças terminais em um encontro de jovens assim?"
            break;
        case "CO":
            var bookQuestion = 'CO';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história de um jovem orfão de grande poder (explosivo), incluído em uma profecia?"
            break;
        case "HT":
            var bookQuestion = 'HT';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta com um romance entre dois adolescentes no ensino médio?"
            break;
        case "HP":
            var bookQuestion = 'HP';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história de um jovem bruxo com uma marca de nascência na testa?"
            break;
        case "EP":
            var bookQuestion = 'EP';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história de um romance entre dois adolescentes que se encontram diariamente na ida e volta da escola?"
            break;
        case "FG":
            var bookQuestion = 'FG';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre uma menina que tem uma fanfic famosa sobre a série Carry on?"
            break;
        case "A":
            var bookQuestion = 'A';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama envolve a troca de emails entre duas amigas em uma empresa?"
            break;
        case "9N":
            var bookQuestion = '9N';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "a protagonista do livro sofreu por um incêndio, que a deixou com cicatrizes severas no rosto?"
            break;
        case "AOVT":
            var bookQuestion = 'AOVT';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta um romacne entre uma menina forçada ficar na casa de seu 'pai' até ir para faculdade e o seu vizinho?"
            break;
        case "AMPDMC":
            var bookQuestion = 'AMPDMC';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história envolve uma mulher cheia de gaurdar segredos da sua família, sendo o principal motivo para querer desaparecer do mapa?"
            break;
        case "MCPSN":
            var bookQuestion = 'MCPSN';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Um romance lgbt entre um turista e o filho de uma família conhecida da Itália?"
            break;
        case "OEP":
            var bookQuestion = 'OEP';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta de uma família nobre, porém sem dinheiro que está tentando casar todas suas filhas com pretendentes com boa posição social?"
            break;
        case "D":
            var bookQuestion = 'D';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre a história de um jovem que após uma visita misteriosa, é obrigado a deixar seu planeta para sobreviver em um ambiente árido?"
            break;
        case "CDP":
            var bookQuestion = 'CDP';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre um mundo em estado de calamidade, onde para sobreviver é necessário sobrir seus olhos?"
            break;
        case "ACPDV":
            var bookQuestion = 'ACPDV';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre o romance entre uma jovem que tem cancêr no pulmão e um novo misterioso garoto em um hospital?"
            break;
        case "IAC":
            var bookQuestion = 'IAC';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre um palhaço assassino?"
            break;
        case "CTDC":
            var bookQuestion = 'CTDC';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Um romance contraditório entre um rico e uma mulher pacata?"
            break;
        case "JN1":
            var bookQuestion = 'JN1';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "História de um mundo fictício, abordando como seríamos no futuro (a como a internet evoluiu)?"
            break;
        case "F":
            var bookQuestion = 'F';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre a vida de uma garota que é responsabilizada pela misteriosa morte de seu namorado e acaba sendo mandada para um reformatório?"
            break;
        case "OCDV":
            var bookQuestion = 'OCDV';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre um tesouro atrás do quadro de Leonardo da Vinci?"
            break;
        case "DLCA":
            var bookQuestion = 'DLCA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A trama conta sobre um romance entre dois patinadores?"
            break;
        case "AMNJ":
            var bookQuestion = 'AMNJ';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "Um suspense sobre uma mulher que constantemente observa a casa de seu vizinho?"
            break;
        case "JDB":
            var bookQuestion = 'JDB';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre uma série de assassinatos envolvendo meninas sobre a mesma mansão?"
            break;
        case "ARDB":
            var bookQuestion = 'ARDB';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre o período da guerra fria através de bichos?"
            break;
        case "1984":
            var bookQuestion = '1984';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta um governo autoritário que observa sua população?"
            break;
        case "GMO":
            var bookQuestion = 'GMO';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A envolve o conto sobre a vida de mulheres tratando de temas sobre identidade, raça e sexualidade?"
            break;
        case "GQVEA":
            var bookQuestion = 'GQVEA';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A história conta sobre a vida de um jovem lgbt em Rio de Janeiro na década e 80's?"
            break;
        case "HR":
            var bookQuestion = 'HR';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A protagonista é uma adolescente Kambili que tem um pai com religiosiade extremamente 'branca'?"
            break;
        case "ACP":
            var bookQuestion = 'ACP';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "A protagonista descreve sua vida cheia de traumas através de cartas?"
            break;
        case "E":
            var bookQuestion = 'E';
            var setLink = document.getElementById("button-yes");
            setLink.setAttribute("value", bookQuestion);

            document.getElementById("shuffle-question-info").innerHTML = "O drama conta sobre as lutas diárias enfrentadas por uma criança com uma condição especial?"
            break;
        default:
            break;
    }
}

function calculateFinalQuestion(name) {
    switch(name) {
        case 'OC':
            var newAllQuestion = []
            newAllQuestion.push("OC")
            allBooks = newAllQuestion;
            break;
        case 'CS':
            var newAllQuestion = []
            newAllQuestion.push("CS")
            allBooks = newAllQuestion;
            break;
        case 'ODDAF':
            var newAllQuestion = []
            newAllQuestion.push("ODDAF")
            allBooks = newAllQuestion;
            break;
        case 'ODMNF':
            var newAllQuestion = []
            newAllQuestion.push("ODMNF")
            allBooks = newAllQuestion;
            break;
        case 'V':
            var newAllQuestion = []
            newAllQuestion.push("V")
            allBooks = newAllQuestion;
            break;
        case 'OSMDEH':
            var newAllQuestion = []
            newAllQuestion.push("VOSMDEH")
            allBooks = newAllQuestion;
            break;
        case 'QNEO':
            var newAllQuestion = []
            newAllQuestion.push("QNEO")
            allBooks = newAllQuestion;
            break;
        case 'QEH':
            var newAllQuestion = []
            newAllQuestion.push("QEH")
            allBooks = newAllQuestion;
            break;
        case 'GE':
            var newAllQuestion = []
            newAllQuestion.push("GE")
            allBooks = newAllQuestion;
            break;
        case 'UDNEM':
            var newAllQuestion = []
            newAllQuestion.push("UDNEM")
            allBooks = newAllQuestion;
            break;
        case 'AGDL':
            var newAllQuestion = []
            newAllQuestion.push("AGDL")
            allBooks = newAllQuestion;
            break;
        case 'MBDG':
            var newAllQuestion = []
            newAllQuestion.push("MBDG")
            allBooks = newAllQuestion;
            break;
        case 'MPDBC':
            var newAllQuestion = []
            newAllQuestion.push("MPDBC")
            allBooks = newAllQuestion;
            break;
        case 'OS':
            var newAllQuestion = []
            newAllQuestion.push("OS")
            allBooks = newAllQuestion;
            break;
        case 'DFQR':
            var newAllQuestion = []
            newAllQuestion.push("DFQR")
            allBooks = newAllQuestion;
            break;
        case 'AM':
            var newAllQuestion = []
            newAllQuestion.push("AM")
            allBooks = newAllQuestion;
            break;
        case 'USPOA':
            var newAllQuestion = []
            newAllQuestion.push("USPOA")
            allBooks = newAllQuestion;
            break;
        case 'ENTE':
            var newAllQuestion = []
            newAllQuestion.push("ENTE")
            allBooks = newAllQuestion;
            break;
        case 'OANEO':
            var newAllQuestion = []
            newAllQuestion.push("OANEO")
            allBooks = newAllQuestion;
            break;
        case 'VDDE':
            var newAllQuestion = []
            newAllQuestion.push("VDDE")
            allBooks = newAllQuestion;
            break;
        case 'OCMCB':
            var newAllQuestion = []
            newAllQuestion.push("OCMCB")
            allBooks = newAllQuestion;
            break;
        case 'NQSCV':
            var newAllQuestion = []
            newAllQuestion.push("NQSCV")
            allBooks = newAllQuestion;
            break;
        case 'UMDFF':
            var newAllQuestion = []
            newAllQuestion.push("UMDFF")
            allBooks = newAllQuestion;
            break;
        case 'QE':
            var newAllQuestion = []
            newAllQuestion.push("QE")
            allBooks = newAllQuestion;
            break;
        case 'AA':
            var newAllQuestion = []
            newAllQuestion.push("AA")
            allBooks = newAllQuestion;
            break;
        case 'ANM':
            var newAllQuestion = []
            newAllQuestion.push("ANM")
            allBooks = newAllQuestion;
            break;
        case 'VBSA':
            var newAllQuestion = []
            newAllQuestion.push("VBSA")
            allBooks = newAllQuestion;
            break;
        case 'AEG':
            var newAllQuestion = []
            newAllQuestion.push("AEG")
            allBooks = newAllQuestion;
            break;
        case 'EAQA':
            var newAllQuestion = []
            newAllQuestion.push("EAQA")
            allBooks = newAllQuestion;
            break;
        case 'APS':
            var newAllQuestion = []
            newAllQuestion.push("APS")
            allBooks = newAllQuestion;
            break;
        case 'OHDG':
            var newAllQuestion = []
            newAllQuestion.push("OHDG")
            allBooks = newAllQuestion;
            break;
        case 'TA':
            var newAllQuestion = []
            newAllQuestion.push("TA")
            allBooks = newAllQuestion;
            break;
        case 'TASI':
            var newAllQuestion = []
            newAllQuestion.push("TASI")
            allBooks = newAllQuestion;
            break;
        case 'MQCCOL':
            var newAllQuestion = []
            newAllQuestion.push("MQCCOL")
            allBooks = newAllQuestion;
            break;
        case 'TER':
            var newAllQuestion = []
            newAllQuestion.push("TER")
            allBooks = newAllQuestion;
            break;
        case 'AHDA':
            var newAllQuestion = []
            newAllQuestion.push("AHDA")
            allBooks = newAllQuestion;
            break;
        case 'CAS':
            var newAllQuestion = []
            newAllQuestion.push("CAS")
            allBooks = newAllQuestion;
            break;
        case 'ACEDE':
            var newAllQuestion = []
            newAllQuestion.push("ACEDE")
            allBooks = newAllQuestion;
            break;
        case 'CO':
            var newAllQuestion = []
            newAllQuestion.push("CO")
            allBooks = newAllQuestion;
            break;
        case 'HT':
            var newAllQuestion = []
            newAllQuestion.push("HT")
            allBooks = newAllQuestion;
            break;
        case 'HP':
            var newAllQuestion = []
            newAllQuestion.push("HP")
            allBooks = newAllQuestion;
            break;
        case 'EP':
            var newAllQuestion = []
            newAllQuestion.push("EP")
            allBooks = newAllQuestion;
            break;
        case 'FG':
            var newAllQuestion = []
            newAllQuestion.push("FG")
            allBooks = newAllQuestion;
            break;
        case 'A':
            var newAllQuestion = []
            newAllQuestion.push("A")
            allBooks = newAllQuestion;
            break;
        case '9N':
            var newAllQuestion = []
            newAllQuestion.push("9N")
            allBooks = newAllQuestion;
            break;
        case 'AOVT':
            var newAllQuestion = []
            newAllQuestion.push("AOVT")
            allBooks = newAllQuestion;
            break;
        case 'AMPDMC':
            var newAllQuestion = []
            newAllQuestion.push("AMPDMC")
            allBooks = newAllQuestion;
            break;
        case 'MCPSN':
            var newAllQuestion = []
            newAllQuestion.push("MCPSN")
            allBooks = newAllQuestion;
            break;
        case 'OEP':
            var newAllQuestion = []
            newAllQuestion.push("OEP")
            allBooks = newAllQuestion;
            break;
        case 'D':
            var newAllQuestion = []
            newAllQuestion.push("D")
            allBooks = newAllQuestion;
            break;
        case 'CDP':
            var newAllQuestion = []
            newAllQuestion.push("CDP")
            allBooks = newAllQuestion;
            break;
        case 'ACPDV':
            var newAllQuestion = []
            newAllQuestion.push("ACPDV")
            allBooks = newAllQuestion;
            break;
        case 'IAC':
            var newAllQuestion = []
            newAllQuestion.push("IAC")
            allBooks = newAllQuestion;
            break;
        case 'CTDC':
            var newAllQuestion = []
            newAllQuestion.push("CTDC")
            allBooks = newAllQuestion;
            break;
        case 'JN1':
            var newAllQuestion = []
            newAllQuestion.push("JN1")
            allBooks = newAllQuestion;
            break;
        case 'F':
            var newAllQuestion = []
            newAllQuestion.push("F")
            allBooks = newAllQuestion;
            break;
        case 'OCDV':
            var newAllQuestion = []
            newAllQuestion.push("OCDV")
            allBooks = newAllQuestion;
            break;
        case 'DLCA':
            var newAllQuestion = []
            newAllQuestion.push("DLCA")
            allBooks = newAllQuestion;
            break;
        case 'AMNJ':
            var newAllQuestion = []
            newAllQuestion.push("AMNJ")
            allBooks = newAllQuestion;
            break;
        case 'JDB':
            var newAllQuestion = []
            newAllQuestion.push("JDB")
            allBooks = newAllQuestion;
            break;
        case 'ARDB':
            var newAllQuestion = []
            newAllQuestion.push("ARDB")
            allBooks = newAllQuestion;
            break;
        case '1984':
            var newAllQuestion = []
            newAllQuestion.push("1984")
            allBooks = newAllQuestion;
            break;
        case 'GMO':
            var newAllQuestion = []
            newAllQuestion.push("GMO")
            allBooks = newAllQuestion;
            break;
        case 'GQVEA':
            var newAllQuestion = []
            newAllQuestion.push("GQVEA")
            allBooks = newAllQuestion;
            break;
        case 'HR':
            var newAllQuestion = []
            newAllQuestion.push("HR")
            allBooks = newAllQuestion;
            break;
        case 'ACP':
            var newAllQuestion = []
            newAllQuestion.push("ACP")
            allBooks = newAllQuestion;
            break;
        case 'E':
            var newAllQuestion = []
            newAllQuestion.push("E")
            allBooks = newAllQuestion;
            break;
        default:
            break;
    }
    rigthQuestion(allBooks[0]);
}

function calculateFinalWrongQuestion(name) {
    switch(name) {
        case 'OC':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OC") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'CS':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "CS") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ODDAF':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ODDAF") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ODMNF':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ODMNF") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'V':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "V") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'OSMDEH':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OSMDEH") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'QNEO':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "QNEO") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'QEH':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "QEH") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'GE':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "GE") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'UDNEM':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "UDNEM") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AGDL':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AGDL") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'MBDG':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "MBDG") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'MPDBC':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "MPDBC") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'OS':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OS") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'DFQR':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "DFQR") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AM':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AM") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'USPOA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "USPOA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ENTE':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ENTE") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'OANEO':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OANEO") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'VDDE':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "VDDE") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'OCMCB':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OCMCB") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'NQSCV':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "NQSCV") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'UMDFF':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "UMDFF") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'QE':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "QE") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ANM':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ANM") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'VBSA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "VBSA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AEG':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AEG") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'EAQA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "EAQA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'APS':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "APS") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'OHDG':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OHDG") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'TA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "TA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'TASI':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "TASI") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'MQCCOL':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "MQCCOL") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'TER':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "TER") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AHDA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AHDA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'CAS':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "CAS") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ACEDE':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ACEDE") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'CO':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "CO") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'HT':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "HT") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'HP':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "HP") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'EP':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "EP") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'FG':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "FG") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'A':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "A") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case '9N':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "9N") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AOVT':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AOVT") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AMPDMC':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AMPDMC") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'MCPSN':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "MCPSN") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'OEP':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OEP") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'D':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "D") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'CDP':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "CDP") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ACPDV':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ACPDV") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'IAC':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "IAC") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'CTDC':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "CTDC") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'JN1':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "JN1") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'F':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "F") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'OCDV':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "OCDV") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'DLCA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "DLCA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'AMNJ':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "AMNJ") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'JDB':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "JDB") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ARDB':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ARDB") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case '1984':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "1984") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'GMO':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "GMO") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'GQVEA':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "GQVEA") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'HR':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "HR") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'ACP':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "ACP") {
                    newAllQuestion.push(allBooks[i])
                }
            }
            allBooks = newAllQuestion;
            break;
        case 'E':
            var newAllQuestion = []
            for(var i = 0; i < allBooks.length; i++) {
                if(allBooks[i] != "E") {
                    newAllQuestion.push(allBooks[i])
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

}

function rigthQuestion(right) {
    alert(right)
    var akinatorSection =  "display: none";
    var setAkinator = document.getElementById("not-answered");
    setAkinator.setAttribute("style", akinatorSection);

    var akinatorSectionA =  "";
    var setAkinatorA = document.getElementById("answered");
    setAkinatorA.setAttribute("style", akinatorSectionA);
    
    switch(right) {
        case "ODDAF":
            var bookImg =  "images/Home/home-acclaimed-anne.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "O diário de Anne Frank"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "ODDAF";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "CS":
            var bookImg =  "images/Home/home-acclaimed-blood.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Com Sangue"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "CS";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "ODMNF":
            var bookImg =  "images/Home/home-acclaimed-two.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Os dois morrem no final"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "ODMNF";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OC":
            var bookImg =  "images/Home/home-acclaimed-collector.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "O Colecionador"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "OC";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "V":
            var bookImg =  "images/Home/home-acclaimed-verity.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Verity"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "V";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OSMDEH":
            var bookImg =  "images/Home/home-acclaimed-evelyn.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Os sete maridos de Evelyn Hugo"

            var bookLink = "OSMDEH";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "MBDG":
            var bookImg =  "images/Home/home-acclaimed-boys.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Mil beijos de garoto";

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "MBDG";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "MPDBC":
            var bookImg =  "images/Home/home-brazil-memories.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Memórias póstumas de Brás Cubas"

            var bookLink = "MPDBC";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OS":
            var bookImg =  "images/Home/home-brazil-sertoes.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Os sertões"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "OS";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "DFQR":

            var bookImg =  "images/Home/home-brazil-folhas.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);
            
            document.getElementById("name-book").innerHTML = "De folhas que resistem"

            var bookClass = "line line-md  line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "DFQR";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AM":
            var bookImg =  "images/Home/home-brazil-muralha.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A muralha"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AM";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "USPOA":
            var bookImg =  "images/Home/home-brazil-salto.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Um salto para o amor"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "USPOA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "ENTE":
            var bookImg =  "images/Home/home-brazil-encontro.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Enquanto não te encontro"

            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "ENTE";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AA":
            var bookImg =  "images/Home/home-popullar-aurora.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Aurora ascende"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AMN":
            var bookImg =  "images/Home/home-popullar-mundo.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Admirável mundo novo"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AMN";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "VBSA":
            var bookImg =  "images/Home/home-popullar-royal.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Vermelho, branco e sangue azul"

            var bookLink = "VBSA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AEG":
            var bookImg =  "images/Home/home-popullar-gelato.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Amor e gelato"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AEG";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "APS":
            var bookImg =  "images/Home/home-popullar-silenciosa.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A paciente silenciosa"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "APS";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "MCPSN":
            var bookImg =  "images/Home/home-adptation-callme.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Me chame pelo seu nome"

            var bookClass = " line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);
            
            var bookLink = "MCPSN";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "ACEDE":
            var bookImg =  "images/Home/home-adptation-stars.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A culpa é das estrelas"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);
            
            var bookLink = "ACEDE";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "CAS":
            var bookImg =  "images/Home/home-adptation-simon.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Simon vs. A Agenda Homo Sapiens"

            var bookLink = "CAS";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OEP":
            var bookImg =  "images/Home/home-adptation-orgulho.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Orgulho e Preconceito"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "OEP";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "D":
            var bookImg =  "images/Home/home-adptation-duna.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Duna"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "D";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "CDP":
            var bookImg =  "images/Home/home-adptation-bird.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Caixa de Pássaros: Não abra os olhos"

            var bookLink = "CDP";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "CO":
            var bookImg =  "images/Home/home-autor-CO1.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Saga: Carry on"

            var bookLink = "CO1";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);

            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);
            break;
        case "EAQA":
            var bookImg =  "images/Home/home-popullar-acaba.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "É Assim que Acaba"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "EAQA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "TASI":
            var bookImg =  "images/Home/home-popullar-imperfeicoes.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Todas as suas (im)perfeições"

            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "TASI";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "DLCA":
            var bookImg =  "images/Home/home-luvov.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "De Lukov, com amor"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "DLCA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "EP":
            var bookImg =  "images/Home/home-autor-EP.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Eleanor & Park"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "EP";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "FG":
            var bookImg =  "images/Home/home-autor-FG.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Fan girl"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "FG";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "A":
            var bookImg =  "images/Home/home-autor-A.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Anexos"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "A";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "9N":
            var bookImg =  "images/Home/home-autor-9.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Novembro, 9"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "9N";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AOVT":
            var bookImg =  "images/Home/home-autor-verao.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Até o verão terminar"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AOVT";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AMPDMC":
            var bookImg =  "images/Home/home-autor-mil.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "As mil partes do meu coração"


            var bookLink = "AMPDMC";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "HT":
            var bookImg =  "images/Home/home-saga-H1.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Saga: Heartstopper"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "HT1";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "HP":
            var bookImg =  "images/Home/home-saga-HP1.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Saga Harry Potter"
            var bookLink = "HP1";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "QNEO":
            var bookImg =  "images/Home/home-acclaimed-looking.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Quando ninguém está olhando"
            var bookLink = "QNEO";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "QEH":
            var bookImg =  "images/Home/home-acclaimed-hansen.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Querido Evan Hansen"
            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "QEH";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "GE":
            var bookImg =  "images/Home/home-acclaimed-girl.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Garota exemplar"
            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "GE";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "UDNEM":
            var bookImg =  "images/Home/home-acclaimed-lying.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Um de nós está mentindo"
            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);
            var bookLink = "UDNEM";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AGDL":
            var bookImg =  "images/Home/home-acclaimed-lake.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);
            document.getElementById("name-book").innerHTML = "A garota do lago"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AGDL";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OANEO":
            var bookImg =  "images/Home/home-brazil-obvio.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "O amor não é óbvio"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "OANEO";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "VDDE":
            var bookImg =  "images/Home/home-brazil-engolir.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Verdades difíceis de engolir"

            var bookClass = " line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "VDDE";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OCMCB":
            var bookImg =  "images/Home/home-brazil-contos.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Os cem melhores contos brasileiros"

            var bookLink = "OCMCB";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "NQSCV":
            var bookImg =  "images/Home/home-brazil-quero.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Não quero ser como você"

            var bookClass = " line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "NQSCV";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "QE":
            var bookImg =  "images/Home/home-brazil-ex.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Querido ex"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "QE";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "UMDFF":
            var bookImg =  "images/Home/home-brazil-finais.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Um milhão de finais felizes"

            var bookLink = "UMDFF";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OHDG":
            var bookImg =  "images/Home/home-popullar-giz.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "O homem de giz"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "OHDG";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "TA":
            var bookImg =  "images/Home/home-popullar-tortoarado.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Torto arado"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "TA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "MQCCL":
            var bookImg =  "images/Home/home-popullar-lobos.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Mulheres que correm com lobos"

            var bookLink = "MQCCL";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "TED":
            var bookImg =  "images/Home/home-popullar-rio.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Tudo é rio"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "TED";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AHDA":
            var bookImg =  "images/Home/home-popullar-hipotese.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A hipótese do amor"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AHDA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "ACPDV":
            var bookImg =  "images/Home/home-adptation-cinco.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A Cinco passos de você"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "ACPDV";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "IAC":
            var bookImg =  "images/Home/home-adptation-it.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "IT: A coisa"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "IAC";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "CTDC":
            var bookImg =  "images/Home/home-adptation-50.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Cinquenta tons de cinza"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "CTDC";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "JN1":
            var bookImg =  "images/Home/home-adptation-1.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Jogador número 1"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "JN1";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "F":
            var bookImg =  "images/Home/home-adptation-fallen.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Fallen"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "F";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OCDV":
            var bookImg =  "images/Home/home-adptation-vinci.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "O código da Vinci"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "OCDV";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "OUDDH":
            var bookImg =  "images/genre/genre-guerra-dia.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "O último dia de Hitler "

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "OUDDH";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "VDT":
            var bookImg =  "images/genre/genre-guerra-vozes.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Vozes de Tchernóbil"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "VDT";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AADG":
            var bookImg =  "images/genre/genre-guerra-arte.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A Arte da Guerra"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AADG";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "ASGM":
            var bookImg =  "images/genre/genre-guerra-2174.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A Segunda Guerra Mundial, Os 2.174 dias"

            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "ASGM";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "GS":
            var bookImg =  "images/genre/genre-guerra-sujas.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Guerra Sujas"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "GS";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "C":
            var bookImg =  "images/genre/genre-guerra-crimeia.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Criméia"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "C";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "GOHESL":
            var bookImg =  "images/genre/genre-guerra-legado.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Guerra. O Horror da Guerra e Seu Legado"

            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "GOHESL";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AGNTRDM":
            var bookImg =  "images/genre/genre-guerra-mulher.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A guerra não tem rosto de mulher "

            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AGNTRDM";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "GEP":
            var bookImg =  "images/genre/genre-guerra-paz.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Guerra e Paz"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "GEP";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "AMNJ":
            var bookImg =  "images/genre/genre-suspense-janela.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "a mulher na janela"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "AMNJ";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "JDB":
            var bookImg =  "images/genre/genre-suspense-borboletas.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Jardim de borboletas"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "JDB";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "ARDB":
            var bookImg =  "images/genre/genre-ficcao-revolucao.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A revolução dos bichos"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "ARDB";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "1984":
            var bookImg =  "images/genre/genre-ficcao-1984.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "1984"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "1984";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "GMO":
            var bookImg =  "images/genre/genre-lgbt-garota.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Garota, mulher, outras"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "GMO";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "GQVEA":
            var bookImg =  "images/genre/genre-lgbt-gostaria.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Gostaria que você estivesse aqui"

            var bookClass = "line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "GQVEA";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "HR":
            var bookImg =  "images/genre/genre-drama-hibisco.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Hibisco Roxo"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "HR";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "ACP":
            var bookImg =  "images/genre/genre-drama-purpura.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "A Cor Púrpura"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);

            var bookLink = "ACP";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        case "E":
            var bookImg =  "images/genre/genre-drama-extraodinário.jpg";
            var setImg = document.getElementById("poster");
            setImg.setAttribute("src", bookImg);

            document.getElementById("name-book").innerHTML = "Extraodinário"

            var bookClass = "line line-sm";
            var setClass = document.getElementById("name-book");
            setClass.setAttribute("class", bookClass);


            var bookLink = "E";
            var setLink = document.getElementById("button-link1");
            setLink.setAttribute("value", bookLink);
            break;
        default:
            break;
    }

}

function putGenius() {

}
