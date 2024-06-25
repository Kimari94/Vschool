const statuses = ['Powered Up', 'Big', 'Small', 'Dead'];


class Player {
    constructor(name, totalCoins = 0, status = statuses[1], hasStar = false) {
        this.name = name || this.setName();
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }

    setStatus(newStatus) {
        if (statuses.includes(newStatus)) {
            this.status = newStatus;
        } else {
            throw new Error('Invalid Status Detected');
        }
    }

    gotStarPower() {
        const gotStar = Math.floor(Math.random() * 4)
        if (gotStar === 2){
            this.hasStar = true;
            console.log('Congratulations! You got a Star!')
        }

    }

    setName() {
        const namePicked = Math.floor(Math.random() * 2);
        if (namePicked === 0) {
            this.name = 'Mario'
        } else {
            this.name = 'Luigi'
        }
        return this.name;
    }

    gotHit() {
        if (this.hasStar === true) {
            console.log('Your star protected you');
            this.hasStar = false;
        } else {
            const currentStatus = statuses.indexOf(this.status)
            if (currentStatus < statuses.length - 1)
            this.status = statuses[currentStatus + 1];
        }
    }

    gotPowerup() {
        const currentStatus = statuses.indexOf(this.status);
        if (currentStatus < statuses.length - 1) {
            this.status = statuses[currentStatus + 1];
        }
    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        const playerObject = {
        Name: this.name,
        Status: this.status,
        Coins: this.totalCoins
        }

        console.log(`Name: ${playerObject.Name}`);
        console.log(`Status: ${playerObject.Status}`);
        console.log(`Coins: ${playerObject.Coins}`)
    }


    randomRange() {
        const randomNumber = Math.floor(Math.random() * 3)
        if (this.status !== statuses.length - 1) {
            if (randomNumber === 0) {
                this.gotHit();
            } else if (randomNumber === 1) {
                this.gotPowerup();
            } else {
                this.addCoin();
            }
        } else {
            console.log(`${player.name} has died! Game Over!`)
            clearInterval(interval);
        }
    }
}

function startgame(){
    const player = new Player();
    console.log(`${player.name} is going to save the princess`)

    const gameInterval = setInterval(() => {
        player.randomRange();
        player.gotStarPower();
        player.print();
        if (player.status === statuses[3]){
            console.log(`${player.name} has died! Game Over!`);
            clearInterval(gameInterval);
        }
    }, 1000);

}

startgame();