import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wi';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient)
   {}

   private getStandardOptions():any {
    return{
      headers : new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
   }

   getWishes(){

    let option = this.getStandardOptions();
    option.params = new HttpParams({
      fromObject : {
        format : 'json'
      }
    });

    return this.http.get("assets/wishes.json",option).pipe(catchError(this.handleError));
   }

   private handleError(error : HttpErrorResponse)
   {
    if(error.status == 0)
    {console.error('client or network error ', error.error);

    }
    else{
      console.error('Server side error', error.error);
    }

    return throwError(()=> new Error("Can't open this page now"));
   }

   private addWish(wish:WishItem)
   {
    let option = this.getStandardOptions();
    option.headers = option.headers.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/wishes.json',wish,option);

   }
}
