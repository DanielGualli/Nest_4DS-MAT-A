import { Allow, IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class BaseProductDto{
    @Allow()
    @IsNotEmpty(isNotEmtyValidationOptions())
    @IsString()
    @IsAlpha()
    readonly title;   

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price

    @IsNotEmpty()
    @IsAlphaNumeric()
    readonly description;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly image;
}


function isNotEmtyValidationOptions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}

function IsAlphaNumeric(): (target: BaseProductDto, propertyKey: "description") => void {
    throw new Error("Function not implemented.");
}

