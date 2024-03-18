import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  // Use the names for the inputs `buttonText` and `iconName`.
  @Input() type: string = "button";
  @Input() buttonText: string = "";
  @Input() iconName: IconDefinition | null = null;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  onClickHandler (e: MouseEvent) {
    this.onClick.emit()
  }
}
