import BottomTabbarDesign from '../.smartface/generated/components/BottomTabbar';

export default class BottomTabbar extends BottomTabbarDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
