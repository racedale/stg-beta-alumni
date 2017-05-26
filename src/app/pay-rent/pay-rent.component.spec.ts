import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../core/core.module';
import { PayRentComponent } from './pay-rent.component';

describe('PayRentComponent', () => {
  let component: PayRentComponent;
  let fixture: ComponentFixture<PayRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule ],
      declarations: [ PayRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
