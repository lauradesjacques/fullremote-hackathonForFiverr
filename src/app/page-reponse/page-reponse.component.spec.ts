import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReponseComponent } from './page-reponse.component';

describe('PageReponseComponent', () => {
  let component: PageReponseComponent;
  let fixture: ComponentFixture<PageReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
