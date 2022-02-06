function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/807KFFX-5/model.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}