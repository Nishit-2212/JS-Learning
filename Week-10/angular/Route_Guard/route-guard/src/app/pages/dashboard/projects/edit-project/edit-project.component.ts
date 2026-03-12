import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-project',
  imports: [FormsModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent {

  projectData = ''
  isSaved = false;

  save() {
    this.isSaved = true;
    alert("Project saved")
  }

  canDeactivate(): boolean | Observable<boolean> {
    if(!this.isSaved) {
      return confirm('You have unsaved changes do you realy want to leav')
    }
    return true;
  }

}
