
        // lets start this working
        // first get all languages list
        var voicelist = responsiveVoice.getVoices();
        var allVoices;
        for(var i=0; i<voicelist.length; i++){
            var voice = '<option value="'+voicelist[i].name+'">'+voicelist[i].name+'</option>';
            allVoices = allVoices + voice;
        }
        document.getElementById("voice-list").innerHTML = allVoices;
        // get controls in js variables
        var start = document.getElementById("start");
        var pause = document.getElementById("pause");
        var resume = document.getElementById("resume");
        var canc = document.getElementById("canc");
        var rate = document.getElementById("rate");
        rate.oninput = function() {
            document.getElementById("rate-value").innerHTML = rate.value;
        }
        start.onclick = function() {
            var text = document.getElementById("text").value;
            var lang = document.getElementById("voice-list").value;
            var rateValue = document.getElementById("rate").value;
            responsiveVoice.speak(text, lang, {rate: rateValue});
        }
        pause.onclick = function() {
            if(responsiveVoice.isPlaying()){
                responsiveVoice.pause();
                pause.style.display = "none";
                resume.style.display = "inline";
            }
        }
        resume.onclick = function() {
            if(responsiveVoice.isPlaying()){
                responsiveVoice.resume();
                pause.style.display = "inline";
                resume.style.display = "none";
            }
        }
        canc.onclick = function() {
            responsiveVoice.cancel();
        }