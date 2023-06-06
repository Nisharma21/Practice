import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
 title='observable getting started';
  constructor() { }
  
  obs = new Observable((observer) => {
    console.log("Observable starts")
 
    setTimeout(() => { observer.next("1") }, 1000);
    setTimeout(() => { observer.next("2") }, 2000);
    setTimeout(() => { observer.next("3") }, 3000);
    setTimeout(() => { observer.next("4") }, 4000);
    setTimeout(() => { observer.next("5") }, 5000);
    
  })

    data=[]

  ngOnInit() {
    this.obs.subscribe(
      val=> { console.log(val) },
      error => { console.log("error")},
      () => {console.log("Completed")}
    )
   
      
  }

}
