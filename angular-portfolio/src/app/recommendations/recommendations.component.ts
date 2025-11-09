import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { EmailConfigService } from '../../shared/services/email-config.service';

@Component({
  selector: 'app-recommendations',
  imports: [CommonModule, FormsModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {

  sending = false;
  sent = false;
  error: string | null = null;

  model = {
    from_name: '',
    reply_to: '',
    message: '',
    honeypot: ''
  };

  constructor(private emailConfigService: EmailConfigService) {}

  async send(form: any) {
    if (this.model.honeypot) {
      return;
    }

    this.sending = true;
    this.sent = false;
    this.error = null;

    try {
      const { publicKey, serviceId, templateId } = this.emailConfigService.config;
      emailjs.init({ publicKey });
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: this.model.from_name,
          email: this.model.reply_to,
          message: this.model.message,
          title: this.model.reply_to,
          time: new Date().toLocaleString()
        }
      );

      this.sent = true;
      form.resetForm();
    } catch (e) {
      this.error = 'We couldn’t send your message. Please try again later.';
      console.error(e);
    } finally {
      this.sending = false;
    }
  }
}
