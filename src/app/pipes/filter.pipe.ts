import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allData: [], searchKey:string, propName:string): any[] {
    const result:any = []
    if(!allData || searchKey == ''|| propName==''){
      return allData
    }
    allData.forEach((product:any)=>{
      if(product[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
    })
    return result;
  }

}
