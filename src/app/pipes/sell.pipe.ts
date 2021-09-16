import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sell'
})
export class SellPipe implements PipeTransform {
    transform(value: number): number {
        return value - 0.5;
    }
}