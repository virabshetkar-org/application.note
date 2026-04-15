import { Component, inject } from '@angular/core';
import { ConfigurationService } from '../../shared/services/configuration.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-note',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './note.page.html',
  styleUrl: './note.page.css',
})
export class NotePage {
  readonly config = inject(ConfigurationService);

  readonly frontendConfig$ = this.config.getFrontendManifest();
  readonly backendConfig$ = this.config.getBackendConfig();

  ngOnInit() {
    console.log("HERE!");
  }
}
