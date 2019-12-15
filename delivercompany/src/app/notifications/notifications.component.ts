import { NotificationService } from './../services/notification/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  messageList:string[]=[];

  constructor(private notification:NotificationService) { }


  // jeżeli przybędzie nowa wiadomość zostaje ona dodana do listy po czym jest ustawiony timer
  // który wywali tę informację z listy , message list jest na bierzaco wyswietlane na ekranie
  ngOnInit() {
    this.notification.SubscribeMessageStream().subscribe(
      res=>{
        this.messageList.push(res);

        setTimeout(()=>{
          this.messageList.shift();
        },3000)
      }
    )

  }

}
