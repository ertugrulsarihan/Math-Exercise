var operation = ["/", "+", "-", "*"];

function randomVal() {

    let random1 = Number(Math.floor(Math.random() * 10) + 1);
    let random2 = Number(Math.floor(Math.random() * 10) + 1);
    console.log(typeof random1);
    console.log(typeof random2);

    if (random1 < random2) {
        randomVal();
    } else {
        var inp = document.getElementById("input");
        inp.value = null;
        document.getElementById("result").innerHTML = null;
        document.getElementById("correct").innerHTML = null;
        document.getElementById('Num1').innerHTML = random1;
        document.getElementById('Num2').innerHTML = random2;
        var operation1 = Math.floor(Math.random() * operation.length);
        tiktok();


        if (operation1 === 0) {
            if (random1 % random2 !== 0) {
                randomVal();
            } else {
                var resultDiv = random1 / random2;
                resultDiv = Number(resultDiv);
                document.getElementById("result").innerHTML = resultDiv;
                console.log(typeof(resultDiv));
                document.getElementsByTagName('h2')[0].style.display = 'none';
                console.log(document.getElementById("result").innerHTML);
                document.getElementById("operation").innerHTML = "/";
            }
        } else if (operation1 === 1) {
            document.getElementById("result").innerHTML = random1 + random2;
            document.getElementsByTagName('h2')[0].style.display = 'none';
            console.log(document.getElementById("result").innerHTML);
            document.getElementById("operation").innerHTML = "+";
        } else if (operation1 === 2) {
            document.getElementById("result").innerHTML = random1 - random2;
            document.getElementsByTagName('h2')[0].style.display = 'none';
            console.log(document.getElementById("result").innerHTML);
            document.getElementById("operation").innerHTML = "-";
        } else if (operation1 === 3) {
            document.getElementsByTagName('h2')[0].style.display = 'none';
            document.getElementById("result").innerHTML = random1 * random2;
            console.log(document.getElementById("result").innerHTML);
            document.getElementById("operation").innerHTML = "x";

        }
    }
}

function giveAnswer() {
    var correct = document.getElementById("correct");
    var num1 = document.getElementById("input").value;
    console.log(num1);
    var result = document.getElementById("result").innerHTML;
    console.log(result);

    if (num1 === result) {
        correct.innerHTML = "Congratulations!";
        playclap();

    } else if (num1 == "") {
        correct.innerHTML = "Timeout!!";
    } else {
        playfail();
        correct.innerHTML = "Wrong Answer Try Again!";

    }

    document.getElementsByTagName('h2')[0].style.display = 'inline';


}

// function clearResult() {

//     var resultS = document.getElementById("result");
//     var inp = document.getElementById("input");
//     var correct = document.getElementById("correct");
//     var num1 = document.getElementById("input");
//     var random1S = document.getElementById('Num1');
//     var random2S = document.getElementById('Num2');
//     var operation = document.getElementById("operation");
//     operation.innerHTML = null;
//     correct.innerHTML = null;
//     num1.innerHTML = null;
//     random1S.innerHTML = null;;
//     random2S.innerHTML = null;
//     inp.value = null;
//     resultS.innerHTML = null;
// }
