let questions = [
                ['¿Quien cuenta con una skin en el juego Fortnite? ', 'TheGrefg'],
                ['¿Streamer mas grande a nivel hispanohablante? ', 'Rubius'],
                ['¿Streamer Femenino mas grande a nivel hispanohablante? ', 'Cristinini'],
                ['¿Nombre del programa que tiene como copresentadores a 2 grandes streamers? ', 'Hoy no se Sale'],
                ['¿Que streamer figura en el Libro Guinness? ', 'TheGreft'],
                ['¿Cantidad de visualizaciones que figuran en el Libro Guinness? ', '2.468.688'],
                ['¿Quien logro hacer un cortometraje en directo? ', 'Ibai'],
                ['¿Nombre del cortometraje hecho en 2020 en colaboracion con Netflix y PlayStation España? ', 'Unboxing'],
                ['¿QUien dejo su trabajo de editor en el Real Madrid? ', 'ElXokas'],
                ['¿Nombre del streamer que tiene participaciones en videojuegos? ', 'Rubius'],
                ['¿Quien esta en los programas YuGamers (VodafoneYu) y Zapeando (La Sexta)? ', 'Cristinini'],
                ['¿Streamer destacado en el WoW? ', 'ElXokas'],
                ['¿QUien dejo su trabajo de editor en el Real Madrid? ', 'ElXokas']
],
question,answer,
questok=0,
goodAns=0;

makeQuestion();

document.getElementById('but').addEventListener('click', function(){
let entry = document.getElementById('dato').value;

if (entry == '' || entry == null ) 
{
alert("ingrese una respuesta");
return;   
} 

if(entry.toLowerCase() == answer || entry.toUpperCase() == answer) 
{
    goodAns++;
}

if(questok < 13)
{
makeQuestion();
}
else
{
showResult();
}


});



function makeQuestion()
{
let aux;

aux= questions.splice(AleatoryNumber(0,questions.length -1), 1);
question= aux[0][0];
answer = aux[0][1];

document.getElementById('ques').innerHTML= question.fontcolor("pink").fontsize(25);
document.getElementById('dato').value='';


questok++;
};

function showResult()
{
    let result;
    switch(goodAns)
    {
        case 0:
            result= "No acertase ninguna, intenta darle una oportunidad a Twitch!!";
            showPictureIncorrect();
            alert(result);
            break;
        case 1:
            result= "Respuesta 1/13 correcta, bien hech";
            showPictureIncorrect();
            alert(result);
            break;
        case 2:
            result= "Respuesta 2/13 correcta, bien hecho";
            showPictureIncorrect();
            alert(result);
            break;
        case 3:
            result= "Respuesta 3/13 correcta, bien hecho";
            showPictureIncorrect();
            alert(result);
            break;
        case 4:
            result= "Respuesta 4/13 correcta, bien hecho";
            showPictureIncorrect();
            alert(result);
            break;
        case 5:
            result= "Respuesta 5/13 correcta, bien hecho";
            showPictureIncorrect();
            alert(result);
            break;
        case 6:
            result= "Respuesta 6/13 correcta, bien hecho";
            showPictureCorrect();
            alert(result);
            break;
        case 7:
            result= "Respuesta 7/13 correcta, bien hecho";
            showPictureCorrect();
            alert(result);
            break;
        case 8:
            result= "Respuesta 8/13 correcta, bien hecho";
            showPictureCorrect();
            alert(result);
            break;
        case 9:
            result= "Respuesta 9/13 correcta, bien hecho";
            showPictureCorrect();
            alert(result);
            break;
        case 10:
            result= "Respuesta 10/13 correcta, bien hecho";
            showPictureCorrect();
            alert(result);
            break;
        case 11:
            result= "Respuesta 11/13 correcta, bien hecho";
            showPictureCorrect();
            alert(result);
            break;
        case 12:
            result= "Respuesta 12/13 correcta, bien hecho";
            showPictureCorrect();
            alert(result);
            break;
        case 13:
            result= "Respuesta 13/13 correcta, bien hecho. Has acertado todas las respuestas";
            showPictureCorrect();
            alert(result);
            break;
}
document.getElementById('resolution').innerHTML = result.bold().fontsize(25);
};
function AleatoryNumber(min , max)
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

