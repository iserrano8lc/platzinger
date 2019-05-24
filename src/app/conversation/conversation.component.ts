import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  friendId: any;
  private friends: User[];

  private friend: User;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { 
    this.friendId = activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);

    this.friend = userService.getFriends().find(f => {
      return f.uid == this.friendId;
    });

    console.log(this.friend);
  }

  ngOnInit() {
  }

}
