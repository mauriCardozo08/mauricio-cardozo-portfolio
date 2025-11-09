import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

@Injectable({ providedIn: 'root' })
export class EmailConfigService {
  private _config!: EmailJsConfig;

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    this._config = await firstValueFrom(
      this.http.get<EmailJsConfig>('config/emailjs.config.json')
    );
  }

  get config(): EmailJsConfig {
    return this._config;
  }
}


