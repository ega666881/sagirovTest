import { action, makeAutoObservable } from 'mobx';
import { firstContentBlockAssets } from '../../components/firstContentBlock/assets';
import { getTextsReq } from '../../utils/requests/admin';
import rightBlockStore from './rightBlockStore';

class ContentStore {
    texts = []

    constructor() {
        makeAutoObservable(this);
    }
    
    getTexts = action(async () => {
        const response = await getTextsReq()
        switch(response.status) {
            case 200: {
                const data = await response.data
                this.texts = data
                rightBlockStore.getGridItems()
            } 
        }
        
    })

    

}

const contentStore = new ContentStore();

export default contentStore;
