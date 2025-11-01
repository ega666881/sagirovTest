import { Knex } from "knex";
import { tableNames } from '../../src/database/database.constants'


export async function seed(knex: Knex): Promise<void> {
    await knex(tableNames.texts).del();

    await knex(tableNames.texts).insert([
        { name: "mainHeading", title: "Интернет-магазин оборудования для защиты криптоактивов" },
        { name: "mainHeading2", title: "для защиты криптоактивов" },
        { name: "subtitle", title: "Сryptoro - официальный реселлер, самый большой выбор в России" },
        { name: "product1", title: "Аппаратный кошелёк SecuX Nifty NFT" },
        { name: "product2", title: "Устройство для записи seed фразы Cryptotag Thor" },
        { name: "product3", title: "Аппаратный ключ Yubikey 5C Nano" },
        { name: "product4", title: "Аппаратный кошелёк Trezor T Black" },
        { name: "10+", title: "10+" },
        { name: "50+", title: "50+" },
        { name: "marketExperience", title: "лет на рынке" },
        { name: "brandsCount", title: "брендов" },
        { name: "reliabilityStatement", title: "Физические устройства из стали и титана надёжнее бумаги и облачных сервисов" },
        { name: "bestsellersTitle", title: "Товары, которые покупают чаще всего" },
        { name: "popularCategories", title: "Популярные категории" },
        { name: "category1", title: "Кабели и переходники" },
        { name: "rightBlockTitle", title: "Выгодные предложения" },
        { name: "category2", title: "Хранение паролей \nи seed-фраз" },
        { name: "category3", title: "Защита учётных записей" },
        { name: "category4", title: "Аппаратные кошельки" },
        { name: "category7", title: "Социальные сети" },
        { name: "category8", title: "Актуальные статьи" },
        { name: "catalogButton", title: "В каталог" },
        { name: "navHome", title: "Главная" },
        { name: "navRead", title: "Читать" },
        { name: "navCatalog", title: "Каталог" },
        { name: "navSeedDevices", title: "Устройства для записи seed" },
        { name: "navBrands", title: "Бренды" },
        { name: "navAccessories", title: "Аксессуары" },
        { name: "navDelivery", title: "Доставка и оплата" },
        { name: "navHelp", title: "Помощь" },
        { name: "navCompany", title: "Компания" },
        { name: "category5", title: "U2F-токены" },
        { name: "category6", title: "Чехлы и кейсы" },
        { name: "seedPhraseDescription", title: "Надежные устройства для хранения мнемонической фразы, необходимой для восстановления доступа к вашим средствам" },
        { name: "cablesDescription", title: "Большой выбор кабелей и переходников для удобного использования ваших устройств" }
      ]);
};
