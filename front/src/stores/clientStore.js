import { action, makeAutoObservable } from 'mobx';

class ClientStore {

    isMobile = false

    constructor() {
        makeAutoObservable(this);
    }
    

    setIsMobile = action((newValue) => {
        this.isMobile = newValue
    })

}

const clientStore = new ClientStore();

export default clientStore;
