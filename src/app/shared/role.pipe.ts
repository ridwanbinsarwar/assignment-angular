import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: string, role: string): unknown {
    if(value[0] == '0')
      return "user";
    else
      return "admin";
}

}
