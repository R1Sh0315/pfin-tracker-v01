import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditFormComponent } from './pop-up-edit-form.component';

describe('PopUpEditFormComponent', () => {
  let component: PopUpEditFormComponent;
  let fixture: ComponentFixture<PopUpEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
