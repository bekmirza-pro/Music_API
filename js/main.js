var elbolalik = document.querySelector('#bolalik'),
    elmillioner = document.querySelector('#millioner'),
    eldemo = document.querySelector('#demo'),
    elnostalgia = document.querySelector('#nostalgia'),
    elxat = document.querySelector('#xat'),
    elporalab = document.querySelector('#poralab'),
    elBtn = document.querySelector('.btn_music'),
    elLi = document.querySelector('#li')

       
    var rec = new webkitSpeechRecognition();
    rec.lang = 'uz-UZ';

    rec.onerror = function (err) {
        console.log(err, 'error');
    };
    
    rec.onend = function () {
        console.log('Aloqa tugadi');
    };

   

    rec.onresult = function (evt) {
    
        var command = evt.results[0][0].transcript;
        console.log(command)

        elLi.textContent = null;

        if(command == 'Bolalik' || command == 'bolalik'){
            elbolalik.play()
        } else if (command == 'Millioner' || command == 'millioner'){
            elmillioner.play()
        } else if (command == 'Demo' || command == 'demo'){
            eldemo.play()

        } else if (command == 'Nostalgia' || command == 'nostalgia'){
            elnostalgia.play()
            
        } else if (command == 'Xat' || command == 'xat'){
            elxat.play()
            
        } else if (command == 'Poralab' || command == 'poralab'){
            elporalab.play()
            
        } else {
            elLi.textContent = '(Nothing)'
        }
         ;


        if(command == 'stop'){
            elbolalik.pause();
            elmillioner.pause();
            eldemo.pause();
            elnostalgia.pause();
            elxat.pause();
            elporalab.pause();
        }
       
    }
    

    elBtn.addEventListener('click', function(){
        rec.start();
    })
