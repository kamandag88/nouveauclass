    var userInput = 0;
    var storeId2 = "store" + userInput;
    var dwdstr = "";
    var valdwd = 0;
    var gscore = 0;
    var qscore = 0;

    function downloadd(){
        userInput= document.getElementById("userInput").value
        storeId2 = "store" + userInput;
        dwdstr = aop.getStore(storeId2);
        valdwd = JSON.parse(dwdstr);
        document.getElementById("namemo").innerHTML = valdwd.studentname;
        document.getElementById("classnumber").innerHTML = valdwd.classnumber;
        document.getElementById("gamescore").innerHTML = valdwd.gamescore;
        document.getElementById("questscore").innerHTML = valdwd.questscore;
        document.getElementById("statsminutes").innerHTML = valdwd.timeminutes;
        document.getElementById("statsseconds").innerHTML = valdwd.timeseconds;
        document.getElementById("statstens").innerHTML = valdwd.timetens;

        gscore = valdwd.gamescore.toString();
        qscore = valdwd.questscore.toString();

        if(gscore >= 500 &&){

        }
        }