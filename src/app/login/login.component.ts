import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  page = false;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.page = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  loadPage(): void{
    if (this.roles[0] == "ROLE_USER") {
      this.goToUserBoard();
    }
    else if (this.roles[0] == "ROLE_MANAGER") {
      this.goToManagerBoard();
    }
    else{
      this.goToAdminBoard();
    }
  }
  reloadPage(): void {
    window.location.reload();
  }

  goToManagerBoard(): void{
    this.router.navigate(['/mod']);
  }

  goToUserBoard(): void{
    this.router.navigate(['/user']);
  }

  goToAdminBoard(): void{
    this.router.navigate(['/admin']);
  }

}
