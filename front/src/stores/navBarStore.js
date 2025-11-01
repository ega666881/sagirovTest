import { action, makeAutoObservable } from 'mobx';
import { getNavButtonsReq } from '../utils/requests/admin';


class NavBarStore {
    buttons = []

    activeButtonId = 0

    constructor() {
        if (this.buttons.length > 0) {
            this.activeButtonId = this.buttons[0].id
        }   
        makeAutoObservable(this);
    }

    getNavButtons = action(async () => {
        const response = await getNavButtonsReq()
        switch(response.status) {
            case 200: {
                const data = await response.data
                this.buttons = data
            } 
        }
        
    })

    addNavButton = action((data) => {
        this.buttons.unshift({...data})
    })

    getStylesButton(buttonId) {
        if (buttonId === this.activeButtonId) {
            return {
                textColor: 'white',
                backgroundColor: '#17BE79'
            }

        } else {
            return {
                textColor: 'black',
                backgroundColor: 'none'
            }
        }
    }

    setActiveButton = action((id) => {
        this.activeButtonId = id
    })

}

const navBarStore = new NavBarStore();

export default navBarStore;
