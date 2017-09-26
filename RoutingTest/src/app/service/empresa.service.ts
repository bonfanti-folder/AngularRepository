import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpresaService {

  baseURL = "/api";
  path = "/empresa";

  constructor(private http: Http) { }

  public async getEmpresa(): Promise<any> {
    let mPromise = this.http.get(`${this.baseURL}${this.path}`)
      .map(this.processResponse)
      .first().toPromise();

    Promise.all([mPromise]).catch(error => this.catchError(error));

    return mPromise;
  }

  private processResponse(response: Response): Response {
    if (response.status >= 200 && response.status < 300) return response.json();
  }

  private catchError(error: any) {
    console.log(error);
  }
}
