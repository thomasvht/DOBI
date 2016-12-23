/**
 * Created by Sander Verkaemer on 21/12/2016.
 */
import { Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})

@Injectable()
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], arg: string): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        //return items.filter(item => item.title.indexOf(args[0].title) !== -1);
        return items.filter(item =>{
            if(!item.User && arg=="") return true;
            if(!item.User && arg!="") return false;
            return item.User.Email.indexOf(arg) !== -1;
        });
    }
}