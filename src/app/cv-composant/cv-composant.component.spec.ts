import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVComposantComponent } from './cv-composant.component';

describe('CVComposantComponent', () => {
  let component: CVComposantComponent;
  let fixture: ComponentFixture<CVComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CVComposantComponent]
    });
    fixture = TestBed.createComponent(CVComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
