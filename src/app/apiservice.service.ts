import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  appointmentList:any;
  appointment:any;
  doctorList:any;
  doctorImageList: any;
  waitingList: any;
  constructor(private httpService: HttpClient) {
   }

  getRecord() {
    return this.httpService.get('http://ec2-3-23-112-137.us-east-2.compute.amazonaws.com/appointment/findAllAppointmentsByDay?startDate=2021-01-01');
  }

  getList(){
    this.getRecord().subscribe(data => {
      console.log(data);
      this.appointmentList = data;
    });
    return this.appointmentList;
  }

  getDoctor(){
    return this.httpService.get('http://ec2-3-23-112-137.us-east-2.compute.amazonaws.com/provider/findAllProviders');
  }

  getDoctorList(){
    this.getDoctor().subscribe(data => {
      console.log(data);
      this.doctorList = data;
    });
    return this.doctorList;
  }

  getWaiting() {
    return this.httpService.get('http://ec2-3-23-112-137.us-east-2.compute.amazonaws.com/waitingList/findAll');
  }

  getWaitingList(){
    this.getWaiting().subscribe(data => {
      console.log(data);
      this.waitingList = data;
    });
    return this.waitingList;
  }
}