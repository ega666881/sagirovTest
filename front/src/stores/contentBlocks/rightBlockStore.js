import { action, makeAutoObservable } from 'mobx';
import { firstContentBlockAssets } from '../../components/firstContentBlock/assets';

class RightBlockStore {

    gridItems = [
        {
            iconUrl: firstContentBlockAssets.phoneIcon,
            title: 'Аппаратный кошелёк SecuX Nifty NFT',
            cost: '24 490 ₽'
        },
        {
            iconUrl: firstContentBlockAssets.usbModule,
            title: 'Аппаратный ключ Yubikey 5C Nano',
            cost: '24 490 ₽'
        },
        {
            iconUrl: firstContentBlockAssets.titanStorage,
            title: 'Устройство для записи seed фразы Cryptotag Thor',
            cost: '24 490 ₽'
        },
        {
            iconUrl: firstContentBlockAssets.multimetr,
            title: 'Аппаратный кошелёк Trezor T BlackT',
            cost: '24 490 ₽'
        },
    ]

    constructor() {
        makeAutoObservable(this);
    }
    

    

}

const rightBlockStore = new RightBlockStore();

export default rightBlockStore;
