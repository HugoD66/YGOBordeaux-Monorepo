import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { UserModel } from "../../../models/user.model";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  user!: UserModel;
  currentTime = new Date().getTime();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: UserModel) => {
      this.user = user;
    });
  }

  onFileSelect(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let file: File | null = element.files ? element.files[0] : null;
    if (file && this.user.id) {
      // Remplacez 'this.userId' par l'identifiant réel de l'utilisateur actuel
      this.userService.uploadUserPicture(this.user.id, file).subscribe((response) => {
        console.log('Image uploaded successfully');

        // Supposons que la réponse contient le nouveau chemin de l'image sous 'response.filePath'
        this.user.picture = response.filePath;

        // Mettez à jour 'currentTime' pour forcer le rechargement de l'image
        this.currentTime = new Date().getTime();
      });
    }
  }

}
