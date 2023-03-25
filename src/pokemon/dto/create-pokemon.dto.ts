import { IsString, IsPositive, Min, MinLength, IsInt } from "class-validator";

export class CreatePokemonDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    readonly no: number;

    @IsString()
    @MinLength(1)
    name:string;
    
}
