import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRedesComponent } from './add-redes.component';

describe('AddRedesComponent', () => {
  let component: AddRedesComponent;
  let fixture: ComponentFixture<AddRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
