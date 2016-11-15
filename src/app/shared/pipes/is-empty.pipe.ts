import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isEmpty'
})

export class IsEmptyPipe implements PipeTransform {
    transform = (array = []) => array.length <= 0
}