import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/api/rest-api.service';
import {Iris, ProbabilityPrediction, SVCParameters, SVCResult} from './types';
import {IrisService} from './iris.service';
import {FileUploadService} from './file-upload.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: '', files: [] };
  public svcParameters: SVCParameters = new SVCParameters();
  public svcResult: SVCResult;
  public iris: Iris = new Iris();
  public probabilityPredictions: ProbabilityPrediction[];
  shortLink = '';
  loading = false; // Flag variable
  files: FileList;
  progressInfos = [];
  message = '';
  fileInfos: Observable<any>;
  constructor(
    public restApi: RestApiService,
    public router: Router,
    private irisService: IrisService, private fileUploadService: FileUploadService
  ) { }

  ngOnInit() {
    this.fileInfos = this.fileUploadService.getFiles();
  }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/posts']),
      this.trainModel();
    });
  }

  // tslint:disable-next-line:typedef
  public trainModel() {
    this.irisService.trainModel(this.svcParameters).subscribe((svcResult) => {
      this.svcResult = svcResult;
    });
  }

  // tslint:disable-next-line:typedef
  public predictIris() {
    this.irisService.predictIris(this.iris).subscribe((probabilityPredictions) => {
      this.probabilityPredictions = probabilityPredictions;
    });
  }

  // On file Select
  // tslint:disable-next-line:typedef
  onChange(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    this.message = '';

    for (let i = 0; i < this.files.length; i++) {
      this.upload(i, this.files[i]);
    }
  }

  selectFiles(event) {
    this.progressInfos = [];
    this.files = event.target.files;
  }

  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.fileUploadService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.fileUploadService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }


 

}
