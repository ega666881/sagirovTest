import { action, makeAutoObservable } from 'mobx';
import { firstContentBlockAssets } from '../../components/firstContentBlock/assets';
import contentStore from './contentStore';

class RightBlockStore {

    gridItems = []
    constructor() {
        makeAutoObservable(this);
    }
    
    getGridItems = action(() => {
        this.gridItems = [
            {
                iconUrl: firstContentBlockAssets.phoneIcon,
                title: contentStore.texts.find(text => text.name == 'product1')?.title,
                cost: '24 490 ₽'
            },
            {
                iconUrl: firstContentBlockAssets.usbModule,
                title: contentStore.texts.find(text => text.name == 'product3')?.title,
                cost: '24 490 ₽'
            },
            {
                iconUrl: firstContentBlockAssets.titanStorage,
                title: contentStore.texts.find(text => text.name == 'product2')?.title,
                cost: '24 490 ₽'
            },
            {
                iconUrl: firstContentBlockAssets.multimetr,
                title: contentStore.texts.find(text => text.name == 'product4')?.title,
                cost: '24 490 ₽'
            },
        ]
    })

    

}

const rightBlockStore = new RightBlockStore();

export default rightBlockStore;
