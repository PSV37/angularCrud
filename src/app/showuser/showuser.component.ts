import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpErrorResponse  } from '@angular/common/http';
import { Http, Response, Headers} from '@angular/http';
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  seen :false;
  constructor(
    private http : Http
  ) { }

  //https://jsonplaceholder.typicode.com/users
  users = [];
  fetchUsers=function(){
    this.http.get('http://localhost:3000/users').subscribe(
      (res:Response) =>{
        this.users = res.json();
        console.log(this.users );
      }
    )
  }
  ngOnInit(){
    this.fetchUsers();
   }

   user = [];
   update(id){
    this.http.get('https://jsonplaceholder.typicode.com/users/'+id).subscribe(
      (res:Response) =>{
        this.user = res.json();
        console.log(this.user );
      }
    )
   }

   delete(id) {
    this.http.delete('https://jsonplaceholder.typicode.com/users/'+id).subscribe(
      (res:Response) =>{
        this.user = res.json();
        console.log(this.user );
        console.log('user deleted')
        alert('deleted successfully')
      }
    )
   }
}
interface UserResponse {
  login: string;
  items: string;
  name: string;
  surname:string;

}
