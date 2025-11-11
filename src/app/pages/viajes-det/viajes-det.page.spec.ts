import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesDetPage } from './viajes-det.page';

describe('ViajesDetPage', () => {
  let component: ViajesDetPage;
  let fixture: ComponentFixture<ViajesDetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesDetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
