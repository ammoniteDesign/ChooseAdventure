import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'die'})
export class DiePipe implements PipeTransform {
  transform(value?: number): any {

  	if(value === null || value === undefined){
  		return "Roll Die";
  	}else{
  		// TODO: Make this output Die Numericals somehow
  		return value;
  	}

    // let exp = parseFloat(exponent);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}