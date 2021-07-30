import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }


  // This callApi method has 3 mindatorty param and one optional param
  // Optional param will carry the headers info if any required
  // Body is mindatory but initialized with empty object, so while passing keep in mind to pass valida json

  callApi(methodType: string, body: any = {}, path: string = "", options?: any) {
    console.log("callApi", body);
    let url = environment.server_url + path;

    let requestMehod: string = (methodType) ? methodType.toLowerCase() : "get";
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (typeof (options) == "object") {
      for (let key in options) {
        headers.append(key, options[key]);
      }
    }
    return new Promise(async (resolve, reject) => {
      switch (requestMehod) {
        case "get":
        case "delete":
          try {
            let callData = await this.http.get(url, { headers: headers }).toPromise();
            resolve(callData);
          } catch (error) {
            reject(error);
          }
          break;
        case "post":
        case "put":
          this.http.post(url, body, { headers: headers })
            .subscribe(callData => {
              console.log(callData);
              resolve(callData);
            }, error => {
              console.log(JSON.stringify(error));
              reject(error);
            });
          break;
      }
    });
  }
}
