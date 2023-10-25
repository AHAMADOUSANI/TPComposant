import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComposantComponent } from './detail-composant.component';

describe('DetailComposantComponent', () => {
  let component: DetailComposantComponent;
  let fixture: ComponentFixture<DetailComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComposantComponent]
    });
    fixture = TestBed.createComponent(DetailComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
