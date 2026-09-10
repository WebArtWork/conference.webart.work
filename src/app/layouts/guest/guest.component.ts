import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../sidebar/sidebar.service';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
	templateUrl: './guest.component.html',
	styleUrl: './guest.component.scss',
	imports: [RouterOutlet, TopbarComponent, SidebarComponent],
})
export class GuestComponent {
	readonly sidebar = inject(SidebarService);
}
