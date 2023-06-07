import { styleableComponentMixin, ThemeService } from '@smartface/styling-context';
import { ComponentStyleContext } from '@smartface/styling-context/lib/ComponentStyleContext';
import { BottomTabBarRouter } from '@smartface/router';
import TabBarItem from '@smartface/native/ui/tabbaritem';
import createRenderer from '@smartface/router/lib/native/createRenderer';

interface $BottomTabbarChildren {
  [key: string]: any;
}

export default class $BottomTabbar extends BottomTabBarRouter {
  protected _children: $BottomTabbarChildren = {};
  static $$styleContext: ComponentStyleContext = {
    classNames: ' .bottomTabbar',
    defaultClassNames: ' .default_bottomTabbar',
    userProps: {}
  };

  constructor(props) {
    super({
      renderer: createRenderer(),
      homeRoute: 0,
      tabbarParams: () => {
        const style = ThemeService.instance.getNativeStyle(' .bottomTabbar');
        return {
          itemColor: style.itemColor,
          ios: style.ios,
          backgroundColor: style.backgroundColor,
          iconSize: style.iconSize
        };
      },
      items: [],
      ...props
    });
    this.initTheme();
  }

  get items(): TabBarItem[] {
    //@ts-ignore
    return this._items;
  }

  initTheme() {
    //@ts-ignore
    this._items.forEach((item, index) => {
      this._children['tabbaritem' + index] = item;
    });
    ThemeService.instance.addGlobalComponent(
      {
        children: this._children
      } as any,
      'bottomTabbar'
    );
  }
}
