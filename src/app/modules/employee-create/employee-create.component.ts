import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/api/rest-api.service';
import {IrisService} from './iris.service';
import {FileUploadService} from './file-upload.service';
import {Iris, ProbabilityPrediction, SVCParameters, SVCResult} from './types';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  selectedFiles: FileList = null;
  @Input() employeeDetails = { name: '', email: '', phone: '', files: this.selectedFiles };
  public svcParameters: SVCParameters = new SVCParameters();
  public svcResult: SVCResult;
  public iris: Iris = new Iris();
  public probabilityPredictions: ProbabilityPrediction[];

  file: FileList = null;
  progressInfos = [];
  message = '';

  constructor(
    public restApi: RestApiService,
    public router: Router,
    private irisService: IrisService, private fileUploadService: FileUploadService
  ) { }

  ngOnInit() {
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/posts']);
    });
  }

  selectFiles(event) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.employeeDetails.files = this.selectedFiles;
  }

  uploadFiles() {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.fileUploadService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }

}
