import { action, makeAutoObservable } from 'mobx';
import { createNavButtonReq, deleteNavButtonReq, getTextsReq, updateTextReq } from '../../utils/requests/admin';
import contentStore from '../contentBlocks/contentStore';
import navBarStore from '../navBarStore';

class AdminPageStore {
    

    constructor() {
        makeAutoObservable(this);
    }
    
    updateText = action(async (textId, newTitle) => {
        const response = await updateTextReq(textId, newTitle)
        switch(response.status) {
            case 200: {
                contentStore.getTexts()
            } 
        }
        
    })

    deleteNavButton = action(async (buttonId) => {
        const response = await deleteNavButtonReq(buttonId)
        switch(response.status) {
            case 200: {
                navBarStore.getNavButtons()
            } 
        }
        
    })
    
    

}

const adminPageStore = new AdminPageStore();

export default adminPageStore;
