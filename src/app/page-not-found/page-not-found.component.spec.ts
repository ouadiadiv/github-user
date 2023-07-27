import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNOtFoundComponent } from './page-not-found.component';

describe('PageNOtFoundComponent', () => {
  let component: PageNOtFoundComponent;
  let fixture: ComponentFixture<PageNOtFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNOtFoundComponent]
    });
    fixture = TestBed.createComponent(PageNOtFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
