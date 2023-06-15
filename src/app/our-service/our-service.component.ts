import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent {
  btn_title = 'Learn more';
  services=[
    {
      service_img:'../../assets/img/search-doctor.png',
      service_heading:'Search doctor',
      service_desc:'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
      service_img:'../../assets/img/online-pharmacy.png',
      service_heading:'Online pharmacy',
      service_desc:'Buy  your medicines with our mobile application with a simple delivery system'
    },
    {
      service_img:'../../assets/img/consultation.png',
      service_heading:'Consultation',
      service_desc:'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
      service_img:'../../assets/img/details-info.png',
      service_heading:'Details info',
      service_desc:'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
      service_img:'../../assets/img/emergency-care.png',
      service_heading:'Emergency care',
      service_desc:'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },
    {
      service_img:'../../assets/img/tracking.png',
      service_heading:'Tracking',
      service_desc:'Track and save your medical history and health data '
    }
  ]
}
