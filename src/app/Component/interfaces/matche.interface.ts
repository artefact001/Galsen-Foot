export interface Matche {
  lieux: any;
  id: number;
  competition_id: number;
  equipe1_id: number;
  equipe2_id: number;
  equipe1_nom?: string; // Nom de l'équipe 1
  equipe2_nom?: string; // Nom de l'équipe 2
  score_equipe1?: number | null;
  score_equipe2?: number | null;
  date_matche: string; // Format ISO
  statut: 'en_attente' | 'termine' | 'annule';
  buteurs?: { id: number; nom: string }[] | null; // Liste des buteurs avec noms
  passeurs?: { id: number; nom: string }[] | null; // Liste des passeurs avec noms
  homme_du_matche?: { id: number; nom: string } | null; // Joueur homme du match
  cartons?: { joueur_id: number; name: string; equipe_id: number; nom: string;   type: 'jaune' | 'rouge' }[] | null;
}
