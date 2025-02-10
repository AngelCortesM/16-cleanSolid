interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): number;
}

interface RunningBird extends Bird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {
    return 100;
  }
  public eat() {}
}

class Hummingbird implements Bird, FlyingBird {
  public fly() {
    return 50;
  }
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swim(): void {}
}
