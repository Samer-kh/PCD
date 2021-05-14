import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from '../../api/rest-api.service';
import {Router} from '@angular/router';
import {FileUploadService} from '../employee-create/file-upload.service';
import {HttpEventType, HttpHeaderResponse} from '@angular/common/http';
import {log} from 'util';

@Component({
  selector: 'app-employee-enter',
  templateUrl: './employee-enter.component.html',
  styleUrls: ['./employee-enter.component.scss']
})
export class EmployeeEnterComponent implements OnInit {
  selectedFile: File = null;
  @Input() employeeDetails = { file: this.selectedFile };
  progressInfos = { value: 0, fileName: ''};
  message = '';
  active = true;
  public data: HttpHeaderResponse;
  public ch = '';
  // tslint:disable-next-line:max-line-length
  j = {headers: {normalizedNames: {}, lazyUpdate: null}, status: 200, statusText: 'OK', url: 'http://localhost:5000/employee/enter', ok: true, type: 4, body: {result: 'welcome USER 1'}};

  constructor(public restApi: RestApiService,
              public router: Router,
              private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  selectFiles(event) {
    this.progressInfos =  { value: 0, fileName: ''};
    this.selectedFile = event.target.files[0];
    this.employeeDetails.file = this.selectedFile;
  }

  async upload(file) {
    this.progressInfos = { value: 0, fileName: file.name };

    this.fileUploadService.uploadOnefile(file).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos.value = Math.round(100 * event.loaded / event.total);
          this.active = !this.active ;
        }
        this.data = event;
        return event;
      },
      err => {
        this.progressInfos.value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
    // this.restApi.departEmployee(this.data.headers.body.result[-1]);
    // this.ch = this.data.body.result as string;
  }

  enterEmployee() {
      this.router.navigate(['/']);
  }
}
