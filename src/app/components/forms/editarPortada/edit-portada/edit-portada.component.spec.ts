import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPortadaComponent } from './edit-portada.component';

describe('EditPortadaComponent', () => {
  let component: EditPortadaComponent;
  let fixture: ComponentFixture<EditPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPortadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
