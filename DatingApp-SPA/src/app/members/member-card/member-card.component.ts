import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserServiceService } from 'src/app/_services/UserService.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})

export class MemberCardComponent implements OnInit {

  @Input() cardUser: User;

  constructor(private aurhService: AuthService, private userService: UserServiceService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }
  sendLike(recipientId: number) {
    this.userService.sendLike(this.aurhService.decodedToken.nameid, recipientId).subscribe(res => {
      this.alertifyService.success(`You have liked: ${this.cardUser.knownAs}`);
    }, error => {
      this.alertifyService.error(error);
    });
  }
}
