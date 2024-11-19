import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

export const EquipeGuard = () => {

  const router = inject(Router);
  // const authService = inject(AuthService);
  const authService = inject(AuthService);

  //recuperer le rôle depuis le authservice
  const roles = authService.getUserRoles();

  if (roles && roles.includes('equipe')) {
    // continuez avec la logique si le rôle est 'mentee'
    console.log('L\'utilisateur a le rôle de equipe');
    return true; // si l'utilisateur a le rôle, on retourne `true`
  } else {
    console.log('L\'utilisateur n\'a pas le rôle de equipe ou les rôles sont null');
    router.navigateByUrl('/'); // redirection si le rôle ne correspond pas
    return false; // si l'utilisateur n'a pas le bon rôle, on retourne `false`
  }
}
