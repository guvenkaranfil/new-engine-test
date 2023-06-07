//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

//@ts-ignore
import Page from '@smartface/native/ui/page';
//@ts-ignore
import { NativeRouter, NativeStackRouter, Route, Router } from '@smartface/router';
//@ts-ignore
import RouteHelper from './RouteHelper';
//@ts-ignore
import createRenderer from '@smartface/router/lib/native/createRenderer';
//@ts-ignore
import NavigationController from '@smartface/native/ui/navigationcontroller';

export default class $$AppRouter<T = Page> extends NativeRouter {
  pages: $$AppRouter_Pages;
  constructor() {
    super({ path: '/', to: '/pages', isRoot: true, routes: [new $$AppRouter_Pages()] });
    this.pages = this._routes[0] as any;
  }
  get children() {
    return [this.pages];
  }
}

class $$AppRouter_Pages<T = Page> extends NativeStackRouter {
  page1: $$AppRouter_Pages_Page1;
  page2: $$AppRouter_Pages_Page2;
  page3: $$AppRouter_Pages_Page3;
  constructor() {
    super({
      homeRoute: 0,
      path: '/pages',
      to: '/pages/page1',
      routes: [new $$AppRouter_Pages_Page1(), new $$AppRouter_Pages_Page2(), new $$AppRouter_Pages_Page3()]
    });
    this.page1 = this._routes[0] as any;
    this.page2 = this._routes[1] as any;
    this.page3 = this._routes[2] as any;
    this._renderer = createRenderer(new NavigationController() as any);
  }
  get children() {
    return [this.page1, this.page2, this.page3];
  }
}

class $$AppRouter_Pages_Page1<T = Page> extends RouteHelper {
  constructor() {
    super({ path: '/pages/page1' });

    this.build = (...args) => {
      const Page1 = require('pages/page1').default;
      return new Page1(...args);
    };
  }
}

class $$AppRouter_Pages_Page2<T = Page> extends RouteHelper {
  constructor() {
    super({ path: '/pages/page2' });

    this.build = (...args) => {
      const Page2 = require('pages/page2').default;
      return new Page2(...args);
    };
  }
}

class $$AppRouter_Pages_Page3<T = Page> extends NativeStackRouter {
  page3: $$AppRouter_Pages_Page3_Page3;
  constructor() {
    super({ homeRoute: 0, path: '/pages/page3', to: '/pages/page3/page3', modal: true, routes: [new $$AppRouter_Pages_Page3_Page3()] });
    this.page3 = this._routes[0] as any;
    this._renderer = createRenderer(new NavigationController() as any);
  }
  get children() {
    return [this.page3];
  }
}

class $$AppRouter_Pages_Page3_Page3<T = Page> extends RouteHelper {
  constructor() {
    super({ path: '/pages/page3/page3' });

    this.build = (...args) => {
      const Page3 = require('pages/page3').default;
      return new Page3(...args);
    };
  }
}
