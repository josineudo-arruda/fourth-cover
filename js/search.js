var lastSearch = 0;
var searchedBooks = [];
var contt = 0;

function filter() {
    genrePositions = ['genre-radio1','genre-radio2','genre-radio3','genre-radio4','genre-radio5','genre-radio6'];
    subPositions = ['sub-radio1','sub-radio2','sub-radio3','sub-radio4','sub-radio5'];
    pagePositions = ['page-radio1','page-radio2','page-radio3','page-radio4'];
    aPositions = ['a-radio1','a-radio2','a-radio3'];

    var genre = [document.getElementById('genre-radio1').checked,document.getElementById('genre-radio2').checked,document.getElementById('genre-radio3').checked,document.getElementById('genre-radio4').checked,document.getElementById('genre-radio5').checked,document.getElementById('genre-radio6').checked];
    var sub = [document.getElementById('sub-radio1').checked,document.getElementById('sub-radio2').checked,document.getElementById('sub-radio3').checked,document.getElementById('sub-radio4').checked,document.getElementById('sub-radio5').checked];
    var page = [document.getElementById('page-radio1').checked,document.getElementById('page-radio2').checked,document.getElementById('page-radio3').checked,document.getElementById('page-radio4').checked];
    var a = [document.getElementById('a-radio1').checked,document.getElementById('a-radio2').checked,document.getElementById('a-radio3').checked];


    var genreValue = "";
    var subValue = "";
    var pageValue = "";
    var aValue = "";

    for(var i=0; i < 6; i++) {
        if(genre[i]) {
            genreValue = document.getElementById(genrePositions[i]).value;
            break;
        }
    }
    for(var i=0; i < 4; i++) {
        if(page[i]) {
            pageValue = document.getElementById(pagePositions[i]).value;
            break;
        }
    }
    for(var i=0; i < 5; i++) {
        if(sub[i]) {
            subValue = document.getElementById(subPositions[i]).value;
        }
    }
    for(var i=0; i < 3; i++) {
        if(a[i]) {
            aValue = document.getElementById(aPositions[i]).value;
            break;
        }
    }


    var continueBooks = [];

    for(var i = 0; i < searchedBooks.length; i++) {
        if(searchedBooks[i] == "ODDAF") {
            if(genreValue == "genre-guerra" || genreValue == "") {
                if(subValue == "sub-adaptados" || subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("ODDAF");
                        }
                    }
                }
            }
        } else if(searchedBooks[i] == "CS") {
            if(genreValue == "genre-suspense" || genreValue == "") {
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("CS");
                        }
                    }
                }
            }
        }else if(searchedBooks[i] == "ODMNF") {
            if(genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == "") {
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("ODMNF");
                        }
                    }
                }
            }
        }else if(searchedBooks[i] == "OC") {
            if(genreValue == "genre-romance" || genreValue == "genre-suspense" || genreValue == "") {
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("OC");
                        }
                    }
                }
            }
        }else if(searchedBooks[i] == "V") {
            if(genreValue == "genre-romance" || genreValue == "genre-suspense" || genreValue == ""){
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("V");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "OSMDEH") {
            if(genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == ""){
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("OSMDEH");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "MBDG") {
            if(genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("MBDG");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "MPDBC") {
            if(genreValue == "genre-drama" || genreValue == "genre-ficcao" || genreValue == ""){
                if(subValue == "" || subValue == "sub-nacional") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("MPDBC");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "OS") {
            if(genreValue == "genre-drama" || genreValue == ""){
                if(subValue == "" || subValue == "sub-nacional") {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("OS");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "DFQR") {
            if(genreValue == "genre-drama" || genreValue == ""){
                if(subValue == "" || subValue == "sub-nacional") {
                    if(pageValue == "page-(0-200)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("DFQR");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AM") {
            if(genreValue == "genre-drama" || genreValue == ""){
                if(subValue == "" || subValue == "sub-nacional") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AM");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "USPOA") {
            if(genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" || subValue == "sub-nacional") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("USPOA");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "ENTE") {
            if(genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == ""){
                if(subValue == "" || subValue == "sub-nacional") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("ENTE");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AA") {
            if( genreValue == "genre-ficcao" || genreValue == ""){
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AA");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AMN") {
            if( genreValue == "genre-drama" || genreValue == ""){
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AMN");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "VBSA") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes" || subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("VBSA");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AEG") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AEG");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "APS") {
            if( genreValue == "genre-suspense" || genreValue == ""){
                if(subValue == "") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("APS");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "MCPSN") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes" || subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("MCPSN");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "ACEDE") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes" || subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("ACEDE");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "CAS") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes" || subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("CAS");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "OEP") {
            if( genreValue == "genre-drama" || genreValue == "genre-guerra"|| genreValue == "genre-romance"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("OEP");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "D") {
            if( genreValue == "genre-ficcao" || genreValue == ""){
                if(subValue == "" || subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("D");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "CDP") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-suspense" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes"  || subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("CDP");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "CO1") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-redes"|| subValue == "sub-sagas" ) {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("CO1");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "CO2") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-redes"|| subValue == "sub-sagas" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("CO2");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "CO3") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-redes"|| subValue == "sub-sagas" ) {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("CO3");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "EAQA") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("EAQA");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "TASI") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("TASI");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "DLCA") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("DLCA");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "EP") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("EP");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "FG") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("FG");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "A") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" || subValue == "sub-redes" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("A");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AOVT") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == ""|| subValue == "sub-redes"  ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AOVT");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "9N") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("9N");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AMPDMC") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AMPDMC");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HT1") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-hq" || subValue == "sub-redes"|| subValue == "sub-sagas") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("HT1");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HT2") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-hq" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("HT2");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HT3") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-hq" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("HT3");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HT4") {
            if( genreValue == "genre-romance" || genreValue == "genre-lgbt"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-hq" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("HT4");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP1") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("HP1");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP2") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("HP2");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP3") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("HP3");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP4") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("HP4");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP5") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("HP5");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP6") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("HP6");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP7") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("HP7");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP8") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2010)") {
                            continueBooks.push("HP8");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "HP8") {
            if( genreValue == "genre-ficcao" || genreValue == "genre-guerra"|| genreValue == ""){
                if(subValue == "" || subValue == "sub-sagas"|| subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2010)") {
                            continueBooks.push("HP8");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "QNEO") {
            if( genreValue == "genre-suspense" || genreValue == "genre-ficcao"|| genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("QNEO");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "QEH") {
            if( genreValue == "genre-suspense" || genreValue == "genre-drama"|| genreValue == ""){
                if(subValue == "" ) {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("QEH");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "GE") {
            if( genreValue == "genre-romance" || genreValue == "genre-suspense"|| genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("GE");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "UDNEM") {
            if( genreValue == "genre-suspense" || genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("UDNEM");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AGDL") {
            if( genreValue == "genre-suspense" || genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AGDL");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "OANEO") {
            if( genreValue == "genre-romance" || genreValue == ""){
                if(subValue == "" ||  subValue == "sub-nacionais") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("OANEO");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "OCMCB") {
            if( genreValue == "genre-drama" || genreValue == ""){
                if(subValue == "" ||  subValue == "sub-nacionais") {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("OCMCB");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "NQSCV") {
            if( genreValue == "genre-romance" ||genreValue == "genre-lgbt"|| genreValue == ""){
                if(subValue == "" ||  subValue == "sub-nacionais") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("NQSCV");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "QE") {
            if( genreValue == "genre-romance" ||genreValue == "genre-lgbt"|| genreValue == ""){
                if(subValue == "" ||  subValue == "sub-nacionais") {
                    if(pageValue == "page-(0-200)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("QE");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "UMDFF") {
            if( genreValue == "genre-romance" ||genreValue == "genre-lgbt"|| genreValue == ""){
                if(subValue == "" ||  subValue == "sub-nacionais") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("UMDFF");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "OHDG") {
            if( genreValue == "genre-suspense" ||genreValue == "genre-drama"|| genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("OHDG");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "TA") {
            if( genreValue == "genre-drama"|| genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes"||  subValue == "sub-nacionais") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("TA");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "MQCCL") {
            if( genreValue == "genre-drama"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes") {
                    if(pageValue == "page-(500-1000)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("MQCCL");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "TED") {
            if( genreValue == "genre-romance"|| genreValue == "genre-drama"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes"||  subValue == "sub-nacionais") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("TED");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "AHDA") {
            if( genreValue == "genre-romance"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("AHDA");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "ACPDV") {
            if( genreValue == "genre-romance"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes"||  subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2022)") {
                            continueBooks.push("ACPDV");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "IAC") {
            if( genreValue == "genre-suspense"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-redes"||  subValue == "sub-adaptados") {
                    if(pageValue == "page-(1000-1500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("ACIACPDV");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "CTDC") {
            if( genreValue == "genre-romance"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-adaptados") {
                    if(pageValue == "page-(1000-1500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2000)") {
                            continueBooks.push("CTDC");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "F") {
            if( genreValue == "genre-romance"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-adaptados"||  subValue == "sub-sagas") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2010)") {
                            continueBooks.push("F");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "JG1") {
            if( genreValue == "genre-ficcao"||genreValue == "genre-guerra"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2010)") {
                            continueBooks.push("JG1");
                        }
                    }
                }
            } 
        }else if(searchedBooks[i] == "OCDV") {
            if( genreValue == "genre-suspense"||genreValue == ""){
                if(subValue == "" ||  subValue == "sub-adaptados") {
                    if(pageValue == "page-(200-500)" || pageValue == "") {
                        if(aValue == "" || aValue == "a-(2010)") {
                            continueBooks.push("OCDV");
                        }
                    }
                }
            } 
        }
    }

    var display = [
        "display-movie01","display-movie02","display-movie03","display-movie04","display-movie05","display-movie06","display-movie07","display-movie08","display-movie09","display-movie10","display-movie11","display-movie12","display-movie13","display-movie14","display-movie15","display-movie16","display-movie17","display-movie18","display-movie19","display-movie20","display-movie21","display-movie22","display-movie23","display-movie24","display-movie25","display-movie26","display-movie27","display-movie28","display-movie29","display-movie30","display-movie31","display-movie32","display-movie33","display-movie34","display-movie35","display-movie36"
    ];

    var poster = [
        "poster01","poster02","poster03","poster04","poster05","poster06","poster07","poster08","poster09","poster10","poster11","poster12","poster13","poster14","poster15","poster16","poster17","poster18","poster19","poster20","poster21","poster22","poster23","poster24","poster25","poster26","poster27","poster28","poster29","poster30","poster31","poster32","poster33","poster34","poster35","poster36"
    ];
    var button = [
        "button-link01","button-link02","button-link03","button-link04","button-link05","button-link06","button-link07","button-link08","button-link09","button-link10","button-link11","button-link12","button-link13","button-link14","button-link15","button-link16","button-link17","button-link18","button-link19","button-link20","button-link21","button-link22","button-link23","button-link24","button-link25","button-link26","button-link27","button-link28","button-link29","button-link30","button-link31","button-link32","button-link33","button-link34","button-link35","button-link36"
    ];
    var title = [
        "title-01","title-02","title-03","title-04","title-05","title-06","title-07","title-08","title-09","title-10","title-11","title-12","title-13","title-14","title-15","title-16","title-17","title-18","title-19","title-20","title-21","title-22","title-23","title-24","title-25","title-26","title-27","title-28","title-29","title-30","title-31","title-32","title-33","title-34","title-35","title-36"
    ];

    if(continueBooks.length != contt) {
        for(let i = 0; i < contt; i++) {
            var displayDiv =  "display: none";
            var setDisplay = document.getElementById(display[i]);
            setDisplay.setAttribute("style", displayDiv);

            var bookClass = "";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);
        }
        for(var i = 0; i < continueBooks.length; i++) {
            var displayDiv =  " ";
            var setDisplay = document.getElementById(display[i]);
            setDisplay.setAttribute("style", displayDiv);
        }

        searchedBooks.length = 0;

        for(var i = 0; i < continueBooks.length; i++) {
            if(continueBooks[i] == "ODDAF") {
                var bookImg =  "images/Home/home-acclaimed-anne.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "O diário de Anne Frank"
    
                var bookClass = "line line-md line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("ODDAF");
    
                var bookLink = "ODDAF";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            } else if(continueBooks[i] == "CS") {
                var bookImg =  "images/Home/home-acclaimed-blood.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Com Sangue"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("CS");
    
                var bookLink = "CS";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            } else if(continueBooks[i] == "ODMNF") {
                var bookImg =  "images/Home/home-acclaimed-two.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Os dois morrem no final"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("ODMNF");
    
                var bookLink = "ODMNF";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            } else if(continueBooks[i] == "OC") {
                var bookImg =  "images/Home/home-acclaimed-collector.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "O Colecionador"
    
                searchedBooks.push("OC");
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "OC";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "V") {
                var bookImg =  "images/Home/home-acclaimed-verity.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Verity"
    
                var bookClass = "line  line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
                
                searchedBooks.push("V");
    
                var bookLink = "V";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "OSMDEH") {
                var bookImg =  "images/Home/home-acclaimed-evelyn.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Os sete maridos de Evelyn Hugo"
    
                searchedBooks.push("OSMDEH");
    
                var bookLink = "OSMDEH";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            } else if(continueBooks[i] == "MBDG") {
                var bookImg =  "images/Home/home-acclaimed-boys.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Mil beijos de garoto";
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("MBDG");
    
                var bookLink = "MBDG";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }else if(continueBooks[i] == "MPDBC") {
                var bookImg =  "images/Home/home-brazil-memories.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Memórias póstumas de Brás Cubas"
    
                searchedBooks.push("MPDBC");
    
                var bookLink = "MPDBC";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "OS") {
                var bookImg =  "images/Home/home-brazil-sertoes.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Os sertões"
    
                searchedBooks.push("OS");
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "OS";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "DFQR") {
    
                var bookImg =  "images/Home/home-brazil-folhas.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
                
                document.getElementById(title[i]).innerHTML = "De folhas que resistem"
    
                var bookClass = "line line-md  line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("DFQR");
    
                var bookLink = "DFQR";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "AM") {
                var bookImg =  "images/Home/home-brazil-muralha.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "A muralha"
    
                searchedBooks.push("AM");
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "AM";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "USPOA") {
                var bookImg =  "images/Home/home-brazil-salto.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Um salto para o amor"
    
                var bookClass = "line line-md line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "USPOA";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
                searchedBooks.push("USPOA");
            }   else if(continueBooks[i] == "ENTE") {
                var bookImg =  "images/Home/home-brazil-encontro.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Enquanto não te encontro"
    
                var bookClass = "line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("ENTE");
    
                var bookLink = "ENTE";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "AA") {
                var bookImg =  "images/Home/home-popullar-aurora.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Aurora ascende"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("AA");
    
                var bookLink = "AA";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "AMN") {
                var bookImg =  "images/Home/home-popullar-mundo.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Admirável mundo novo"
    
                var bookClass = "line line-md line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("AMN");
    
                var bookLink = "AMN";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "VBSA") {
                var bookImg =  "images/Home/home-popullar-royal.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Vermelho, branco e sangue azul"
    
                searchedBooks.push("VBSA");
    
                var bookLink = "VBSA";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "AEG") {
                var bookImg =  "images/Home/home-popullar-gelato.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Amor e gelato"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("AEG");
    
                var bookLink = "AEG";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "APS") {
                var bookImg =  "images/Home/home-popullar-silenciosa.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "A paciente silenciosa"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("APS");
    
                var bookLink = "APS";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "MCPSN") {
                var bookImg =  "images/Home/home-adptation-callme.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Me chame pelo seu nome"
    
                var bookClass = " line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("MCPSN");
                
                var bookLink = "MCPSN";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            } else if(continueBooks[i] == "ACEDE") {
                var bookImg =  "images/Home/home-adptation-stars.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "A culpa é das estrelas"
    
                var bookClass = "line line-md line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("ACEDE");
                
                var bookLink = "ACEDE";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            } else if(continueBooks[i] == "CAS") {
                var bookImg =  "images/Home/home-adptation-simon.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Simon vs. A Agenda Homo Sapiens"
    
                searchedBooks.push("CAS");
    
                var bookLink = "CAS";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "OEP") {
                var bookImg =  "images/Home/home-adptation-orgulho.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Orgulho e Preconceito"
    
                var bookClass = "line line-md line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("OEP");
    
                var bookLink = "OEP";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "D") {
                var bookImg =  "images/Home/home-adptation-duna.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Duna"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("D");
    
                var bookLink = "D";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "CDP") {
                var bookImg =  "images/Home/home-adptation-bird.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Caixa de Pássaros: Não abra os olhos"
    
                searchedBooks.push("CDP");
    
                var bookLink = "CDP";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "CO1") {
                var bookImg =  "images/Home/home-autor-CO1.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Carry on: Sempre em frente"
    
                searchedBooks.push("CO1");
    
                var bookClass = "line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "CO1";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "CO2") {
                var bookImg =  "images/Home/home-autor-CO2.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Carry on: O filho rebelde"
    
                searchedBooks.push("CO2");
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "CO2";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "CO3") {
                var bookImg =  "images/Home/home-autor-CO3.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Carry on: Venha o que vier"
    
                searchedBooks.push("CO3");
    
                var bookLink = "CO3";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
                var bookClass = "line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
            }   else if(continueBooks[i] == "EAQA") {
                var bookImg =  "images/Home/home-popullar-acaba.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "É Assim que Acaba"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("EAQA");
    
                var bookLink = "EAQA";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "TASI") {
                var bookImg =  "images/Home/home-popullar-imperfeicoes.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Todas as suas (im)perfeições"
    
                var bookClass = "line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("TASI");
    
                var bookLink = "TASI";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);

            }   else if(continueBooks[i] == "DLCA") {
                var bookImg =  "images/Home/home-luvov.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "De Lukov, com amor"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("DLCA");
    
                var bookLink = "DLCA";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "EP") {
                var bookImg =  "images/Home/home-autor-EP.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Eleanor & Park"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("EP");
    
                var bookLink = "EP";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "FG") {
                var bookImg =  "images/Home/home-autor-FG.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Fan girl"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("FG");
    
                var bookLink = "FG";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "A") {
                var bookImg =  "images/Home/home-autor-A.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Anexos"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("A");
    
                var bookLink = "A";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "EP") {
                var bookImg =  "images/Home/home-autor-9.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Novembro, 9"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("9N");
    
                var bookLink = "9N";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "AOVT") {
                var bookImg =  "images/Home/home-autor-verao.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Até o verão terminar"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("AOVT");
    
                var bookLink = "AOVT";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "AMPDMC") {
                var bookImg =  "images/Home/home-autor-mil.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "As mil partes do meu coração"
    
                searchedBooks.push("AMPDMC");
    
                var bookLink = "AMPDMC";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "HT1") {
                var bookImg =  "images/Home/home-saga-H1.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Heartstopper (vol 1)"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("HT1");
    
                var bookLink = "HT1";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "HT2") {
                var bookImg =  "images/Home/home-saga-H2.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Heartstopper (vol 2)"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("HT2");
    
                var bookLink = "HT2";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "HT3") {
                var bookImg =  "images/Home/home-saga-H3.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Heartstopper (vol 3)"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("HT3");
    
                var bookLink = "HT3";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);

            }   else if(continueBooks[i] == "HT4") {
                var bookImg =  "images/Home/home-saga-H4.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Heartstopper (vol 4)"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("HT4");
    
                var bookLink = "HT4";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);

            }   else if(continueBooks[i] == "HP1") {
                var bookImg =  "images/Home/home-saga-HP1.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: A pedra filosofal"
    
                searchedBooks.push("HP1");
    
                var bookLink = "HP1";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "HP2") {
                var bookImg =  "images/Home/home-saga-HP2.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: A câmara secreta"
    
                searchedBooks.push("HP2");
    
                var bookLink = "HP2";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "HP3") {
                var bookImg =  "images/Home/home-saga-HP3.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: O prisoneiro Azkban"
    
                searchedBooks.push("HP3");
    
                var bookLink = "HP3";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);

            }   else if(continueBooks[i] == "HP4") {
                var bookImg =  "images/Home/home-saga-HP4.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: A cálice de fogo"
    
                var bookLink = "HP4";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
                searchedBooks.push("HP4");
    
            }   else if(continueBooks[i] == "HP5") {
                var bookImg =  "images/Home/home-saga-HP5.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: A ordem da fênix"
    
                searchedBooks.push("HP5");
    
                var bookLink = "HP5";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }   else if(continueBooks[i] == "HP6") {
                var bookImg =  "images/Home/home-saga-HP6.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: O enigma do príncipe"
                searchedBooks.push("HP6");
                var bookLink = "HP6";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    

            }   else if(continueBooks[i] == "HP7") {
                var bookImg =  "images/Home/home-saga-HP7.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: As relíquias da morte"
                searchedBooks.push("HP7");
                var bookLink = "HP7";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "HP8") {
                var bookImg =  "images/Home/home-saga-HP8.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Harry Potter: A criança amaldiçoada"
                searchedBooks.push("HP8");
                var bookLink = "HP8";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "QNEO") {
                var bookImg =  "images/Home/home-acclaimed-looking.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Quando ninguém está olhando"
                searchedBooks.push("QNEO");
                var bookLink = "QNEO";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);

            }   else if(continueBooks[i] == "QEH") {
                var bookImg =  "images/Home/home-acclaimed-hansen.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Querido Evan Hansen"
                searchedBooks.push("QEH");
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "QEH";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "GE") {
                var bookImg =  "images/Home/home-acclaimed-girl.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Garota exemplar"
                searchedBooks.push("GE");
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "GE";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "UDNEM") {
                var bookImg =  "images/Home/home-acclaimed-lying.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Um de nós está mentindo"
                var bookClass = "line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
                searchedBooks.push("UDNEM");
                var bookLink = "UDNEM";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "AGDL") {
                var bookImg =  "images/Home/home-acclaimed-lake.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
                searchedBooks.push("AGDL");
                document.getElementById(title[i]).innerHTML = "A garota do lago"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                var bookLink = "AGDL";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "OANEO") {
                var bookImg =  "images/Home/home-brazil-obvio.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "O amor não é óbvio"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("OANEO");
    
                var bookLink = "OANEO";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "VDDE") {
                var bookImg =  "images/Home/home-brazil-engolir.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Verdades difíceis de engolir"
    
                var bookClass = " line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("VDDE");
    
                var bookLink = "VDDE";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "OCMCB") {
                var bookImg =  "images/Home/home-brazil-contos.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Os cem melhores contos brasileiros"
    
                var bookLink = "OCMCB";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
                searchedBooks.push("OCMCB");
    
            }   else if(continueBooks[i] == "NQSCV") {
                var bookImg =  "images/Home/home-brazil-quero.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Não quero ser como você"
    
                var bookClass = " line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("NQSCV");
    
    
                var bookLink = "NQSCV";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "QE") {
                var bookImg =  "images/Home/home-brazil-ex.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Querido ex"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("QE");
    
                var bookLink = "QE";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "UMDFF") {
                var bookImg =  "images/Home/home-brazil-finais.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Um milhão de finais felizes"
    
                searchedBooks.push("UMDFF");
    
                var bookLink = "UMDFF";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "OHDG") {
                var bookImg =  "images/Home/home-popullar-giz.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "O homem de giz"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("OHDG");
    
                var bookLink = "OHDG";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "TA") {
                var bookImg =  "images/Home/home-popullar-tortoarado.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Torto arado"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("TA");
    
                var bookLink = "TA";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "MQCCL") {
                var bookImg =  "images/Home/home-popullar-lobos.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Mulheres que correm com lobos"
    
                searchedBooks.push("MQCCL");
    
                var bookLink = "MQCCL";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "TED") {
                var bookImg =  "images/Home/home-popullar-rio.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Tudo é rio"
    
                var bookClass = "line  line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("TED");
    
                var bookLink = "TED";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "AHDA") {
                var bookImg =  "images/Home/home-popullar-hipotese.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "A hipótese do amor"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("AHDA");
    
                var bookLink = "AHDA";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "ACPDV") {
                var bookImg =  "images/Home/home-adptation-cinco.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "A Cinco passos de você"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("ACPDV");
    
                var bookLink = "ACPDV";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "IAC") {
                var bookImg =  "images/Home/home-adptation-it.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "IT: A coisa"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("IAC");
    
                var bookLink = "IAC";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "CTDC") {
                var bookImg =  "images/Home/home-adptation-50.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Cinquenta tons de cinza"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("CTDC");
    
                var bookLink = "CTDC";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);

            }   else if(continueBooks[i] == "JN1") {
                var bookImg =  "images/Home/home-adptation-1.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Jogador número 1"
    
                var bookClass = "line  line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("JN1");
    
                var bookLink = "JN1";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);

            }   else if(continueBooks[i] == "F") {
                var bookImg =  "images/Home/home-adptation-fallen.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "Fallen"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("F");
    
                var bookLink = "F";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
    
            }   else if(continueBooks[i] == "OCDV") {
                var bookImg =  "images/Home/home-adptation-vinci.jpg";
                var setImg = document.getElementById(poster[i]);
                setImg.setAttribute("src", bookImg);
    
                document.getElementById(title[i]).innerHTML = "O código da Vinci"
    
                var bookClass = "line line-sm";
                var setClass = document.getElementById(title[i]);
                setClass.setAttribute("class", bookClass);
    
                searchedBooks.push("OCDV");
    
                var bookLink = "OCDV";
                var setLink = document.getElementById(button[i]);
                setLink.setAttribute("value", bookLink);
            }
        }
        


    }
}

function searchMovie() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookName = urlParams.get('search');
    var lowCaseBook = bookName.toLowerCase();
    var newName = lowCaseBook.replace(/ /g, ",");
    var searchValue = newName.split(",");

    var display = [
        "display-movie01","display-movie02","display-movie03","display-movie04","display-movie05","display-movie06","display-movie07","display-movie08","display-movie09","display-movie10","display-movie11","display-movie12","display-movie13","display-movie14","display-movie15","display-movie16","display-movie17","display-movie18","display-movie19","display-movie20","display-movie21","display-movie22","display-movie23","display-movie24","display-movie25","display-movie26","display-movie27","display-movie28","display-movie29","display-movie30","display-movie31","display-movie32","display-movie33","display-movie34","display-movie35","display-movie36"
    ];

    for(let i = 0; i < lastSearch; i++) {
        var displayDiv =  "display: none";
        var setDisplay = document.getElementById(display[i]);
        setDisplay.setAttribute("style", displayDiv);
    }

    var bookBDDS = []
    //primeira linha
    bookBDDS.push(["o","diário","de","anne","frank","guerra"]);
    bookBDDS.push(["com","sangue","stephen","king","suspense"]);
    bookBDDS.push(["os","dois","morrem","no","final","adam","silvera","romance","lgbt","lgbtqia+","lgbtq"]);
    bookBDDS.push(["o","colecionador","john","fowles","suspense"]);
    bookBDDS.push(["verity","colleen","hoover","suspense","drama"]);
    bookBDDS.push(["os","sete","maridos","de","evelyn","hugo","lgbt","lgbtqia+","lgbtq","romance","taylor","jenkins","reid"]);
    bookBDDS.push(["mil","beijos","de","garoto","romance","tillie","cole"]);

    //segunda linha
    bookBDDS.push(["memorias","postumas","de","bras","cubas","machado","de","assis","drama","ficção"]);
    bookBDDS.push(["os","sertões","euclides","da","cunha","drama"]);
    bookBDDS.push(["de","folhas","que","resistem","raissa","lettiere","drama"]);
    bookBDDS.push(["a","muralha","dinah","queiroz","drama"]);
    bookBDDS.push(["um","salto","para","o","amor","romance","aione","simões"]);
    bookBDDS.push(["enquanto","não","te", "encontro", "lgbt","lgbtqia+","lgbtq","romance"]);

    //terceira linha
    bookBDDS.push(["aurora","ascende","ficção","amie","kaufman","jay","kristoff"]);
    bookBDDS.push(["admirável","mundo","novo","aldous","leonard","huxley","drama"]);
    bookBDDS.push(["vermelho","branco","e","sangue","azul","casey","mcquiston","lgbt","lgbtqia+","lgbtq","romance"]);
    bookBDDS.push(["amor","e","gelato","jenna","evans","welch","romance"]);
    bookBDDS.push(["a","paciente","silenciosa","alex","michaelides","suspense"]);

    //quarta linha
    bookBDDS.push(["chame","pelo","seu","nome","andre","aciman","lgbt","lgbtqia+","lgbtq","romance"]);
    bookBDDS.push(["a","culpa","é","das","estrelas","john","green","romance"]);
    bookBDDS.push(["love","simon","homo","sapiens","amor","agenda","romance","lgbt","lgbtqia+","lgbtq"]);
    bookBDDS.push(["orgulho","e","preconceito","jane", "austen","drama","guerra"]);
    bookBDDS.push(["duna","frank","herbert", "ficção","guerra"]);
    bookBDDS.push(["bird","box","caixa","passáros","suspense","josh", "malerman"]);
    
    //autores
    bookBDDS.push(["carry","on","sempre","em","frente","romance","lgbt","lgbtqia+","lgbtq","rainbow","rowell","guerra"]);
    bookBDDS.push(["carry","on","any","way","the","winds","blows","venha","o","que","vier","romance","lgbt","lgbtqia+","lgbtq","rainbow","rowell","guerra"]);
    bookBDDS.push(["carry","on","wayward","son","o","filho","rebelde","romance","lgbt","lgbtqia+","lgbtq","rainbow","rowell","guerra"]);
    
    bookBDDS.push(["é","assim","que","acaba","colleen","hoover","romance"]);
    bookBDDS.push(["todas","suas","imperfeições","imperfeicoes","colleen","hoover","romance"]);
    bookBDDS.push(["de","lukov","com","amor","romance"]);

    bookBDDS.push(["elanor","e","&","park","romance","rainbow","rowell"]);
    bookBDDS.push(["fan","girl","romance","rainbow","rowell"]);
    bookBDDS.push(["anexos","romance","rainbow","rowell"]);

    bookBDDS.push(["nove","9","novembro","colleen","hoover","romance"]);
    bookBDDS.push(["até","o","verão","terminar","colleen","hoover","romance"]);
    bookBDDS.push(["as","mil","partes","do","meu","coração","colleen","hoover","romance"]);

    //sagas
    bookBDDS.push(["heartstopper","dois","garotos","um","encontro","volume","1","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);
    bookBDDS.push(["heartstopper","volume","2","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);
    bookBDDS.push(["heartstopper","volume","3","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);
    bookBDDS.push(["heartstopper","volume","4","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);

    bookBDDS.push(["harry","potter","j","k","rowling","a","pedra","filosofal","ficção","guerra"]);
    bookBDDS.push(["harry","potter","j","k","rowling","a","câmara","secreta","ficção","guerra"]);
    bookBDDS.push(["harry","potter","j","k","rowling","o","prisoneiro","de","azkaban","ficção","guerra"]);
    bookBDDS.push(["harry","potter","j","k","rowling","a","cálice","de","fogo","ficção","guerra"]);

    bookBDDS.push(["harry","potter","j","k","rowling","a","ordem","da","fênix","ficção","guerra"]);
    bookBDDS.push(["harry","potter","j","k","rowling","o","enigma","de","príncipe","ficção","guerra"]);
    bookBDDS.push(["harry","potter","j","k","rowling","as","relíquias","da","morte","ficção","guerra"]);
    bookBDDS.push(["harry","potter","j","k","rowling","a","criança","almadiçoada","ficção","guerra"]);

    //segunda parte dos carrosséis
    bookBDDS.push(["quando","ninguém","está","olhando","suspense","alyssa","cole"]);
    bookBDDS.push(["querido","evan","hansen","ficção","suspense","drama","val", "emmich", "guerra","steven", "levenson", "benj","pasek","justin" ,"paul"]);
    bookBDDS.push(["garota","exemplar","suspense","gillian", "flynn"]);
    bookBDDS.push(["um","de","nós","está","mentindo","suspense","karen", "m", "mcmanus"]);
    bookBDDS.push(["garota","a","do","lago","suspense","charlie","donlea"]);

    bookBDDS.push(["o","amor","não","é","óbvio","romance","elayne", "baeta"]);
    bookBDDS.push(["verdades","difíceis","de","engolir","romance","samantha", "silvany"]);
    bookBDDS.push(["os", "cem", "melhores", "contos", "brasileiros", "do", "século","ficção","drama","italo" ,"moriconi"]);
    bookBDDS.push(["não", "quero", "ser", "como", "você","romance","lgbt","lgbtqia+","lgbtq","vinicius", "fernandes"]);
    bookBDDS.push(["querido", "ex","romance","lgbt","lgbtqia+","lgbtq","juan", "jullian"]);
    bookBDDS.push(["um", "milhão","de","finais","felizes","lgbtqia+","lgbtq","lgbt","vitor","martins"]);

    bookBDDS.push(["o","homem","de","giz","suspense","c","j","tudor"]);
    bookBDDS.push(["torto","arado","drama","itamar", "vieira", "junior","guerra"]);
    bookBDDS.push(["mulheres", "que", "correm", "com", "os", "lobos", "mitos", "e", "histórias", "do", "arquétipo", "da", "mulher", "selvagem","drama","itamar", "clarissa", "pinkola", "estés"]);
    bookBDDS.push(["tudo","é","rio","drama", "ficção", "carla", "madeira"]);
    bookBDDS.push(["a","hipótese","do","amor", "romance", "ali", "hazelwood"]);

    bookBDDS.push(["a","cinco","passos","de", "você","romance", "rachael", "lippincott"]);
    bookBDDS.push(["a","it","coisa","suspense", "stephen", "king"]);
    bookBDDS.push(["cinquenta", "tons", "de", "cinza","romance", "e", "james","l"]);
    bookBDDS.push(["jogador","número","um","1","ernest","cline","ficção","guerra"]);
    bookBDDS.push(["fallen","romance", "lauren", "kate"]);
    bookBDDS.push(["o", "código", "da", "vinci", "ficção", "suspense", "dan","brown","guerra"]);


    function tryMovie(input, movie) {
        for(var i = 0; i < input.length; i++) {
            for(var j = 0; j < movie.length; j++) {
                if((JSON.stringify(input[i])==JSON.stringify(movie[j]))== true)
                    return true;
            }
        }
    return false;
    }


    var bookSituation = [
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
    ]

    for(let i = 0; i < 70; i++) {
        bookSituation[i] = tryMovie(searchValue, bookBDDS[i]);
    }
    
    for(let i = 0; i < 70; i++) {
        if(bookSituation[i] == true) {
            contt++;
            lastSearch++;
        }
    }

    var poster = [
        "poster01","poster02","poster03","poster04","poster05","poster06","poster07","poster08","poster09","poster10","poster11","poster12","poster13","poster14","poster15","poster16","poster17","poster18","poster19","poster20","poster21","poster22","poster23","poster24","poster25","poster26","poster27","poster28","poster29","poster30","poster31","poster32","poster33","poster34","poster35","poster36"
    ];
    var button = [
        "button-link01","button-link02","button-link03","button-link04","button-link05","button-link06","button-link07","button-link08","button-link09","button-link10","button-link11","button-link12","button-link13","button-link14","button-link15","button-link16","button-link17","button-link18","button-link19","button-link20","button-link21","button-link22","button-link23","button-link24","button-link25","button-link26","button-link27","button-link28","button-link29","button-link30","button-link31","button-link32","button-link33","button-link34","button-link35","button-link36"
    ];
    var title = [
        "title-01","title-02","title-03","title-04","title-05","title-06","title-07","title-08","title-09","title-10","title-11","title-12","title-13","title-14","title-15","title-16","title-17","title-18","title-19","title-20","title-21","title-22","title-23","title-24","title-25","title-26","title-27","title-28","title-29","title-30","title-31","title-32","title-33","title-34","title-35","title-36"
    ];


    for(let i = 0; i < contt; i++) {
        var displayDiv =  " ";
        var setDisplay = document.getElementById(display[i]);
        setDisplay.setAttribute("style", displayDiv);
    }


    for(let i = 0; i < contt; i++) {
        if(bookSituation[0] == true) {
            var bookImg =  "images/Home/home-acclaimed-anne.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O diário de Anne Frank"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "ODDAF";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            searchedBooks.push("ODDAF");

            bookSituation[0] = false;
        } else if(bookSituation[1] == true) {
            var bookImg =  "images/Home/home-acclaimed-blood.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Com Sangue"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "CS";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            searchedBooks.push("CS");

            bookSituation[1] = false;
        } else if(bookSituation[2] == true) {
            var bookImg =  "images/Home/home-acclaimed-two.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os dois morrem no final"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "ODMNF";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            searchedBooks.push("ODMNF");

            bookSituation[2] = false;
        }   else if(bookSituation[3] == true) {
            var bookImg =  "images/Home/home-acclaimed-collector.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O Colecionador"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "OC";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            searchedBooks.push("OC");

            bookSituation[3] = false;
        }   else if(bookSituation[4] == true) {
            var bookImg =  "images/Home/home-acclaimed-verity.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Verity"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("V");

            var bookLink = "V";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[4] = false;
        }   else if(bookSituation[5] == true) {
            var bookImg =  "images/Home/home-acclaimed-evelyn.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os sete maridos de Evelyn Hugo"

            var bookLink = "OSMDEH";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("OSMDEH");

            bookSituation[5] = false;
        }   else if(bookSituation[6] == true) {
            var bookImg =  "images/Home/home-acclaimed-boys.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Mil beijos de garoto";

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("MBDG");

            var bookLink = "MBDG";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[6] = false;
        }else if(bookSituation[7] == true) {
            var bookImg =  "images/Home/home-brazil-memories.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Memórias póstumas de Brás Cubas"

            searchedBooks.push("MPDBC");

            var bookLink = "MPDBC";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[7] = false;
        }   else if(bookSituation[8] == true) {
            var bookImg =  "images/Home/home-brazil-sertoes.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os sertões"

            searchedBooks.push("OS");

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "OS";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[8] = false;
        }   else if(bookSituation[9] == true) {

            var bookImg =  "images/Home/home-brazil-folhas.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);
            
            document.getElementById(title[i]).innerHTML = "De folhas que resistem"

            var bookClass = "line line-md  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("DFQR");

            var bookLink = "DFQR";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[9] = false;
        }   else if(bookSituation[10] == true) {
            var bookImg =  "images/Home/home-brazil-muralha.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A muralha"

            searchedBooks.push("AM");

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "AM";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[10] = false;
        }   else if(bookSituation[11] == true) {
            var bookImg =  "images/Home/home-brazil-salto.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Um salto para o amor"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "USPOA";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            searchedBooks.push("USPOA");

            bookSituation[11] = false;
        }   else if(bookSituation[12] == true) {
            var bookImg =  "images/Home/home-brazil-encontro.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Enquanto não te encontro"

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("ENTE");

            var bookLink = "ENTE";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[12] = false;
        }   else if(bookSituation[13] == true) {
            var bookImg =  "images/Home/home-popullar-aurora.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Aurora ascende"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("AA");

            var bookLink = "AA";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[13] = false;
        }   else if(bookSituation[14] == true) {
            var bookImg =  "images/Home/home-popullar-mundo.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Admirável mundo novo"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("AMN");

            var bookLink = "AMN";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[14] = false;
        }   else if(bookSituation[15] == true) {
            var bookImg =  "images/Home/home-popullar-royal.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Vermelho, branco e sangue azul"

            searchedBooks.push("VBSA");

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "VBSA";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[15] = false;
        }   else if(bookSituation[16] == true) {
            var bookImg =  "images/Home/home-popullar-gelato.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Amor e gelato"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("AEG");

            var bookLink = "AEG";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[16] = false;
        }   else if(bookSituation[17] == true) {
            var bookImg =  "images/Home/home-popullar-silenciosa.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A paciente silenciosa"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("APS");

            var bookLink = "APS";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[17] = false;
        }   else if(bookSituation[18] == true) {
            var bookImg =  "images/Home/home-adptation-callme.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Me chame pelo seu nome"

            var bookClass = " line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("MCPSN");
            
            var bookLink = "MCPSN";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[18] = false;
        } else if(bookSituation[19] == true) {
            var bookImg =  "images/Home/home-adptation-stars.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A culpa é das estrelas"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("ACEDE");
            
            var bookLink = "ACEDE";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[19] = false;
        } else if(bookSituation[20] == true) {
            var bookImg =  "images/Home/home-adptation-simon.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Simon vs. A Agenda Homo Sapiens"

            searchedBooks.push("CAS");

            var bookLink = "CAS";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[20] = false;
        }   else if(bookSituation[21] == true) {
            var bookImg =  "images/Home/home-adptation-orgulho.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Orgulho e Preconceito"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("OEP");

            var bookLink = "OEP";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[21] = false;
        }   else if(bookSituation[22] == true) {
            var bookImg =  "images/Home/home-adptation-duna.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Duna"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("D");

            var bookLink = "D";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[22] = false;
        }   else if(bookSituation[23] == true) {
            var bookImg =  "images/Home/home-adptation-bird.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Caixa de Pássaros: Não abra os olhos"

            searchedBooks.push("CDP");

            var bookLink = "CDP";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[23] = false;
        }   else if(bookSituation[24] == true) {
            var bookImg =  "images/Home/home-autor-CO1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Carry on: Sempre em frente"

            searchedBooks.push("CO1");

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "CO1";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[24] = false;
        }   else if(bookSituation[25] == true) {
            var bookImg =  "images/Home/home-autor-CO2.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Carry on: O filho rebelde"

            searchedBooks.push("CO2");

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "CO2";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[25] = false;
        }   else if(bookSituation[26] == true) {
            var bookImg =  "images/Home/home-autor-CO3.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Carry on: Venha o que vier"

            searchedBooks.push("CO3");

            var bookLink = "CO3";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            bookSituation[26] = false;
        }   else if(bookSituation[27] == true) {
            var bookImg =  "images/Home/home-popullar-acaba.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "É Assim que Acaba"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("EAQA");

            var bookLink = "EAQA";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[27] = false;
        }   else if(bookSituation[28] == true) {
            var bookImg =  "images/Home/home-popullar-imperfeicoes.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Todas as suas (im)perfeições"

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("TASI");

            var bookLink = "TASI";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[28] = false;
        }   else if(bookSituation[29] == true) {
            var bookImg =  "images/Home/home-luvov.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "De Lukov, com amor"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("DLCA");

            var bookLink = "DLCA";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[29] = false;
        }   else if(bookSituation[30] == true) {
            var bookImg =  "images/Home/home-autor-EP.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Eleanor & Park"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("EP");

            var bookLink = "EP";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[30] = false;
        }   else if(bookSituation[31] == true) {
            var bookImg =  "images/Home/home-autor-FG.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Fan girl"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("FG");

            var bookLink = "FG";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[31] = false;
        }   else if(bookSituation[32] == true) {
            var bookImg =  "images/Home/home-autor-A.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Anexos"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("A");

            var bookLink = "A";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[32] = false;
        }   else if(bookSituation[33] == true) {
            var bookImg =  "images/Home/home-autor-9.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Novembro, 9"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("9N");

            var bookLink = "9N";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[33] = false;
        }   else if(bookSituation[34] == true) {
            var bookImg =  "images/Home/home-autor-verao.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Até o verão terminar"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("AOVT");

            var bookLink = "AOVT";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[34] = false;
        }   else if(bookSituation[35] == true) {
            var bookImg =  "images/Home/home-autor-mil.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "As mil partes do meu coração"

            searchedBooks.push("AMPDMC");

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "AMPDMC";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[35] = false;
        }   else if(bookSituation[36] == true) {
            var bookImg =  "images/Home/home-saga-H1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 1)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("HT1");

            var bookLink = "HT1";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[36] = false;
        }   else if(bookSituation[37] == true) {
            var bookImg =  "images/Home/home-saga-H2.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 2)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("HT2");

            var bookLink = "HT2";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[37] = false;
        }   else if(bookSituation[38] == true) {
            var bookImg =  "images/Home/home-saga-H3.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 3)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("HT3");

            var bookLink = "HT3";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[38] = false;
        }   else if(bookSituation[39] == true) {
            var bookImg =  "images/Home/home-saga-H4.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 4)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("HT4");

            var bookLink = "HT4";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[39] = false;
        }   else if(bookSituation[40] == true) {
            var bookImg =  "images/Home/home-saga-HP1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A pedra filosofal"

            searchedBooks.push("HP1");

            var bookClass = " line-md";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "HP1";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[40] = false;
        }   else if(bookSituation[41] == true) {
            var bookImg =  "images/Home/home-saga-HP2.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A câmara secreta"

            searchedBooks.push("HP2");

            var bookLink = "HP2";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[41] = false;
        }   else if(bookSituation[42] == true) {
            var bookImg =  "images/Home/home-saga-HP3.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: O prisoneiro Azkban"

            searchedBooks.push("HP3");

            var bookLink = "HP3";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[42] = false;
        }   else if(bookSituation[43] == true) {
            var bookImg =  "images/Home/home-saga-HP4.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A cálice de fogo"


            var bookLink = "HP4";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);
            searchedBooks.push("HP4");

            bookSituation[43] = false;
        }   else if(bookSituation[44] == true) {
            var bookImg =  "images/Home/home-saga-HP5.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A ordem da fênix"

            var bookClass = " line-md";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("HP5");

            var bookLink = "HP5";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[44] = false;
        }   else if(bookSituation[45] == true) {
            var bookImg =  "images/Home/home-saga-HP6.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: O enigma do príncipe"
            searchedBooks.push("HP6");
            var bookLink = "HP6";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[45] = false;
        }   else if(bookSituation[46] == true) {
            var bookImg =  "images/Home/home-saga-HP7.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: As relíquias da morte"
            searchedBooks.push("HP7");
            var bookLink = "HP7";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[46] = false;
        }   else if(bookSituation[47] == true) {
            var bookImg =  "images/Home/home-saga-HP8.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A criança amaldiçoada"
            searchedBooks.push("HP8");
            var bookLink = "HP8";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[47] = false;
        }   else if(bookSituation[48] == true) {
            var bookImg =  "images/Home/home-acclaimed-looking.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Quando ninguém está olhando"
            searchedBooks.push("QNEO");
            var bookLink = "QNEO";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[48] = false;
        }   else if(bookSituation[49] == true) {
            var bookImg =  "images/Home/home-acclaimed-hansen.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Querido Evan Hansen"
            searchedBooks.push("QEH");
            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "QEH";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[49] = false;
        }   else if(bookSituation[50] == true) {
            var bookImg =  "images/Home/home-acclaimed-girl.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Garota exemplar"
            searchedBooks.push("GE");
            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "GE";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[50] = false;
        }   else if(bookSituation[51] == true) {
            var bookImg =  "images/Home/home-acclaimed-lying.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Um de nós está mentindo"
            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);
            searchedBooks.push("UDNEM");
            var bookLink = "UDNEM";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[51] = false;
        }   else if(bookSituation[52] == true) {
            var bookImg =  "images/Home/home-acclaimed-lake.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);
            searchedBooks.push("AGDL");
            document.getElementById(title[i]).innerHTML = "A garota do lago"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "AGDL";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[52] = false;
        }   else if(bookSituation[53] == true) {
            var bookImg =  "images/Home/home-brazil-obvio.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O amor não é óbvio"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("OANEO");

            var bookLink = "OANEO";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[53] = false;
        }   else if(bookSituation[54] == true) {
            var bookImg =  "images/Home/home-brazil-engolir.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Verdades difíceis de engolir"

            var bookClass = " line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("VDDE");

            var bookLink = "VDDE";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[54] = false;
        }   else if(bookSituation[55] == true) {
            var bookImg =  "images/Home/home-brazil-contos.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os cem melhores contos brasileiros"

            var bookLink = "OCMCB";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            searchedBooks.push("OCMCB");

            bookSituation[55] = false;
        }   else if(bookSituation[56] == true) {
            var bookImg =  "images/Home/home-brazil-quero.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Não quero ser como você"

            var bookClass = " line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("NQSCV");


            var bookLink = "NQSCV";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[56] = false;
        }   else if(bookSituation[57] == true) {
            var bookImg =  "images/Home/home-brazil-ex.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Querido ex"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("QE");

            var bookLink = "QE";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[57] = false;
        }   else if(bookSituation[58] == true) {
            var bookImg =  "images/Home/home-brazil-finais.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Um milhão de finais felizes"

            searchedBooks.push("UMDFF");

            var bookLink = "UMDFF";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[58] = false;
        }   else if(bookSituation[59] == true) {
            var bookImg =  "images/Home/home-popullar-giz.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O homem de giz"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("OHDG");

            var bookLink = "OHDG";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[59] = false;
        }   else if(bookSituation[60] == true) {
            var bookImg =  "images/Home/home-popullar-tortoarado.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Torto arado"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("TA");

            var bookLink = "TA";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[60] = false;
        }   else if(bookSituation[61] == true) {
            var bookImg =  "images/Home/home-popullar-lobos.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Mulheres que correm com lobos"

            searchedBooks.push("MQCCL");

            var bookLink = "MQCCL";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[61] = false;
        }   else if(bookSituation[62] == true) {
            var bookImg =  "images/Home/home-popullar-rio.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Tudo é rio"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("TED");

            var bookLink = "TED";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[62] = false;
        }   else if(bookSituation[63] == true) {
            var bookImg =  "images/Home/home-popullar-hipotese.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A hipótese do amor"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("AHDA");

            var bookLink = "AHDA";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[63] = false;
        }   else if(bookSituation[64] == true) {
            var bookImg =  "images/Home/home-adptation-cinco.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A Cinco passos de você"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("ACPDV");

            var bookLink = "ACPDV";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[64] = false;
        }   else if(bookSituation[65] == true) {
            var bookImg =  "images/Home/home-adptation-it.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "IT: A coisa"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("IAC");

            var bookLink = "IAC";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[65] = false;
        }   else if(bookSituation[66] == true) {
            var bookImg =  "images/Home/home-adptation-50.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Cinquenta tons de cinza"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("CTDC");

            var bookLink = "CTDC";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[66] = false;
        }   else if(bookSituation[67] == true) {
            var bookImg =  "images/Home/home-adptation-1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Jogador número 1"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("JN1");

            var bookLink = "JN1";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[67] = false;
        }   else if(bookSituation[68] == true) {
            var bookImg =  "images/Home/home-adptation-fallen.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Fallen"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("F");

            var bookLink = "F";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[68] = false;
        }   else if(bookSituation[69] == true) {
            var bookImg =  "images/Home/home-adptation-vinci.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O código da Vinci"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            searchedBooks.push("OCDV");

            var bookLink = "OCDV";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("value", bookLink);

            bookSituation[69] = false;
        }

    }
    
    if(contt == 0) {
        const nextURL = 'erro-page.html';
        window.location.href = nextURL;
        window.location.assign(nextURL);
        window.location.replace(nextURL);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    searchMovie();
  });


const mediaQuery = window.matchMedia('(max-width: 750px)');
var btnShow = false;

function displayFilter(e) {
    if (e.matches) {
        document.getElementById("filter-options").style.display = "none"
        document.getElementById("show-filter-btn").style.display = "block"
    } else {
        document.getElementById("filter-options").style.display = "block"
        document.getElementById("show-filter-btn").style.display = "none"
    }
    btnShow = false;
}

// Register event listener
mediaQuery.addListener(displayFilter);

// Initial check
displayFilter(mediaQuery);

function showFilter() {
    if(btnShow) {
        document.getElementById("filter-options").style.display = "none"
        document.getElementById("show-filter-btn").style.opacity = "1"
        btnShow = false;
    } else {
        document.getElementById("filter-options").style.display = "block"
        document.getElementById("show-filter-btn").style.opacity = ".7"
        btnShow = true;
    }
}