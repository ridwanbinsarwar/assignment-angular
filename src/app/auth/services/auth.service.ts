import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClientUserService } from "../../core/services/http-client-user.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private router: Router,
    private userService: HttpClientUserService
  ) {}

  async getUser(email: string, password: string) {
    // const data = await this.userService.searchUser(email).subscribe(data => {
    //   if (data.length == 1) {
    //     if (data[0].password == password) {
    //       localStorage.setItem("email", email);
    //       let role = data[0].role[0] == "0" ? "user" : "admin";
    //       localStorage.setItem("role", role);

    //       if (role == "user") {
    //         this.router.navigate(["/user/profile"]);
    //       } else {
    //         this.router.navigate(["/user/list"]);
    //       }
    //     }
    //   }
    // });

    const data1 = await this.userService.searchUser(email).toPromise();
    // console.log(data1);
    return data1;
  }

  async login(email: string, password: string): Promise<boolean> {
    let data = await this.getUser(email, password);
    // console.log(data, "gg");
    if (data.length == 1) {
      if (data[0].password == password) {
        localStorage.setItem("email", email);
        let role = data[0].role[0] == "0" ? "user" : "admin";
        localStorage.setItem("role", role);

        if (role == "user") {
          this.router.navigate(["/user/profile"]);
        } else {
          this.router.navigate(["/user/list"]);
        }
        return true;
      }
    } else {
      return false;
    }
  }
}
