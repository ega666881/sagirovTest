import { action, makeAutoObservable } from 'mobx';
import { createNavButtonReq, getTextsReq, updateNavButtonReq, updateTextReq } from '../../utils/requests/admin';
import contentStore from '../contentBlocks/contentStore';
import navBarStore from '../navBarStore';

class AddNavButtonStore {
    formData = {}    


    constructor() {
        makeAutoObservable(this);
    }

    setFormData = action((key, value) => {
        this.formData[key] = value
    })

    createNavButton = action(async () => {
        const response = await createNavButtonReq(this.formData.title, Number(this.formData.index))
        switch(response.status) {
            case 201: {
                navBarStore.getNavButtons()
            } 
        }
        
    })

    updateNavButton = action(async () => {
        const response = await updateNavButtonReq(this.formData.id, this.formData.title, this.formData.index)
        switch(response.status) {
            case 200: {
                navBarStore.getNavButtons()
            } 
        }
        
    })


}

const addNavButtonStore = new AddNavButtonStore();

export default addNavButtonStore;
