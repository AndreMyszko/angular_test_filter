import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchType: string, searchAbility: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    if (!searchType) {
      return items;
    }
    if (!searchAbility) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    searchType = searchType.toLocaleLowerCase();
    searchAbility = searchAbility.toLocaleLowerCase();

    return items.filter(it => {
      it.name.toLocaleLowerCase().includes(searchText);
      it.type.toLocaleLowerCase().includes(searchType);
      it.ability.toLocaleLowerCase().includes(searchAbility);
      return it.toLocaleLowerCase().includes(searchText, searchType, searchAbility);
    });

  }
}
