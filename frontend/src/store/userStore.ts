import { observable, makeObservable } from 'mobx';
class UserStore {
  @observable isLogin = false;
  // @observable userInfo: IUserInfo | null = null;

  constructor() {
    makeObservable(this);
  }
}
export default UserStore;
