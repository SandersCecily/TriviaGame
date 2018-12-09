$(function() {
    //create arrays for questions, options and answers
    let questions = ["What is Catharsis?","What is Denial?","What is Displacement?","What is Dualism?","What is Ego?","What is Id?","What is Super Ego?","What is Psychosis?","What is Undoing?","What is Neuroses?"];
    let rightans = ["Emotional Release",  "The ability to pretend a situation doesn't exist", "Transfer of emotion from one situation to another", "Mind and Body are two different things","The mind between the conscious and unconcious","The unconcious mind","The conscious mind","Severe mental disturbance","Trying to feel better from what you're ashamed of","A personality disorder"];
    let options = [["Emotional Release","Therapy in a cathedral","A classification of mental disorders"],
                    ["A river", "The ability to pretend a situation doesn't exist","A taxing event causing distress inside of a person"],
                    ["A taxing event causing distress inside of a person", "A change in memory to better suit the person's mental state", "Transfer of emotion from one situation to another",],
                    ["888","---","Mind and Body are two different things"],
                    ["The mind between the conscious and unconcious","888","000"],
                    ["---","The unconcious mind","Batman"],
                    ["Superman", "---", "The conscious mind"],
                    ["000","888","Severe mental disturbance"],
                    ["---","Trying to feel better from what you're ashamed of","000"],
                    ["000","A personality disorder","888"],
                    ];
    let correct = 0;
    let incorrect = 0;
    let timer = 100;

    //create form
    let form = $("<form>");
    //create individual divs
    //give individual ids
    for (let i = 0; i < rightans.length; i++){
        let div = $("<div>");
        div.attr("id", "Q"+i);
        //create a p tag
        //put in question
        //append p tag
        let p = $("<p>");
        p.text(questions[i]);
        div.append(p);
    //create input tags
        let inputa = $("<input type='radio'>");
        let inputb = $("<input type='radio'>");
        let inputc = $("<input type='radio'>");

    //add value att and name
        inputa.attr("value", options[i][0]);
        inputb.attr("value", options[i][1]);
        inputc.attr("value", options[i][2]);
        inputa.attr("name", "q"+i);
        inputb.attr("name", "q"+i);
        inputc.attr("name", "q"+i);

    //create label tag
        let labela = $("<label>");
        let labelb = $("<label>");
        let labelc = $("<label>");

        labela.text(options[i][0]);
        labelb.text(options[i][1]);
        labelc.text(options[i][2]);
    //break tag
        let breaker = $("\n");

        div.append(inputa);
        div.append(labela);
        div.append(breaker);
        div.append(inputb);
        div.append(labelb);
        div.append(breaker);
        div.append(inputc);
        div.append(labelc);
        div.append(breaker);
        form.append(div);
    }
    let sumbit = $("<button type='submit'>");
    sumbit.text("Done!");
    form.append(sumbit);
    $(".questionbox").append(form);

    let countme = setInterval(decrement, 1000);


    function decrement () {
        timer--;
        $(".counter").text(timer);
        if (timer === 0){
            clearInterval(countme);
            finished();
        }
    }

    //check answers.
    sumbit.click(function(){
        event.preventDefault();
        finished();
    });

    function finished () {
        clearInterval(countme);
        for(let l= 0; l<questions.length; l++){
            let divvy = "#Q" + l;
            let chose = $(divvy+" input:radio:checked").val();
            //reference rightans v checked radio button value
            if (rightans[l]===chose){
            //if true add to correct
                correct++;
            }
            //else incorrect add to incorrect
            else{
                incorrect++;
            }
        }
        $(".questionbox").empty();
        $(".questionbox").text("You answered : " + correct + " correct and you answered : "
        + incorrect+ " incorrectly.");
    }
});