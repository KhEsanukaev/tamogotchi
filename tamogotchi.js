/*
const tamagotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
}
console.log(tamagotchi);

tamagotchi.getStatus = function () {
    return `Имя: ${tamagotchi.name}${tamagotchi.meal}${tamagotchi.energy}${tamagotchi.mood}`
}
*/

const tamagotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
  
    getStatus() {
        

      console.log(`Имя: ${this.name}, Еда: ${this.getFoodStatus()}, Энергия: ${this.getEnergyStatus()}, Настроение: ${this.getMoodStatus()}`);
    },
  
    setName(newName) {
      this.name = newName;
    },
  
    eat() {
      if (this.meal < 5) {
        this.meal++;
        
      }
      this.mood--;
    },
  
    sleep() {
      if (this.energy < 5) {
        this.energy++;
       
      }
      this.meal--;
    },
  
    play() {
      if (this.mood < 5) {
        this.mood++;
        
      }
      this.energy--;
    },
  
    getFoodStatus() {
      return this.meal < 3 ? 'Я голоден' : 'Я не голоден';
    },
  
    getEnergyStatus() {
      return this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
    },
  
    getMoodStatus() {
      return this.mood < 3 ? 'Мне скучно' : 'Мне весело';
    },
  
    checkDeath() {
      if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
        console.log(`${this.name} умер :(`);
      }
    },
  
    
  };
  
  // Тестирование методов
  tamagotchi.getStatus(); // Определение состояния
  tamagotchi.setName('Khalid');
  tamagotchi.getStatus(); // Проверкаб если имя поменялось
  
  tamagotchi.eat();
  tamagotchi.getStatus(); // Проверить еду
  tamagotchi.sleep();
  tamagotchi.getStatus(); // Проверить сон
  tamagotchi.play();
  tamagotchi.getStatus(); // Проверить игру
  
