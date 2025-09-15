var yourname = document.getElementById("name")
var loversname = document.getElementById("loversname")
var texterror = document.getElementById('error1')
var texterror1 = document.getElementById('error2')
var img2 = document.getElementById("imgcenter")
function claculator() {

    document.getElementById("yournameoutput").innerHTML = yourname.value;
    document.getElementById("loversoutput").innerHTML = loversname.value;

    document.getElementById("calbtn").setAttribute("disabled", "true")

    if (yourname.value.trim() == '' || loversname.value == "") {
        texterror.innerHTML = " enter your name.";
        document.getElementById("yournameoutput").style.display = "none";
        document.getElementById("out1").style.display = "none";
    }
    else {
        var a = parseInt(Math.random() * 100);
        speak(document.getElementById("out1").innerHTML = a + "%");
         if (a <= 49) {
        out1.style.color = "red";
        speak("not a good match")
    } else if (a > 49 && a < 90) {
        out1.style.color = "yellow";
        speak("A good connection")
    }
    else {
        out1.style.color = 'green'
        speak("An excellent match!")
    }
    }

    if (loversname.value.trim() == '' || yourname.value == "") {
        texterror1.innerHTML = "enter your lover's name.";
        document.getElementById("loversoutput").style.display = "none";
        document.getElementById("out1").style.display = "none";
    }
    yourname.value = "";
    loversname.value = "";

}

function refersh() {
    document.getElementById("out1").innerHTML = '';
    document.getElementById("yournameoutput").innerHTML = '';
    document.getElementById("loversoutput").innerHTML = '';
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    speak("Refersh")
    document.getElementById("calbtn").removeAttribute("disabled")
    out1.vlaue = "";
    yourname.value = "";
    loversname.value = "";
    texterror.value = "";
    texterror1.value = "";
}
function speak(text) {
    let speak_text = new SpeechSynthesisUtterance(text)
    speak_text.rate = 0.9;
    speak_text.pitch = 10;
    speak_text.volume = 10;
    speak_text.lang = "EN US1"

    window.speechSynthesis.speak(speak_text)
}
function wishme() {
    speak("welcome to the Love Calculator! ")
}
window.addEventListener("load", () => {
    wishme()
})




