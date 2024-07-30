import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMahasiswaPage } from './create-mahasiswa.page';

describe('CreateMahasiswaPage', () => {
  let component: CreateMahasiswaPage;
  let fixture: ComponentFixture<CreateMahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
