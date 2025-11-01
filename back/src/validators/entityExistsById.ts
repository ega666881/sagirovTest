import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import knex, { Knex } from 'knex';
import knexfile from "db/knexfile";


@ValidatorConstraint({ name: 'EntityExists', async: true })
@Injectable()
export class EntityExistsByIdRule implements ValidatorConstraintInterface {
    knex: Knex
    constructor() {
        this.knex = knex(knexfile.development)
    }

    async validate(value: number, args: ValidationArguments) {
        const [tableName, colName] = args.constraints
        let columbName = colName
        if (!columbName) {
            columbName = "id"
        }
        const entity = await this.knex(tableName).select("*").where(columbName, value).first()
        if (entity) {
            return true
            
        } else {
            return false
        }

        
    }

    defaultMessage(args: ValidationArguments) {
        return `Сущности не существует.`;
    }
}
