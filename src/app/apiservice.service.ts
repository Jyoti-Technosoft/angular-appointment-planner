import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public appointmentList$: Observable<any[]>;
  public doctorList$ : Observable<any[]>;
  public waitingList$ : Observable<any>;

  constructor(private httpService: HttpClient) {
   }

   
  getAppointments(): Observable<any[]> {
    return this.httpService.get<any[]>('http://ec2-3-23-112-137.us-east-2.compute.amazonaws.com/appointment/findAllAppointmentsByDay?startDate=2021-01-01');
  }

  getAppointmentList(){
    this.appointmentList$ = this.getAppointments();
  }

  getDoctor(): Observable<any[]>{
    return this.httpService.get<any[]>('http://ec2-3-23-112-137.us-east-2.compute.amazonaws.com/provider/findAllProviders');
  }

  getDoctorList(){
    return this.doctorList$ = this.getDoctor();
  }

  getWaiting() : Observable<any[]> {
    return this.httpService.get<any[]>('http://ec2-3-23-112-137.us-east-2.compute.amazonaws.com/waitingList/findAll');
  }

  getWaitingList(){
    this.waitingList$ = this.getWaiting();
  }
}