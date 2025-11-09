import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppContent } from '../models/app-content';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private _content!: AppContent;

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    this._content = await firstValueFrom(this.http.get<AppContent>('assets/content.json'));
  }

  get content(): AppContent {
    return this._content;
  }
}


