class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.ishealthy = true;
  }

  hunt() {
    this.food += 2;
  }

  eat() {
    if (this.food === 0) {
      this.ishealthy = false;
    } else {
      this.food -= 1;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
    if (this.getAvailableSeatCount() >= 1) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].ishealthy === false) {
        return true;
      } else {
        return false;
      }
    }
  }
  totalFood() {
    let total = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      total += this.passengers[i].food;
    }
    return total;
  }
}
