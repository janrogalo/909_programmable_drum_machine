
function sequencer(){
    const kick = new Tone.Player('assets/SFX/kick.wav').toDestination();
    const snare = new Tone.Player('assets/SFX/snare.wav').toDestination();
    const clap = new Tone.Player('assets/SFX/clap.wav').toDestination();
    const hightom = new Tone.Player('assets/SFX/hightom.wav').toDestination();
    const midtom = new Tone.Player('assets/SFX/midtom.wav').toDestination();
    const lowtom = new Tone.Player('assets/SFX/lowtom.wav').toDestination();
    const hihat = new Tone.Player('assets/SFX/hihat.wav').toDestination();
    const cymbal = new Tone.Player('assets/SFX/cymbal.wav').toDestination();


    let index = 0;
    let BPM = 120;

    const bpm = document.querySelector('.bpm')
    bpm.addEventListener('change', () => {Tone.Transport.bpm.value = Number(bpm.value);
      console.log(BPM);
    })

    Tone.Transport.scheduleRepeat(repeat,'16n');
    Tone.Transport.timeSignature = 4;


    const start = document.querySelector('.start');
    start.addEventListener('click', ()=> {
        Tone.Transport.start();
        Tone.start();
    });

    const stop = document.querySelector('.stop');
   stop.addEventListener('click', ()=>{
       Tone.Transport.stop();
       // Tone.Transport.position('1n');
   });



    function repeat(){
    let step =  index % 16;
    let steps = document.querySelectorAll('.seqs');

    for ( let i = 0; i < 17; i++){
            if (Number(steps[i].dataset.id) === step+2){
                steps[i].classList.toggle('show');
                steps[i].style.left = `${64+50*(i-1)+9*(i-1)}px`;
            }
            else{
                steps[i].classList.remove('show');
            }
        }

        let selectedSfx = document.querySelector(`.kick  input:nth-child(${step + 1})`);
        let selectedSfx2 = document.querySelector(`.snare  input:nth-child(${step + 1})`);
        let selectedSfx3 = document.querySelector(`.clap  input:nth-child(${step + 1})`);
        let selectedSfx4 = document.querySelector(`.hightom  input:nth-child(${step + 1})`);
        let selectedSfx5 = document.querySelector(`.midtom  input:nth-child(${step + 1})`);
        let selectedSfx6 = document.querySelector(`.lowtom  input:nth-child(${step + 1})`);
        let selectedSfx7 = document.querySelector(`.hihat  input:nth-child(${step + 1})`);
        let selectedSfx8 = document.querySelector(`.cymbal  input:nth-child(${step + 1})`);



        if (selectedSfx.checked){
            kick.start();
        }
        if (selectedSfx2.checked){
            snare.start();
        }
        if (selectedSfx3.checked){
            clap.start();
        }
        if (selectedSfx4.checked){
            hightom.start();
        }
        if (selectedSfx5.checked){
            midtom.start();
        }
        if (selectedSfx6.checked){
            lowtom.start();
        }
        if (selectedSfx7.checked){
            hihat.start();
        }
        if (selectedSfx8.checked){
            cymbal.start();
        }
        index ++

    }
}

sequencer();
