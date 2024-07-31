import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMahasiswaPage } from './update-mahasiswa.page';

describe('UpdateMahasiswaPage', () => {
  let component: UpdateMahasiswaPage;
  let fixture: ComponentFixture<UpdateMahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
