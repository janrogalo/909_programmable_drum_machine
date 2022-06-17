





function sequencer(){
    const kick = new Tone.Player('/SFX/tom-808.wav').toDestination();
    const snare = new Tone.Player('/SFX/snare-pinch.wav').toDestination();
    const clap = new Tone.Player('/SFX/clap-analog.wav').toDestination();
    let index = 0;
let BPM = 120;

    const bpm = document.querySelector('.bpm')
    bpm.addEventListener('change', () => {Tone.Transport.bpm.value = Number(bpm.value);
      console.log(BPM);
    })




    Tone.Transport.scheduleRepeat(repeat,'16n')
    Tone.Transport.start();



    function repeat(){
        let step =  index % 16;

    let steps = document.querySelectorAll('.seqs');

    for ( let i = 0; i < 17; i++){
            if (Number(steps[i].dataset.id) === step+2){
                steps[i].classList.toggle('show');
                steps[i].style.left = `${60*(i-1)+9*(i-1)}px`;
            }
            else{
                steps[i].classList.remove('show');
            }


        }



        let selectedSfx = document.querySelector(`.kick  input:nth-child(${step + 1})`);
        let selectedSfx2 = document.querySelector(`.snare  input:nth-child(${step + 1})`);
        let selectedSfx3 = document.querySelector(`.clap  input:nth-child(${step + 1})`);


        if (selectedSfx.checked){
            kick.start();
        }
        if (selectedSfx2.checked){
            snare.start();
        }
        if (selectedSfx3.checked){
            clap.start();
        }
        index ++

    }
}

sequencer();
