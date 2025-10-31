import { action, makeAutoObservable } from 'mobx';


class NavBarStore {
    buttons = [
        {
            id: 1,
            title: 'Главная',
            url: '/'
        },
        {
            id: 2,
            title: 'Каталог',
            url: '/'
        },
        {
            id: 3,
            title: 'Бренды',
            url: '/'
        },
        {
            id: 4,
            title: 'Доставка и оплата',
            url: '/'
        },
        {
            id: 5,
            title: 'Помощь',
            url: '/'
        },
        {
            id: 6,
            title: 'Компания',
            url: '/'
        },
    ]

    activeButtonId = 0

    constructor() {
        if (this.buttons.length > 0) {
            this.activeButtonId = this.buttons[0].id
        }   
        makeAutoObservable(this);
    }

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
