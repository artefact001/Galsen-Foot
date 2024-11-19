import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

export const ZoneGuard = () => {

  const router = inject(Router);
  const authService = inject(AuthService);

  //recuperer le rôle depuis le authservice
  const roles = authService.getUserRoles();

  if (roles && roles.includes('zone')) {
    // continuez avec la logique si le rôle est 'mentor'
    console.log('L\'utilisateur a le rôle de zone');
    return true; // Si l'utilisateur a le rôle, on retourne `true`
  }else{
    console.log('L\'utilisateur n\'a pas le rôle de zone ou les rôles sont null');
    router.navigateByUrl('/');
    return false;
  }
}
