import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MahasiswaPage } from './mahasiswa.page';

describe('MahasiswaPage', () => {
  let component: MahasiswaPage;
  let fixture: ComponentFixture<MahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
