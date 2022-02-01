import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  /**
   * Récupère tous les personnages via l'API
   * @returns Un observable
   */
  public getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.URL}/characters`);
  }

  /**
   * Modifier un personnage via l'API
   * @param user Personnage à modifier
   * @returns Un observable
   */
  public modify(user: Character): Observable<Character>  {
    return this.http.put<Character>(`${environment.URL}/characters/${user.id}`, user);
  }

  /**
   * Supprime un personnage via l'API
   * @param id Id du personnage à supprimer
   * @returns Un observable
   */
  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.URL}/characters/${id}`);
  }

  /**
   * Créer un personnage via l'api
   * @param user Le personnage à créer
   * @returns Un observable
   */
  public create(user: Character): Observable<Character> {
    return this.http.post<Character>(`${environment.URL}/characters`, user);
  }
}
