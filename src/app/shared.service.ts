import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { RestaurentData } from './resturant-dash/restaurent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService 
{

  private apiURL = 'http://localhost:3000/posts';
  [x: string]: any;
  
  addRestaurent(restaurentModelObj: RestaurentData) 
  {
    throw new Error('Method not implemented.');
  }
  constructor(private _http: HttpClient) { }

  // Add Restaurant
  postRestaurent(data: RestaurentData): Observable<RestaurentData> {
    return this._http.post<RestaurentData>(this.apiURL, data).pipe(
      map((res: RestaurentData) => res)
    );
  }
  //POST request
  /*postRestaurent(data:any ) 
  {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }
*/
  //GET request
  getRestaurent() 
  {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }

  //delete request
  deleteRestaurant(id:number) 
  {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }

  //update request
  updateRestaurant(id: number, data: any) 
  {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }
}
