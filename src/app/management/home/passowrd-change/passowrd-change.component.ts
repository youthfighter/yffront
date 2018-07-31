import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/header/services/user.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-passowrd-change',
  templateUrl: './passowrd-change.component.html',
  styleUrls: ['./passowrd-change.component.css']
})
export class PassowrdChangeComponent {
  
  private pageTitle = '修改密码';
  oldPassword: string = '1';
  newPassword: string = '11111111111111111';
  confirmPassword: string = '11111111111111111';
  error: string;
  private saving: boolean = false;
  constructor(private userService: UserService, private messageService: MessageService) { }

  async onSave() {
    if (this.newPassword.length < 8) {
      this.error = '密码长度最少为8位。';
      return;
    }
    if (this.newPassword.length > 20) {
      this.error = '密码长度最大为20位';
      return;
    }
    if (this.newPassword === this.oldPassword) {
      this.error = '新密码与旧密码相同。'
    }
    if (this.newPassword != this.confirmPassword) {
      this.error = '两次输入的密码不一致。'
      return;
    }
    //最后置空错误。
    this.error = '';
    this.saving = true;
    let result = await this.userService.changePassword(this.oldPassword, this.newPassword);
    this.saving = false;
    
  }
  cantSave() {
    return !(this.oldPassword && this.newPassword && this.confirmPassword && this.saving === false);
  }
  show() {
    console.log('show', this.messageService);
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

}
