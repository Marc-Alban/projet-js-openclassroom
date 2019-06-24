class Timer
 {
    // Constructor
    constructor(tempsTimer, display)
     {
        this.display = display
        this.tempsTimer = tempsTimer
        this.btnValider = document.querySelector('.btnValider')
        this.timeElt = document.querySelector('#timeElt')
        this.textElt = document.querySelector('#textElt')
        this.information = document.querySelector('#information')
        this.btnStop = document.querySelector('#btnAnnuler')
        this.textAnnulationElt = document.querySelector('#stopReservation')
        this.time = document.querySelector('#time')
        this.countStorage = sessionStorage.getItem('countStorage')
        this.startTimer()
    }

    // fonctionnallitées
    startTimer()
     {

        const count = setInterval(() => {

            this.minutes = parseInt(this.tempsTimer / 60,10)
            this.seconds = parseInt(this.tempsTimer % 60,10)

            this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
            this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds

            sessionStorage.setItem('secondes', this.seconds)
            sessionStorage.setItem('minutes', this.minutes)

            this.display.textContent = ' ' + this.minutes + " : " + this.seconds;

            this.tempsTimer--

            if (this.tempsTimer < 0) {
                this.textElt.style.display = 'none'
                this.timeElt.style.display = 'block'
                this.tempsTimer = 0
            }
        }, 1000)

        this.btnStop.addEventListener('click', () => {
            this.textElt.style.display = 'none'
            this.timeElt.style.display = 'none'
            this.time.style.display = 'none'
            this.textAnnulationElt.style.display = 'block'
            clearInterval(count)
        })
        
        this.btnValider.addEventListener('click', (e) => {
            if (this.countStorage <= 10) {
                if (this.tempsTimer > 0) {
                    clearInterval(count)
                    this.textElt.style.display = 'block'
                    this.time.style.display = 'block'
                    this.timeElt.style.display = 'none'
                    this.textAnnulationElt.style.display = 'none'
                }
            }
        })
    }
}

document.querySelector('.btnValider').addEventListener('click', () => {
    let time = new Timer(1200, document.querySelector('#time'))
    
})
