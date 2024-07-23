import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcompComponent } from './cartcomp.component';

describe('CartcompComponent', () => {
  let component: CartcompComponent;
  let fixture: ComponentFixture<CartcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
