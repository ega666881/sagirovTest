import { tableNames } from "src/database/database.constants";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Validate } from "class-validator";
import { EntityExistsByIdRule } from "src/validators/entityExistsById";


export class UpdateTextDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Validate(EntityExistsByIdRule, [tableNames.texts])
    readonly textId: number
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly newText: string
}
export class UpdateNavButtonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Validate(EntityExistsByIdRule, [tableNames.texts])
    readonly buttonId: number
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly title: string
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    readonly index: number
}

export class CreateNavButtonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly title: string
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly index: number
}

export class DeleteNavButtonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Validate(EntityExistsByIdRule, [tableNames.navButtons])
    readonly buttonId: number
}