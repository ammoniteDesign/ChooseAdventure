import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'die'})
export class DiePipe implements PipeTransform {
  transform(value?: number): any {

  	if(value === null || value === undefined){
  		return "Roll Die";
  	}else{
  		// TODO: Make this output Die Numericals somehow
  		return value;
  	}
  }
}