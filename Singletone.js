class Singletone {
    static getInstanse() {
        if (!Singletone.getInstanse) {
            return Singletone.getInstanse = new Singletone;
        }
        return Singletone.getInstanse;
    }
}