import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesFormPage } from './viajes-form.page';

describe('ViajesFormPage', () => {
  let component: ViajesFormPage;
  let fixture: ComponentFixture<ViajesFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
