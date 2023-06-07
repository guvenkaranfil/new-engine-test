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
import { NativeStackRouter, Route, Router } from '@smartface/router';
//@ts-ignore
import RouteHelper from '../RouteHelper';
//@ts-ignore
import createRenderer from '@smartface/router/lib/native/createRenderer';
//@ts-ignore
import NavigationController from '@smartface/native/ui/navigationcontroller';

export default class $$StackLibrary<T = Page> extends NativeStackRouter {
  mainRoute: $$StackLibrary_MainRoute;
  constructor(basePath: string) {
    super({ homeRoute: 0, path: basePath, to: `${basePath}/mainRoute`, routes: [new $$StackLibrary_MainRoute(basePath)] });
    this._renderer = createRenderer(new NavigationController() as any);
    this.mainRoute = this._routes[0] as any;
  }
  get children() {
    return [this.mainRoute];
  }
}

class $$StackLibrary_MainRoute<T = Page> extends RouteHelper {
  constructor(basePath: string) {
    super({ path: `${basePath}/mainRoute` });

    this.build = (...args) => {
      const Page1 = require('pages/page1').default;
      return new Page1(...args);
    };
  }
}
