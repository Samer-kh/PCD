import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  Iris,
  ProbabilityPrediction,
  SVCParameters,
  SVCResult
} from './types';
import {map} from 'rxjs/operators';

const SERVER_URL =  'http://127.0.0.1:5000/api/';

@Injectable()
export class IrisService {

  constructor(private http: HttpClient) {
  }

  public trainModel(svcParameters: SVCParameters): Observable<any> {
    return this.http.post(SERVER_URL + 'train', svcParameters);
  }

  public predictIris(iris: Iris): Observable<any> {
    return this.http.post(SERVER_URL + 'predict', iris);
  }
}
