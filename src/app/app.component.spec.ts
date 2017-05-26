import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppRoutingModule } from './app.routing.module';
import { RouterLinkStubDirective }   from './testing/router-stubs';
import { RouterOutletStubComponent } from './testing/router-stubs';

import { AppComponent } from './app.component';

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

////// Testing w/ real root module //////
// Tricky because we are disabling the router and its configuration
// Better to use RouterTestingModule

describe('AppComponent & AppModule', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  beforeEach( async(() => {

    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })

    // Get rid of app's Router configuration otherwise many failures.
    // Doing so removes Router declarations; add the Router stubs
    .overrideModule(AppModule, {
      remove: {
        imports: [ AppRoutingModule ]
      },
      add: {
        declarations: [ RouterLinkStubDirective, RouterOutletStubComponent ]
      }
    })

    .compileComponents()

    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      const comp = fixture.debugElement.componentInstance;
      expect(comp).toBeTruthy();
      tests();
    });
  }));

});

function tests() {
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];
  console.log("Fixture: ", fixture, "Component", comp);

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('can instantiate it', (done) => {
    expect(comp).toBeTruthy();
    done();
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(6, 'should have 3 links');
    expect(links[0].linkParams).toBe('/', '1st link should go to Home');
    expect(links[1].linkParams).toBe('/about', '1st link should go to About');
  });

  it('can click About link in template', () => {
    const stgLinkDe = linkDes[1];
    const stgLink = links[1];

    expect(stgLink.navigatedTo).toBeNull('link should not have navigated yet');

    stgLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(stgLink.navigatedTo).toBe('/about');
  });
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
