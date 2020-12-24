import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  constructor(
    public chat: ChatService,
  ) { }

  ngOnInit() {}

  timeFormat(time: string) {
    const tt = new Date(time);
    const hours = tt.getHours();
    const hoursString = hours < 10 ? '0' + hours : hours.toString();
    const minutes = tt.getMinutes();
    const minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = tt.getSeconds();
    const secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
    
    const months = tt.getMonth();
    const monthsString = months < 10 ? '0' + months : months.toString();
    const days = tt.getDate();
    const daysString = days < 10 ? '0' + days : days.toString();
    const years = tt.getFullYear();
        
    return monthsString + '-' + daysString + '-' + years+ " " + hoursString + ':' + minutesString+ ':' + secondsString;
  }
}
