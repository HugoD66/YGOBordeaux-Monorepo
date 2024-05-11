import {
  Component,
  effect,
  ElementRef,
  HostListener,
  input,
  InputSignal,
  OnInit,
  Renderer2,
  signal,
  WritableSignal,
} from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: `app-pres`,
  templateUrl: `./pres.component.html`,
  styleUrls: [`./pres.component.scss`],
})
export class PresComponent implements OnInit {
  public user: InputSignal<UserModel | undefined> = input.required<
    UserModel | undefined
  >();

  public isAuthenticated: WritableSignal<boolean> = signal(false);
  routerLinkProfile: string = ``;

  constructor(
    private userService: UserService,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
  ) {
    effect(
      () => {
        if (this.user()?.id !== undefined) {
          console.log(this.user()?.id);
          console.log('coucoulogin');
          this.isAuthenticated.update(() => true);
          this.routerLinkProfile = `users/detail/${this.user()!.id}`;
          console.log(this.routerLinkProfile);
        }
      },
      { allowSignalWrites: true },
    );
  }

  @HostListener(`window:scroll`, [])
  onWindowScroll() {
    this.handleScroll();
  }
  handleScroll() {
    const ygoPicture: HTMLElement | null =
      this.el.nativeElement.querySelector(`#ygo-picture`);
    const scrollTop: number = window.scrollY;
    const finalSize: number = 5;
    if (scrollTop > 0) {
      this.renderer.setStyle(ygoPicture, `transition`, `all 0.2s`);
      this.renderer.setStyle(ygoPicture, `position`, `fixed`);
      this.renderer.setStyle(ygoPicture, `top`, `10`);
      this.renderer.setStyle(ygoPicture, `left`, `10`);
      this.renderer.setStyle(ygoPicture, `width`, `${finalSize}vw`);
      this.renderer.setStyle(ygoPicture, `z-index`, `5`);
    } else {
      this.renderer.setStyle(ygoPicture, `transition`, `all 0.2s`);
      this.renderer.removeStyle(ygoPicture, `position`);
      this.renderer.removeStyle(ygoPicture, `top`);
      this.renderer.removeStyle(ygoPicture, `left`);
      this.renderer.setStyle(ygoPicture, `width`, `20vw`);
      this.renderer.setStyle(ygoPicture, `z-index`, `5`);
    }
  }

  ngOnInit(): void {
    if (this.user()) {
      console.log(this.user()!.id);
      console.log('coucoulogin');
      this.isAuthenticated.set(true);
      this.routerLinkProfile = `users/detail/${this.user()!.id}`;
    } else {
      this.isAuthenticated.set(false);
    }
  }

  navigateToProfile(): void {
    if (this.user()?.id) {
      this.routerLinkProfile = `users/detail/${this.user()!.id}`;
      this.router.navigate([this.routerLinkProfile]);
    }
  }

  onLogout(): void {
    this.userService.logout();
    localStorage.removeItem(`access_token`);
    console.log(localStorage.getItem(`access_token`));
    this.isAuthenticated.set(false);
  }
}
