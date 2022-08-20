import { Component, OnInit } from '@angular/core';
import { MainQuestService } from '../services/main-quest.service';

@Component({
  selector: 'app-settings-activity',
  templateUrl: './settings-activity.component.html',
  styleUrls: ['./settings-activity.component.css']
})
export class SettingsActivityComponent implements OnInit {

  constructor(private mainQuestService: MainQuestService) {   
  }

  ngOnInit(): void {
  }

  public triggerEvent(eventType: string) {
    this.mainQuestService.TRIGGER_SMS_EVENT.next('rootedPhone');
  }

}
