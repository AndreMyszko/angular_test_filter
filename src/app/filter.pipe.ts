import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });

    // searchType = searchType.toLocaleLowerCase();

    // return items.filter(it => {
    //   return it.type.toLocaleLowerCase().includes(searchType);
    // });

    // searchAbility = searchAbility.toLocaleLowerCase();

    // return items.filter(it => {
    //   return it.ability.toLocaleLowerCase().includes(searchAbility);
    // });

  }
}
