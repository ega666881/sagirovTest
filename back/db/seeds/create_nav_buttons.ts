import { Knex } from "knex";
import { tableNames } from '../../src/database/database.constants'

const navTitles = [
    "Главная",
    "Читать",
    "Каталог",
    "Устройства для записи seed",
    "Бренды",
    "Аксессуары",
    "Доставка и оплата",
    "Помощь",
    "Компания"
  ]

export async function seed(knex: Knex): Promise<void> {

    await knex(tableNames.navButtons).del();

    await knex(tableNames.navButtons).insert(
        navTitles.map((title, index) => (
            {
                title: title,
                index: index
            }
        ))
    );
};
