import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.css'
})
export class AdministrateurComponent {
  email : string = "";
  password : string = "";
  alertController: any;
  loginForm: any;
  utilisateurService: any;
  authService: any;

  constructor(private router: Router,private http : HttpClient) {}
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.email.length<=0 || this.password.length<=0){
      alert("Veuillez remplir les champs");
      return;
    }

    this.http.get("http://localhost:8080/administrateur/login?email="+this.email+"&motDePasse="+this.password).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['']);
    })

  }

}
