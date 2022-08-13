import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  no: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;
}
